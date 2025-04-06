import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ai-performance',
  templateUrl: './ai-performance.component.html',
  styleUrls: ['./ai-performance.component.scss'],
  standalone: false
})
export class AiPerformanceComponent {
  @Input() stats: any;

  get isLoading(): boolean {
    return !this.stats;
  }

  get performanceMetrics() {
    return [
      {
        name: 'Accuracy',
        value: 94.2,
        color: 'bg-success-500',
      },
      {
        name: 'False Positives',
        value: 3.5,
        color: 'bg-warning-500',
      },
      {
        name: 'False Negatives',
        value: 2.3,
        color: 'bg-danger-500',
      },
      {
        name: 'Avg. Response Time',
        value: this.stats?.responseTime || 230,
        suffix: 'ms',
        color: 'bg-primary-500',
        percentage: 85,
      }
    ];
  }

  get modelUpdates() {
    return [
      {
        text: 'Improved hate speech detection',
        date: '2 days ago'
      },
      {
        text: 'Reduced false positives for spam',
        date: '5 days ago'
      },
      {
        text: 'Added support for new languages',
        date: '1 week ago'
      }
    ];
  }

  getPercentage(metric: any): string {
    return `${metric.percentage || metric.value}%`;
  }
}
