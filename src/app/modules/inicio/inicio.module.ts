import { CommonModule, NgOptimizedImage } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { InicioRoutingModule } from "./inicio-routing.module";

import { InicioComponent } from "./inicio.component";


@NgModule({
    declarations: [
        InicioComponent
    ],
    imports: [
        HttpClientModule,
        InicioRoutingModule,
        CommonModule,
        NgOptimizedImage
    ]
})
export class InicioModule { }