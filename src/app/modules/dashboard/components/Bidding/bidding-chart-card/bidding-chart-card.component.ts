import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexLegend,
  ApexDataLabels,
  ApexFill,
  ApexStroke,
  ApexYAxis,
  ApexStates,
  ApexTooltip,
  ApexGrid,
  ApexTheme,
  ApexAnnotations,
  ApexResponsive,
  ApexPlotOptions,
  ApexMarkers
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries
  chart: ApexChart
  legend: ApexLegend
  dataLabels: ApexDataLabels
  fill: ApexFill
  stroke: ApexStroke
  xaxis: ApexXAxis
  yaxis: ApexYAxis | ApexYAxis[]
  states: ApexStates
  tooltip: ApexTooltip
  colors: string[]
  grid: ApexGrid
  title: ApexTitleSubtitle
  subtitle: ApexTitleSubtitle
  theme: ApexTheme
  annotations: ApexAnnotations
  responsive: ApexResponsive[]
  plotOptions: ApexPlotOptions
  markers: ApexMarkers
};

@Component({
  selector: 'app-bidding-chart-card',
  templateUrl: './bidding-chart-card.component.html'
})
export class BiddingChartCardComponent implements OnInit {

  public chartOptions: Partial<ChartOptions>;

  constructor() {

    const labelColor = '#565674';
    const borderColor = '#323248';
    const baseColor = '#7239ea';

    this.chartOptions = {
      series: [{
        name: "Etherium",
        data: [2100, 3200, 3200, 2400, 2400, 1800, 1800, 2400, 2400, 3200, 3200, 3000, 3000, 3250, 3250]
      }],
      chart: {
        fontFamily: 'inherit',
        type: 'area',
        height: 200,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.2,
          stops: [15, 120, 100]
        }
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [baseColor]
      },
      xaxis: {
        categories: ['10AM', '10.30AM', '11AM', '11.15AM', '11.30AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM'],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false
        },
        offsetX: 20,
        tickAmount: 4,
        labels: {
          show: false,
          style: {
            colors: labelColor,
            fontSize: '12px',
          },
        },
        crosshairs: {
          show: true,
          position: 'front',
          stroke: {
            color: baseColor,
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
          },
        },
      },
      yaxis: {
        tickAmount: 4,
        max: 4000,
        min: 1000,
        labels: {
          show: false
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px'
        },
        y: {
          formatter: function (val) {
            return val + '$';
          }
        }
      },
      colors: [baseColor],
      grid: {
        borderColor: borderColor,
        strokeDashArray: 3,
        yaxis: {
          lines: {
            show: true
          }
        }
      },
      markers: {
        strokeColors: baseColor,
        strokeWidth: 3
      }
    };
  }

  ngOnInit(): void {
  }

}
