// content.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContentService {
  private apiUrl = 'http://localhost:5168/api/content'; // Correct port
  private token = 'your-jwt-token'; // Replace with a real token

  constructor(private http: HttpClient) { }

  extractTechCompanies(url: string) {
    return this.http.post(`${this.apiUrl}/tech-companies`, { url });
  }

  scrapeAndAnalyze(url: string) {
    return this.http.post(this.apiUrl, { url });
  }

  fetchNews(): Observable<any> {
    // Simulate an API call with fake data and delay
    return of({
      totalContent: 1200,
      flaggedContent: 157,
      aiConfidence: '92%',
      avgResponseTime: '2.4s'
    }).pipe(delay(1500));
  }
  // extractTechCompanies(url: string) {
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${this.token}`,
  //   });
  //   return this.http.post(`${this.apiUrl}/tech-companies`, { url }, { headers });
  // }

  // scrapeAndAnalyze(url: string) {
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${this.token}`,
  //   });
  //   return this.http.post(this.apiUrl, { url }, { headers });
  // }
}