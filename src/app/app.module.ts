import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { QuestionsPageComponent } from './questions-page/questions-page.component';
import { ScorePageComponent } from './score-page/score-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuestionService } from './question.service';

const applicationRoutes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'assessment', component: QuestionsPageComponent },
  { path: 'score', component: ScorePageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    QuestionsPageComponent,
    ScorePageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      applicationRoutes,
    )

  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})

export class AppModule { }
