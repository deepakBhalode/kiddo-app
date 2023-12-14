import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { ThankNoteComponent } from './components/thank-note/thank-note.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'audio-player',
    component: AudioPlayerComponent
  },
  {
    path: 'thank-you',
    component: ThankNoteComponent
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
