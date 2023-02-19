import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BuscarAnimeComponent } from "./buscar-anime.component";

const routes: Routes = [
    { path: '', component: BuscarAnimeComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BuscarAnimeRoutingModule { }