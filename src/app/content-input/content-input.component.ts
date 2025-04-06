import { Component } from '@angular/core';
import { ContentService } from '../services/content.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-content-input',
  templateUrl: './content-input.component.html',
  styleUrl: './content-input.component.scss',
  standalone: false
})
export class ContentInputComponent {
  urlControl = new FormControl('');

  constructor(private contentService: ContentService) { }

  extractCompanies() {
    if (this.urlControl.value) { // Add null check
      this.contentService.extractTechCompanies(this.urlControl.value).subscribe();
    } else {
      console.error("URL is null or empty");
    }
  }

  scrapeAndAnalyze() {
    if (this.urlControl.value) { // Add null check
      this.contentService.scrapeAndAnalyze(this.urlControl.value).subscribe();
    } else {
      console.error("URL is null or empty");
    }
  }
}
