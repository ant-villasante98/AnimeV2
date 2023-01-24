import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeComponent } from './components/anime/anime.component';
import { BuscarAnimeComponent } from './components/buscar-anime/buscar-anime.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'buscar/:q', component: BuscarAnimeComponent },
  { path: 'anime/:id', component: AnimeComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
