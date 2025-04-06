import { Component } from '@angular/core';
import { ContentService } from './services/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false
})
export class AppComponent {
  title = 'content-analyzer';
  metrics = [
    { title: 'Total Content', value: 235 },
    { title: 'Flagged Content', value: 37 },
    { title: 'AI Confidence', value: '93%' },
    { title: 'Avg. Response Time', value: '1.3s' }
  ];

  
  cardData = {
    totalContent: 0,
    flaggedContent: 0,
    aiConfidence: 0,
    avgResponseTime: 0,
  };
  
  contentStats: any = null;
  isLoading = false;

  constructor(private conetntService: ContentService ) {
  
    
  }

  onFetchNews() {
    this.isLoading = true;
    this.conetntService.fetchNews().subscribe(data => {
      this.contentStats = data;
      this.isLoading = false;
    });
  }

  // fetchNews() {
  //   // Simulate API call
  //   console.log('Fetching news...');
  //   setTimeout(() => {
  //     this.metrics = [
  //       { title: 'Total Content', value: 250 },
  //       { title: 'Flagged Content', value: 41 },
  //       { title: 'AI Confidence', value: '94%' },
  //       { title: 'Avg. Response Time', value: '1.2s' }
  //     ];
  //   }, 1000);
  // }
}
