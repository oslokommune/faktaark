import { apiUrl, baseUrl } from '../../util/config';
import source from './dataSources';

const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Levekårsindikatorer',
  value: 'levekaar',
  production: true,
  cards: [
    {
      size: 'large',
      heading: 'Levekår',
      about: 'Se detaljert forklaring av levekårsindikatorene i de respektive boksene under.',
      sources: [source.ssb],
      production: true,
      tabs: [
        {
          production: true,
          active: true,
          help: 'Verdier under 100% betyr en lavere forekomst enn i Oslo, mens over 100% betyr en større forekomst.',
          label: 'Sammenlignet med Oslo',
          template: 'k',
          heading: 'Ulike levekårsindikatorer (%) sammenlignet med Oslo',
          method: 'ratio',
          mode: 'osloRatio',
          url: `${API}/levekar-totalt-status`,
        },
        {
          production: true,
          active: true,
          label: 'Sammenlignet med bydelen',
          help: 'Verdier under 100% betyr en lavere forekomst enn i bydelen, mens over 100% betyr en større forekomst.',
          template: 'k',
          heading: 'Ulike levekårsindikatorer (%) sammenlignet med bydelen',
          method: 'ratio',
          mode: 'districtRatio',
          url: `${API}/levekar-totalt-status`,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Lav utdanning',
      sources: [source.ssb],
      about:
        'Statistikken omfatter personer 30–59 år, per 1.1, med utdanningsnivå per 1.10 året før. Lav utdanning omfatter personer med kun grunnskole, ingen eller uoppgitt utdanning. Fra og med 1.10.2014 har SSB gjort endringer i beregningsmetode over utdanningsnivå for innvandrere som står med uoppgitt i registeret. SSB bruker imputerte verdier på disse dataene. Dette har ført til brudd i tidsserien; utdanningsnivå fra og med 2015  er ikke direkte sammenlignbart tidligere år.',
      map: {
        labels: ['Færre', 'Flere'],
        url: `${API}/levekar-lav-utdanning-status`,
        heading: 'Personer 30–59 år med lav utdanning',
        scale: [0, 0.5],
        reverse: true,
        method: 'ratio',
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'levekar_lav-utdanning_andel',
          heading: 'Personer 30–59 år med lav utdanning',
          template: 'a',
          method: 'ratio',
          url: `${API}/levekar-lav-utdanning-status`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          id: 'levekar_lav-utdanning_andel',
          heading: 'Personer 30–59 år med lav utdanning',
          template: 'a',
          method: 'value',
          url: `${API}/levekar-lav-utdanning-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'levekar_lav-utdanning_historisk',
          heading: 'Personer 30–59 år med lav utdanning',
          help: 'Skifte i datagrunnlaget fra SSB mellom 2014 og 2015.',
          method: 'ratio',
          template: 'b',
          url: `${API}/levekar-lav-utdanning-historisk`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          id: 'levekar_lav-utdanning_historisk',
          heading: 'Personer 30–59 år med lav utdanning',
          help: 'Skifte i datagrunnlaget fra SSB mellom 2014 og 2015.',
          method: 'value',
          template: 'b',
          url: `${API}/levekar-lav-utdanning-historisk`,
          production: true,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Lavinntekt',
      about:
        'Statistikken viser husholdninger med barn under 18 år med lav inntekt, i henhold til EU-skala. Det vil si, husholdningens inntekt etter skatt per forbruksenhet er under 60 prosent av medianinntekten for Oslo. I henhold til EU-skalaen er husholdningsinntekten skalert med forbruksvekter ved å gi første voksne i husholdningen vekten 1, andre voksne vekten 0,5 hver, mens hvert barn får vekten 0,3. Inntekten er videre korrigert for formue, det vil si at husholdninger som har brutto finanskapital per forbruksenhet over 1G, uansett ikke regnes som lavinntektshusholdninger.',
      sources: [source.ssb],
      map: {
        labels: ['Færre', 'Flere'],
        heading: 'Barnehusholdninger med lav inntekt',
        reverse: true,
        scale: [0, 0.3],
        method: 'ratio',
        url: `${API}/fattige-barnehusholdninger-status`,
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'levekar_fattige_andel',
          heading: 'Barnehusholdninger med lav inntekt',
          template: 'a',
          method: 'ratio',
          url: `${API}/fattige-barnehusholdninger-status`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          id: 'levekar_fattige_andel',
          heading: 'Barnehusholdninger med lav inntekt',
          template: 'a',
          method: 'value',
          url: `${API}/fattige-barnehusholdninger-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'levekar_fattige_historisk',
          heading: 'Barnehusholdninger med lav inntekt',
          method: 'ratio',
          template: 'b',
          url: `${API}/fattige-barnehusholdninger-historisk`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          id: 'levekar_fattige_historisk',
          heading: 'Barnehusholdninger med lav inntekt',
          method: 'value',
          template: 'b',
          url: `${API}/fattige-barnehusholdninger-historisk`,
          production: true,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Ikke fullført videregående skole',
      about:
        'Statistikken omfatter bosatte personer 21–29 år, per 1.1, som har startet i videregående utdanning uten å fullføre i løpet av 5 år. Fullføring er oppdatert per 1.oktober året før. Årstallet i overskriften relateres til året for fullføring.',
      sources: [source.ssb],
      map: {
        labels: ['Færre', 'Flere'],
        url: `${API}/ikke-fullfort-vgs-status`,
        heading: 'Personer 21–29 uten fullført VGS',
        method: 'ratio',
        scale: [0.1, 0.5],
        reverse: true,
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'levekar_vgs_andel',
          heading: 'Personer 21–29 år som ikke har fullført videregående skole',
          template: 'a',
          method: 'ratio',
          url: `${API}/ikke-fullfort-vgs-status`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          id: 'levekar_vgs_andel',
          heading: 'Personer 21–29 år som ikke har fullført videregående skole',
          template: 'a',
          method: 'value',
          url: `${API}/ikke-fullfort-vgs-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'levekar_vgs-historisk',
          heading: 'Personer 21–29 år som ikke har fullført videregående skole',
          template: 'b',
          method: 'ratio',
          url: `${API}/ikke-fullfort-vgs-historisk`,
          production: true,
        },

        {
          active: false,
          label: 'Historisk (antall)',
          id: 'levekar_vgs-historisk',
          heading: 'Personer 21–29 år som ikke har fullført videregående skole',
          template: 'b',
          method: 'value',
          url: `${API}/ikke-fullfort-vgs-historisk`,
          production: true,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Dødelighet',
      about:
        'For hver 5 års gruppe og kjønn for alderen 55–79 år beregnes det en dødsrate, dvs. antall døde per 1000 personer. Det lages deretter et gjennomsnitt av disse 10 dødsratene. Deretter igjen lages det et gjennomsnitt for de 7 siste årene for å sikre at tilfeldige årsvariasjoner ikke skal påvirke hovedmønsteret.',
      sources: [source.ssb],
      map: {
        labels: ['Lavere dødsrate', 'Høyere dødsrate'],
        url: `${API}/dodsrater-status`,
        scale: [0.09, 0.5],
        reverse: true,
        heading: 'Dødelighet for personer 55–79 år',
        method: 'ratio',
        showPermille: true,
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Døde per 1000 personer',
          id: 'levekar_dodsrater_status_andel',
          template: 'a',
          method: 'ratio',
          url: `${API}/dodsrater-status`,
          production: true,
          showPermille: true,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Ikke sysselsatte',
      about:
        'Statistikken omfatter bosatte i Oslo, 30–59 år, som ikke er registrert sysselsatt per 4. kvartal. En sysselsatt er her definert som enten lønnstaker eller selvstendig næringsdrivende. En lønnstaker er en som har utført inntektsgivende arbeid av minst én times varighet i løpet av referanseuken.',
      sources: [source.ssb],
      map: {
        labels: ['Færre', 'Flere'],
        url: `${API}/levekar-ikke-sysselsatte-status`,
        scale: [0.09, 0.352],
        heading: 'Ikke-sysselsatte 30–59 år',
        method: 'ratio',
        reverse: true,
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Antall',
          id: 'levekaar_ikke_sysselsatte_status_antall',
          heading: 'Ikke sysselsatte 30–59 år',
          template: 'a',
          method: 'value',
          url: `${API}/levekar-ikke-sysselsatte-status`,
          production: true,
        },
        {
          active: false,
          label: 'Andel',
          id: 'levekaar_ikke_sysselsatte_status_andel',
          heading: 'Ikke sysselsatte 30–59 år',
          template: 'a',
          method: 'ratio',
          url: `${API}/levekar-ikke-sysselsatte-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          id: 'levekaar_ikke_sysselsatte_historisk_antall',
          heading: 'Ikke sysselsatte 30–59 år',
          template: 'b',
          method: 'value',
          url: `${API}/levekar-ikke-sysselsatte-historisk`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'levekaar_ikke_sysselsatte_historisk_andel',
          heading: 'Ikke sysselsatte 30–59 år',
          template: 'b',
          method: 'ratio',
          url: `${API}/levekar-ikke-sysselsatte-historisk`,
          production: true,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Kort botid',
      about:
        'Statistikken omfatter personer som har innvandret til Norge fra Asia, Afrika, Latin-Amerika og Øst-Europa for mindre enn fem år siden.',
      sources: [source.ssb],
      map: {
        labels: ['Færre', 'Flere'],
        url: `${API}/levekar-innvandrere-ikke-vestlige-kort-status`,
        heading: 'Ikke-vestlige innvandrere med kort botid',
        scale: [0, 0.082],
        method: 'ratio',
        reverse: true,
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Antall',
          id: 'levekaar_innvandrere_ikke_vestlige_kort_status_antall',
          heading: 'Innvandrere fra Asia, Afrika, Latin-Amerika og Øst-Europa utenfor EU med botid kortere enn fem år',
          template: 'a',
          method: 'value',
          url: `${API}/levekar-innvandrere-ikke-vestlige-kort-status`,
          production: true,
        },
        {
          active: false,
          label: 'Andel',
          id: 'levekaar_innvandrere_ikke_vestlige_kort_status_andel',
          heading: 'Innvandrere fra Asia, Afrika, Latin-Amerika og Øst-Europa utenfor EU med botid kortere enn fem år',
          template: 'a',
          method: 'ratio',
          url: `${API}/levekar-innvandrere-ikke-vestlige-kort-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          id: 'levekar_innvandrere_ikke_vestlige_kort_historisk_antall',
          heading: 'Innvandrere fra Asia, Afrika, Latin-Amerika og Øst-Europa utenfor EU med botid kortere enn fem år',
          template: 'b',
          method: 'value',
          url: `${API}/levekar-innvandrere-ikke-vestlige-kort-historisk`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'levekar_innvandrere_ikke_vestlige_kort_historisk_andel',
          heading: 'Innvandrere fra Asia, Afrika, Latin-Amerika og Øst-Europa utenfor EU med botid kortere enn fem år',
          template: 'b',
          method: 'ratio',
          url: `${API}/levekar-innvandrere-ikke-vestlige-kort-historisk`,
          production: true,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Trangboddhet',
      about:
        'Statistikken viser trangbodde husholdninger per 1.1. Husholdninger regnes som trangbodd dersom: (1) Antall rom i boligen er mindre enn antall personer eller én person bor på ett rom, og (2) antall kvadratmeter (p-areal) er under 25 kvm per person. I tilfeller hvor det mangler opplysninger om antall rom eller p-areal, vil husholdninger regnes som trangbodde dersom en av de to betingelsene er oppfylt.',
      production: true,
      sources: [source.ssb],
      map: {
        labels: ['Færre', 'Flere'],
        heading: 'Trangbodde husholdninger',
        url: `${API}/levekar-trangbodde-status`,
        scale: [0.051, 0.465],
        method: 'ratio',
        reverse: true,
      },
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'levekar_trangbodde_status',
          heading: 'Trangbodde husholdninger',
          template: 'a',
          method: 'ratio',
          url: `${API}/levekar-trangbodde-status`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          id: 'levekar_trangbodde_status',
          heading: 'Trangbodde husholdninger',
          template: 'a',
          method: 'value',
          url: `${API}/levekar-trangbodde-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'levekar_trangbodde_historisk',
          heading: 'Trangbodde husholdninger',
          method: 'ratio',
          template: 'b',
          url: `${API}/levekar-trangbodde-historisk`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          id: 'levekar_trangbodde_historisk',
          heading: 'Trangbodde husholdninger',
          method: 'value',
          template: 'b',
          url: `${API}/levekar-trangbodde-historisk`,
          production: true,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Redusert funksjonsevne',
      about:
        'Statistikken omfatter personer i alderen 16 til 66 år med redusert funksjonsevne per 30. november. F.o.m. 2010 er redusert funksjonsevne definert som mottakere av sykepenger, uførepensjon  eller personer med nedsatt arbeidsevne. Nedsatt arbeidsevne omfatter personer som på grunn av sykdom, skade eller andre hindringer har behov for ekstra oppfølging fra NAV for å få eller beholde arbeid. For perioden 2000–2009 er redusert funksjonsevne definert som personer som er registrert i FD-trygd basen på ett eller flere av disse områdene per 30.11: Uførepensjon, sykepenger, medisinsk rehabilitering, foreløpig uførestønad eller arbeidssøkerstatus=yrkeshemmet.',
      sources: [source.ssb],
      production: true,
      map: {
        labels: ['Færre', 'Flere'],
        url: `${API}/levekar-redusert-funksjonsevne-status`,
        heading: 'Personer 16–66 år med redusert funksjonsevne',
        scale: [0.065, 0.239],
        reverse: true,
        method: 'ratio',
      },
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'levekar_redusert_funksjonsevne_status_andel',
          heading: 'Personer 16–66 år med redusert funksjonsevne',
          template: 'a',
          method: 'ratio',
          url: `${API}/levekar-redusert-funksjonsevne-status`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          id: 'levekar_redusert_funksjonsevne_status_antall',
          heading: 'Personer 16–66 år med redusert funksjonsevne',
          template: 'a',
          method: 'value',
          url: `${API}/levekar-redusert-funksjonsevne-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'levekar_redusert_funksjonsevne_historisk_andel',
          heading: 'Personer 16–66 år med redusert funksjonsevne',
          method: 'ratio',
          template: 'b',
          url: `${API}/levekar-redusert-funksjonsevne-historisk`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          id: 'levekar_redusert_funksjonsevne_historisk_antall',
          heading: 'Personer 16–66 år med redusert funksjonsevne',
          method: 'value',
          template: 'b',
          url: `${API}/levekar-redusert-funksjonsevne-historisk`,
          production: true,
        },
      ],
    },
  ],
  options: {
    kategori: 'Levekår',
    tema: 'Levekårs&shy;indikatorer',
    bgImage: `${baseUrl}/img/levekaar`,
    txtColor: 'rgb(244, 206, 138)',
  },
  related: ['husholdninger', 'innvandrerbefolkningen', /*'rom-per-person', TODO: temporary */],
};
