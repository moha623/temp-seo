import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './core/layout/layout.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './core/home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],

  imports: [BrowserModule, AppRoutingModule, CommonModule, FormsModule],
  providers: [provideClientHydration(withEventReplay()), provideFirebaseApp(() => initializeApp({ projectId: "temp-seo", appId: "1:705787828567:web:802c158f1358689f384612", storageBucket: "temp-seo.firebasestorage.app", apiKey: "AIzaSyBB8GO0VJqv3Za01w6F_8ZyUIjzPwVQhbg", authDomain: "temp-seo.firebaseapp.com", messagingSenderId: "705787828567" })), provideFirestore(() => getFirestore())],
  bootstrap: [AppComponent],
})
export class AppModule {}
