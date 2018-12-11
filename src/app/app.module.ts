import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PhrasesService } from './phrases.service';
import {  TranslationService } from './translation.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateComponent } from './components/translate/translate.component';
import { TutionComponent } from './components/tution/tution.component';
import { PhraseComponent } from './components/phrase/phrase.component';
import { SettingComponent } from './components/setting/setting.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslateComponent,
    TutionComponent,
    PhraseComponent,
    SettingComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "" ,
       redirectTo:'home' ,
       pathMatch:'full'
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'phrase',
        component: PhraseComponent
      },
      {
        path: 'tution',
        component: TutionComponent
      },
      {
        path: 'translate',
        component: TranslateComponent
      },
      {
        path: 'setting',
        component: SettingComponent
      }

    ])
  ],
  providers: [PhrasesService,  TranslationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
