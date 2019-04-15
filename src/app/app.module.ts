import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ElModule } from 'element-angular';
import { RouterModule, Routes } from '@angular/router';
import { Demo01Component } from './demo01/demo01.component';
import { ProjectActivityComponent } from './project-activity/project-activity.component';
import { BudgetItemComponent } from './budget-item/budget-item.component';
const appRoutes: Routes = [
  { path: 'demo', component: Demo01Component },
  { path: '', component: ProjectActivityComponent},
  { path: 'budgetItem', component: BudgetItemComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    Demo01Component,
    ProjectActivityComponent,
    BudgetItemComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    ElModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
