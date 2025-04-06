import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContentCategories, AutoActions } from '../../models/models';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-ai-rules',
  templateUrl: './ai-rules.component.html',
  styleUrls: ['./ai-rules.component.scss'],
  standalone: false
})
export class AiRulesComponent implements OnInit {
  rules: any[] = [];
  isLoading = false;
  isCreating = false;
  newRuleForm!: FormGroup;
  isAddRuleOpen = false;

  ContentCategories = ContentCategories;
  AutoActions = AutoActions;

  constructor(
    private fb: FormBuilder,
    private contentService: ContentService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.newRuleForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: [ContentCategories.HATE_SPEECH, Validators.required],
      sensitivity: [75, [Validators.required, Validators.min(0), Validators.max(100)]],
      autoAction: [AutoActions.FLAG, Validators.required],
      active: [true],
      icon: ['ri-spam-2-line'],
    });

    this.fetchRules();
  }

  fetchRules(): void {
    this.isLoading = true;
    this.contentService.listRules().subscribe(
      (data) => {
        this.rules = data;
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
        this.snackBar.open('Failed to load rules', '', { duration: 3000 });
      }
    );
  }

  createRule(): void {
    if (this.newRuleForm.valid) {
      this.isCreating = true;
      this.contentService.createRule(this.newRuleForm.value).subscribe(
        () => {
          this.snackBar.open('Rule created successfully!', '', { duration: 3000 });
          this.fetchRules();
          this.isCreating = false;
          this.resetForm();
        },
        () => {
          this.snackBar.open('Failed to create rule', '', { duration: 3000 });
          this.isCreating = false;
        }
      );
    }
  }

  toggleRuleActive(ruleId: number, active: boolean): void {
    this.contentService.updateRule(ruleId, { active: !active }).subscribe(
      () => {
        this.snackBar.open('Rule status updated', '', { duration: 3000 });
        this.fetchRules();
      },
      () => {
        this.snackBar.open('Failed to update rule status', '', { duration: 3000 });
      }
    );
  }

  resetForm(): void {
    this.newRuleForm.reset({
      name: '',
      description: '',
      category: ContentCategories.HATE_SPEECH,
      sensitivity: 75,
      autoAction: AutoActions.FLAG,
      active: true,
      icon: 'ri-spam-2-line',
    });
  }

  openAddRuleDialog(): void {
    this.isAddRuleOpen = true;
  }

  closeAddRuleDialog(): void {
    this.isAddRuleOpen = false;
  }

  getIconForCategory(category: string): string {
    switch (category) {
      case ContentCategories.HATE_SPEECH:
        return 'report';
      case ContentCategories.VIOLENCE:
        return 'warning';
      case ContentCategories.ADULT_CONTENT:
        return 'explicit';
      case ContentCategories.SPAM:
        return 'spam';
      default:
        return 'category';
    }
  }

  getCategoryColor(category: string): string {
    switch (category) {
      case ContentCategories.HATE_SPEECH:
        return 'text-red-600';
      case ContentCategories.VIOLENCE:
        return 'text-yellow-700';
      case ContentCategories.ADULT_CONTENT:
        return 'text-purple-700';
      case ContentCategories.SPAM:
        return 'text-blue-600';
      default:
        return 'text-gray-500';
    }
  }

}
