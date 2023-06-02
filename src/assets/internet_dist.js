import { defineComponent, h } from 'vue'

import { GChart } from 'vue-google-charts'

export const type = 'ComboChart'

export const data = [
  [
    'Period',
    'Internet subscriptions per 100 inhabitants',
    'Internet subscriptions',
  ],
  ['2021/Dec', 64.44, 8.349],
  ['2022/Mar', 60.42, 7.873],
  ['2022/Jun', 60.62, 7.943],
  ['2022/Sept',62.73, 8.267],
  ['2022/Dec', 62.86, 8.327],
];

export const options = {
  title: 'The state of internet consumption as of 2022',
  vAxis: { title: '-' },
  hAxis: { title: 'Period' },
  seriesType: 'bars',
  series: { 0: { type: 'line' } },
  width: 1000,
  height: 200,
};

export default defineComponent({
  name: 'GoogleChart',
  components: {
    GChart,
  },
  setup() {
    return () =>
      h(GChart, {
        data,
        options,
        type,
      });
  },
});
