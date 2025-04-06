import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../services/websocket.service';

@Component({
  selector: 'app-results-display',
  templateUrl: './results-display.component.html',
  styleUrl: './results-display.component.scss',
  standalone: false
})
export class ResultsDisplayComponent implements OnInit {
  results: any[] = [];

  constructor(private websocketService: WebsocketService) {}

  ngOnInit() {
    this.websocketService.connect().subscribe((message: any) => {
      console.log('WebSocket message received:', message);
      this.results.push(message);
    });
  }
}
