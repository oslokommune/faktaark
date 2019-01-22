import d3 from '@/assets/d3';
import debounce from '../util/debounce';

/**
 * @param  {Node} svg - svg element to be initialized
 */
function Base_Template(svg) {
  this.data = {};
  this.height = 0;
  this.width = 0;
  this.padding = { top: 30, right: 40, bottom: 40, left: 120 };
  this.height2 = 0;
  this.yGutter = 0;
  this.x = d3.scaleLinear();
  this.y = d3.scaleBand();
  this.max = 0;
  this.min = 0;
  this.rowHeight = 43;
  this.barHeight = 24;
  this.tabWidth = 120;
  this.tabGap = 10;
  this.strokeWidth = 4;
  this.strokeWidthHighlight = 6;
  this.parseDate = d3.timeParse('%Y-%m-%d');
  this.formatYear = d3.timeFormat('%Y');

  // Resize is called from the parent vue component
  // every time the container size changes.
  this.resize = debounce(function() {
    this.render(this.data, { method: this.method, series: this.series, highlight: this.highlight });
  }, 100);

  // Common operations to be run once a template is initialized
  this.init = function() {
    this.svg = d3.select(svg).style('font-family', 'OsloSans');

    // Clear the contents of the svg
    this.svg.selectAll('*').remove();

    // Append heading element
    this.heading = this.svg
      .append('text')
      .attr('class', 'heading')
      .attr('font-size', 14)
      .attr('font-weight', 'bold')
      .attr('y', 14);

    // Append canvas element
    this.canvas = this.svg
      .append('g')
      .attr('class', 'canvas')
      .attr('transform', `translate(${this.padding.left}, ${this.padding.top})`);

    // Append common axis elements
    this.xAxis = this.canvas.append('g').attr('class', 'axis x');
    this.yAxis = this.canvas.append('g').attr('class', 'axis y');
    this.x2Axis = this.canvas.append('g').attr('class', 'axis x2');
    this.y2Axis = this.canvas.append('g').attr('class', 'axis y2');

    // The various templates have different needs for elements to be
    // appended to the svg after initialization. This method is run
    // once for each initialization.
    this.created();
  };

  // The parent container width is needed for each render of a template.
  this.parentWidth = function() {
    return svg.parentNode.getBoundingClientRect().width;
  };

  // Placeholder for operations to be run once a child template is initialized
  this.created = function() {};

  // All templates share these common operations when rendered
  this.commonRender = function(data, options = {}) {
    if (data === undefined || data.data === undefined) return;

    data.data = Array.isArray(data.data) ? data.data.sort((a, b) => a.totalRow - b.totalRow) : data.data;
    this.data = data;

    this.heading.text(this.data.meta.heading);
    this.canvas.attr('transform', `translate(${this.padding.left}, ${this.padding.top})`);

    this.method = options.method || 'value';
    this.highlight = options.highlight || -1;
    this.series = options.series || 0;
    this.selected = options.selected === undefined || options.selected === null ? -1 : options.selected;

    this.width = this.parentWidth() - this.padding.left - this.padding.right;
    this.height = this.data.data.length * this.rowHeight;

    return true;
  };

  // Placeholder for the render method
  this.render = function() {};
}

export { Base_Template };
