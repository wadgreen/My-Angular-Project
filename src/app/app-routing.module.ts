import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PhraseComponent } from './components/phrase/phrase.component';
import { TutionComponent } from './components/tution/tution.component';
import { TranslateComponent } from './components/translate/translate.component';
import { SettingComponent } from './components/setting/setting.component';

const routes: Routes = [
    {
      path: 'home',
      pathMatch: 'full',
      component: HomeComponent
    },
    {
      path: 'phrase',
      pathMatch: 'full',
      component: PhraseComponent
    },
    {
      path: 'tution',
      pathMatch: 'full',
      component: TutionComponent
    },
    {
      path: 'translate',
      pathMatch: 'full',
      component: TranslateComponent
    },
    {
      path: 'setting',
      pathMatch: 'full',
      component: SettingComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
