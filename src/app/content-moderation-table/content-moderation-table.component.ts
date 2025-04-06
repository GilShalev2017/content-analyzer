import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { ContentCategories, ContentStatuses } from '../../models/models';

@Component({
  selector: 'app-content-moderation-table',
  templateUrl: './content-moderation-table.component.html',
  styleUrls: ['./content-moderation-table.component.scss'], 
  standalone: false
})
export class ContentModerationTableComponent implements OnInit {
  filter: string = 'all';
  page: number = 1;
  totalCount: number = 0;
  itemsPerPage: number = 5;
  contentAnalyses: any[] = [];
  isLoading: boolean = false;

  constructor(
    private contentService: ContentService,
    // private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.fetchContentAnalyses();
  }

  fetchContentAnalyses(): void {
    this.isLoading = true;
    const offset = (this.page - 1) * this.itemsPerPage;
    // this.contentService.listAnalyses(this.itemsPerPage, offset, this.filter === 'all' ? undefined : this.filter)
    //   .subscribe(
    //     result => {
    //       this.contentAnalyses = result;
    //       this.totalCount = result.length > 0 ? Math.max(result.length + offset, this.totalCount) : this.totalCount;
    //       this.isLoading = false;
    //     },
    //     error => {
    //       this.toastService.showError('Failed to fetch content analyses.');
    //       this.isLoading = false;
    //     }
    //   );
  }

  updateStatus(id: number, status: string): void {
    // this.contentService.updateStatus(id, status)
    //   .subscribe(
    //     () => {
    //       this.toastService.showSuccess('Content status updated successfully.');
    //       this.fetchContentAnalyses();
    //     },
    //     error => {
    //       this.toastService.showError('Failed to update content status.');
    //     }
    //   );
  }

  handleDismiss(id: number): void {
    // this.updateStatus(id, ContentStatuses.APPROVED);
  }

  handleRemove(id: number): void {
    // this.updateStatus(id, ContentStatuses.REMOVED);
  }

  formatRelativeTime(timestamp: string): string {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.round(diffMs / 60000);

    if (diffMins < 1) return 'just now';
    if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;

    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;

    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  }

  formatCategory(category: string): string {
    return category.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  getCategoryBadgeColor(category: string): string {
    switch (category) {
      case ContentCategories.HATE_SPEECH:
        return 'badge-red';
      case ContentCategories.SPAM:
        return 'badge-orange';
      case ContentCategories.HARASSMENT:
        return 'badge-purple';
      case ContentCategories.EXPLICIT:
        return 'badge-pink';
      default:
        return 'badge-gray';
    }
  }

  getStatusBadgeColor(status: string): string {
    switch (status) {
      case ContentStatuses.PENDING:
        return 'badge-yellow';
      case ContentStatuses.REVIEWED:
        return 'badge-green';
      case ContentStatuses.REMOVED:
        return 'badge-red';
      case ContentStatuses.APPROVED:
        return 'badge-blue';
      default:
        return 'badge-gray';
    }
  }
}
