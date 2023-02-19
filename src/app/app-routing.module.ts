import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeComponent } from './modules/anime/anime.component';
import { BuscarAnimeComponent } from './modules/buscar-anime/buscar-anime.component';


const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  },
  { path: 'buscar/:q', component: BuscarAnimeComponent },
  { path: 'anime/:id', component: AnimeComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
