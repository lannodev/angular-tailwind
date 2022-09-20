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
  ApexMarkers,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
  fill: ApexFill;
  stroke: ApexStroke;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  states: ApexStates;
  tooltip: ApexTooltip;
  colors: string[];
  grid: ApexGrid;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  theme: ApexTheme;
  annotations: ApexAnnotations;
  responsive: ApexResponsive[];
  plotOptions: ApexPlotOptions;
  markers: ApexMarkers;
};
