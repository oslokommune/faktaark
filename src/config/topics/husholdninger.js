import { apiUrl, baseUrl } from '../../util/config';
import source from './dataSources';

const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Husholdninger',
  value: 'husholdninger',
  production: true,
  cards: [
    {
      size: 'large',
      heading: 'Husholdningstyper',
      about: 'Statistikken omfatter privathusholdninger i Oslo per 1.1.',
      sources: [source.ssb],
      map: {
        labels: ['Færre', 'Flere'],
        url: `${API}/husholdningstyper-status`,
        heading: 'Aleneboende',
        method: 'ratio',
        series: 0,
        scale: [0.25, 0.6],
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'husholdningstyper_status',
          template: 'a',
          method: 'ratio',
          url: `${baseUrl}/test.json`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          id: 'husholdningstyper_status',
          template: 'a',
          method: 'value',
          url: `${baseUrl}/test.json`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          help: 'Skifte i datagrunnlaget fra SSB mellom 2012 og 2014.',
          id: 'husholdningstyper_historisk',
          template: 'c',
          url: `${API}/husholdningstyper-historisk`,
          method: 'ratio',
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          help: 'Skifte i datagrunnlaget fra SSB mellom 2012 og 2014.',
          id: 'husholdningstyper_historisk',
          template: 'c',
          url: `${API}/husholdningstyper-historisk`,
          method: 'value',
          production: true,
        },
      ],
    },
    {
      size: 'large',
      heading: 'Husholdninger med barn',
      about:
        'Statistikken omfatter privathusholdninger i Oslo per 1.1. Husholdninger med barn regnes her som husholdninger med barn under 18 år.',
      sources: [source.ssb],
      map: {
        labels: ['Færre', 'Flere'],
        url: `${API}/husholdning-totalt-status`,
        heading: 'Husholdninger med 1 barn',
        method: 'ratio',
        series: 0,
        scale: [0.06, 0.32],
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'husholdning_totalt_status',
          template: 'a',
          method: 'ratio',
          url: `${API}/husholdning-totalt-status`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          id: 'husholdning_totalt_status',
          heading: 'Husholdninger etter husholdningstype',
          template: 'a',
          method: 'value',
          url: `${API}/husholdning-totalt-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          help: 'Skifte i datagrunnlaget fra SSB mellom 2012 og 2014.',
          id: 'husholdning_totalt_historisk',
          heading: 'Husholdninger etter husholdningstype',
          template: 'c',
          url: `${API}/husholdning-totalt-historisk`,
          method: 'ratio',
          production: true,
        },

        {
          active: false,
          label: 'Historisk (antall)',
          help: 'Skifte i datagrunnlaget fra SSB mellom 2012 og 2014.',
          id: 'husholdning_totalt_historisk',
          heading: 'Husholdninger etter husholdningstype',
          template: 'c',
          url: `${API}/husholdning-totalt-historisk`,
          method: 'value',
          production: true,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Husholdninger med ett barn',
      about: 'Statistikken omfatter privathusholdninger i Oslo per 1.1.',
      sources: [source.ssb],
      map: {
        labels: ['Færre', 'Flere'],
        heading: 'Husholdninger med ett barn',
        url: `${API}/husholdninger-med-1-barn-status`,
        method: 'ratio',
        series: 0,
        scale: [0.04, 0.21],
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'husholdning_med_1_barn_andel-status',
          template: 'a',
          method: 'ratio',
          url: `${API}/husholdninger-med-1-barn-status`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          id: 'husholdning_med_1_barn_antall-status',
          template: 'a',
          method: 'value',
          url: `${API}/husholdninger-med-1-barn-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'husholdning_med_1_barn_andel-historisk',
          template: 'a',
          method: 'ratio',
          url: `${API}/husholdninger-med-1-barn-historisk`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          id: 'husholdning_med_1_barn_antall-historisk',
          template: 'a',
          method: 'value',
          url: `${API}/husholdninger-med-1-barn-status`,
          production: true,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Husholdninger med to barn',
      about: 'Statistikken omfatter privathusholdninger i Oslo per 1.1.',
      sources: [source.ssb],
      map: {
        labels: ['Færre', 'Flere'],
        heading: 'Husholdninger med to barn',
        url: `${API}/husholdninger-med-2-barn-status`,
        method: 'ratio',
        series: 0,
        scale: [0.025, 0.22],
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Historisk (Andel)',
          id: 'husholdning_med_to_barn_andel-status',
          template: 'a',
          method: 'ratio',
          url: `${API}/husholdninger-med-2-barn-status`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          id: 'husholdning_med_to_barn_antall-status',
          template: 'a',
          method: 'value',
          url: `${API}/husholdninger-med-2-barn-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'husholdning_med_to_barn_andel-historisk',
          template: 'a',
          method: 'ratio',
          url: `${API}/husholdninger-med-2-barn-historisk`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          id: 'husholdning_med_to_barn_antall-historisk',
          template: 'a',
          method: 'value',
          url: `${API}/husholdninger-med-2-barn-historisk`,
          production: true,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Husholdninger med tre eller flere barn',
      about: 'Statistikken omfatter privathusholdninger i Oslo per 1.1.',
      sources: [source.ssb],
      map: {
        labels: ['Færre', 'Flere'],
        heading: 'Husholdninger med tre+ barn',
        url: `${API}/husholdninger-med-3-barn-status`,
        method: 'ratio',
        series: 0,
        scale: [0, 0.15],
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'husholdning_med_tre_barn_andel-status',
          template: 'a',
          method: 'ratio',
          url: `${API}/husholdninger-med-3-barn-status`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          id: 'husholdning_med_tre_barn_antall-status',
          template: 'a',
          method: 'value',
          url: `${API}/husholdninger-med-3-barn-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'husholdning_med_tre_barn_andel-historisk',
          template: 'a',
          method: 'ratio',
          url: `${API}/husholdninger-med-3-barn-historisk`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          id: 'husholdning_med_tre_barn_antall-historisk',
          template: 'a',
          method: 'value',
          url: `${API}/husholdninger-med-3-barn-historisk`,
          production: true,
        },
      ],
    },
  ],
  options: {
    kategori: 'Befolkning',
    tema: 'Husholdninger',
    bgImage: `${baseUrl}/img/husholdninger`,
    txtColor: 'rgb(245, 173, 165)',
  },
  related: ['rom-per-person', 'eierform', 'bygningstyper'],
};
