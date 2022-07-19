import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from 'src/app/core/services/theme.service';
import { ChartOptions } from '../../../models/chart-options';

@Component({
  selector: 'app-bidding-chart-card',
  templateUrl: './bidding-chart-card.component.html'
})
export class BiddingChartCardComponent implements OnInit, OnDestroy {

  public chartOptions: Partial<ChartOptions>;
  private subscription: Subscription = new Subscription();

  constructor(
    private themeService: ThemeService
  ) {

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
        height: 150,
        toolbar: {
          show: false
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
        enabled: false,
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
        colors: [baseColor] // line color
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
          rotate: 0,
          rotateAlways: false,
          show: false,
          style: {
            colors: labelColor,
            fontSize: '12px'
          }
        },
        crosshairs: {
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
            fontSize: '12px'
          }
        }
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
        theme: 'light',
        style: {
          fontSize: '12px'
        },
        y: {
          formatter: function (val) {
            return val + '$';
          }
        }
      },
      colors: [baseColor], //line gradient
      grid: {
        borderColor: borderColor, // lines color
        strokeDashArray: 3,
        yaxis: {
          lines: {
            show: true
          }
        }
      },
      markers: {
        strokeColors: baseColor,
        strokeWidth: 3,

      },

    };
  }

  ngOnInit(): void {
    let sub = this.themeService.themeChanged.subscribe(theme => {
      this.chartOptions.tooltip!.theme = theme;
    });
    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
