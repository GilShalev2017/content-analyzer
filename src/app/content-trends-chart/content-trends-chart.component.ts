import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-content-trends-chart',
  templateUrl: './content-trends-chart.component.html',
  standalone: false,
  styleUrls: ['./content-trends-chart.component.scss']
})
export class ContentTrendsChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
    selectedRange: 'day' | 'week' | 'month' = 'week';

  dayData = [
    { name: '00:00', total: 240, flagged: 22 },
    { name: '04:00', total: 130, flagged: 18 },
    { name: '08:00', total: 380, flagged: 45 },
    { name: '12:00', total: 510, flagged: 63 },
    { name: '16:00', total: 450, flagged: 52 },
    { name: '20:00', total: 320, flagged: 38 },
  ];

  weekData = [
    { name: 'Mon', total: 1240, flagged: 122 },
    { name: 'Tue', total: 1380, flagged: 145 },
    { name: 'Wed', total: 1520, flagged: 176 },
    { name: 'Thu', total: 1250, flagged: 140 },
    { name: 'Fri', total: 1450, flagged: 160 },
    { name: 'Sat', total: 1080, flagged: 95 },
    { name: 'Sun', total: 980, flagged: 87 },
  ];

  monthData = [
    { name: 'Week 1', total: 8240, flagged: 722 },
    { name: 'Week 2', total: 7890, flagged: 645 },
    { name: 'Week 3', total: 8520, flagged: 776 },
    { name: 'Week 4', total: 9150, flagged: 840 },
  ];

  ngOnInit() {
    this.updateChart();
  }

  setRange(range: 'day' | 'week' | 'month') {
    this.selectedRange = range;
    this.updateChart();
  }

  updateChart() {
    const data = this.selectedRange === 'day' ? this.dayData :
                 this.selectedRange === 'week' ? this.weekData : this.monthData;

    this.chartOptions = {
      chart: {
        type: 'line',
        height: 300
      },
      title: { text: undefined },
      xAxis: {
        categories: data.map(d => d.name),
      },
      yAxis: {
        title: { text: 'Count' }
      },
      tooltip: {
        shared: true
      },
      series: [
        {
          name: 'Total Content',
          type: 'line',
          data: data.map(d => d.total),
          color: '#3B82F6'
        },
        {
          name: 'Flagged Content',
          type: 'line',
          data: data.map(d => d.flagged),
          color: '#EF4444',
          dashStyle: 'Dash'
        }
      ]
    };
  }
}
