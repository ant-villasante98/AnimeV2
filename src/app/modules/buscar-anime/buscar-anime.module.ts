import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'
import { BuscarAnimeComponent } from './buscar-anime.component'
import { HttpClientModule } from '@angular/common/http'
import { BuscarAnimeRoutingModule } from './buscar-anime-routing.module'
import { ReticulaElementosModule } from 'src/app/shared/components/reticula-elementos/reticula-elementos.module'
@NgModule({
    declarations: [BuscarAnimeComponent],
    imports: [
        CommonModule,
        NgbPaginationModule,
        NgbModule,
        HttpClientModule,
        BuscarAnimeRoutingModule,
        ReticulaElementosModule
    ]
}
)
export class BuscarAnimeModule { }