import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SampleFormComponent } from './sample-form/sample-form.component';
import { MatInputModule, MatButtonModule,MatSelectModule,MatSnackBarModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { SampleFormResultsComponent } from './sample-form-results/sample-form-results.component';
import {DataServiceService} from './data-service.service';
const appRoutes: Routes = [
  { path: '', component: SampleFormComponent },
  {
    path: 'result',
    component: SampleFormResultsComponent
  },
  { path: '**', component: SampleFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SampleFormComponent,
    SampleFormResultsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
