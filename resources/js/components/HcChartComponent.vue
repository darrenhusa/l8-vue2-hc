<template>
  <div>
    <highcharts :options="chartOptions" ref="lineCharts" :constructor-type="'chart'"></highcharts>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
import Highcharts from "highcharts";
import exportingInit from "highcharts/modules/exporting";
import stockInit from "highcharts/modules/stock";

stockInit(Highcharts);
exportingInit(Highcharts);

export default {
  props: {
    title: String,
    height: Number,
    data: Array,
    partsdata: {
      type: Array
    }
  },

  components: {
    highcharts: Chart
  },

  data() {
    return {
      chartOptions: {
        chart: {
          type: "spline",
          height: this.height
        },
        title: {
          text: this.title
        },
        xAxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ]
        },
        tooltip: {
          crosshairs: true,
          shared: true
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          spline: {
            marker: {
              radius: 4,
              lineColor: "#666666",
              lineWidth: 1
            }
          }
        },
        series: [
          {
            data: this.data || [1, 2, 3, 1]
          }
        ]
      }
    };
  }
};
</script>
