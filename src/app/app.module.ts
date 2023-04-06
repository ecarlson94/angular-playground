import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './scaffold/home/welcome.component';
import { NavbarComponent } from './scaffold/navbar/navbar.component';
import { ElementsModule } from './element/element.module';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, NavbarComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
    ElementsModule,
    MenubarModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
