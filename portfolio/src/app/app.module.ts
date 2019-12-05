import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CanvasComponent } from './canvas/canvas.component';
import { ProjectsComponent } from './projects/projects.component';

const appRoutes: Routes = [
  { path: '', component: CanvasComponent },
  { path: 'header', component: HeaderComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CanvasComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
