import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-content-categories-chart',
  templateUrl: './content-categories-chart.component.html',
  styleUrls: ['./content-categories-chart.component.scss'],
  standalone: false
})
export class ContentCategoriesChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
      height: 240,
    },
    title: {
      text: undefined,
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        innerSize: '40%',
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        }
      }
    },
    series: [{
      name: 'Categories',
      type: 'pie',
      data: [
        { name: 'Text', y: 60, color: '#3B82F6' },
        { name: 'Images', y: 20, color: '#8B5CF6' },
        { name: 'Video', y: 10, color: '#EF4444' },
        { name: 'Other', y: 10, color: '#F59E0B' },
      ]
    }]
  };

  categories = [
    { name: 'Text', value: 60, color: '#3B82F6' },
    { name: 'Images', value: 20, color: '#8B5CF6' },
    { name: 'Video', value: 10, color: '#EF4444' },
    { name: 'Other', value: 10, color: '#F59E0B' },
  ];
}
