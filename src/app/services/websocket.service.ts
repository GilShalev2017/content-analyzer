import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({ providedIn: 'root' })
export class WebsocketService {
  private socket$: WebSocketSubject<any> | undefined;

  connect() {
    if (!this.socket$) {
      this.socket$ = webSocket('ws://localhost:5168/ws'); // Your C# backend WebSocket URL
      console.log('WebSocket connection established.');
    }

    return this.socket$.asObservable();
  }
}