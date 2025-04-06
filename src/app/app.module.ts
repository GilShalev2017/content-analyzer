import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatCardModule} from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { ContentInputComponent } from './content-input/content-input.component';
import { ResultsDisplayComponent } from './results-display/results-display.component';
import { ContentTrendsChartComponent } from './content-trends-chart/content-trends-chart.component';
import { ContentCategoriesChartComponent } from './content-categories-chart/content-categories-chart.component';
import { ContentModerationTableComponent } from './content-moderation-table/content-moderation-table.component';
import { AiRulesComponent } from './ai-rules/ai-rules.component';
import { AiPerformanceComponent } from './ai-performance/ai-performance.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { contentReducer } from './store/reducers';
import { AppEffects } from './store/effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { ContentService } from './services/content.service';
import { WebsocketService } from './services/websocket.service';

import { HighchartsChartModule } from 'highcharts-angular';




@NgModule({
  declarations: [
    AppComponent,
    ContentInputComponent,
    ResultsDisplayComponent,
    ContentTrendsChartComponent,
    ContentCategoriesChartComponent,
    ContentModerationTableComponent,
    AiRulesComponent,
    AiPerformanceComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,
    
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,

    HighchartsChartModule,
    
    StoreModule.forRoot({ results: contentReducer }),
    EffectsModule.forRoot([AppEffects]),
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [ContentService,WebsocketService],
  bootstrap: [AppComponent],
})
export class AppModule {}