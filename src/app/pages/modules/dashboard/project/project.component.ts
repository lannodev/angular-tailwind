import { Component, ViewChild } from '@angular/core';
import { TuiDay } from '@taiga-ui/cdk';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  colors: string[];
};

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent {
  
  /**
   * 
   */
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: ChartOptions;

  /**
   * 
   */
  selectedDay: TuiDay | null = null;

  /**
   * 
   */
  tableData!:{ taskId: string, subject: string, priority:number, imgUrl:string }[];
  tableColumns!:string[];

  constructor() {
    this.initializeChart(); 
    this.initializeTableData();
  }

  initializeTableData() {

    this.tableData = [
      {
        taskId:"KCM-1393",
        subject:"Design sign up flow",
        priority:1,
        imgUrl:""
      },
      {
        taskId:"KCM-2039",
        subject:"Update contact page",
        priority:2,
        imgUrl:""
      },
      {
        taskId:"KCM-2155",
        subject:"Document features 2.0",
        priority:2,
        imgUrl:""
      },
      {
        taskId:"KCM-2270",
        subject:"Fix typo in home page",
        priority:3,
        imgUrl:""
      },
      {
        taskId:"KCM-1957",
        subject:"Fix broken API",
        priority:1,
        imgUrl:""
      }
    ];

    this.tableColumns = Object.keys(this.tableData[0]);
  }

  onDayClick(day: TuiDay): void {
    this.selectedDay = day;
  }

  initializeChart() {
    this.chartOptions = {
      series: [
        {
          name: "Actual",
          data: [
            {
              x: "2011",
              y: 1292,
              goals: [
                {
                  name: "Expected",
                  value: 1400,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2012",
              y: 4432,
              goals: [
                {
                  name: "Expected",
                  value: 5400,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2013",
              y: 5423,
              goals: [
                {
                  name: "Expected",
                  value: 5200,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2014",
              y: 6653,
              goals: [
                {
                  name: "Expected",
                  value: 6500,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2015",
              y: 8133,
              goals: [
                {
                  name: "Expected",
                  value: 6600,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2016",
              y: 7132,
              goals: [
                {
                  name: "Expected",
                  value: 7500,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2017",
              y: 7332,
              goals: [
                {
                  name: "Expected",
                  value: 8700,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2018",
              y: 6553,
              goals: [
                {
                  name: "Expected",
                  value: 7300,
                  strokeWidth: 5,
                  strokeColor: "#775DD0"
                }
              ]
            }
          ]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          columnWidth: "60%"
        }
      },
      colors: ["#00E396"],
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ["Actual", "Expected"],
        markers: {
          fillColors: ["#00E396", "#775DD0"]
        }
      }
    };
  }
}
