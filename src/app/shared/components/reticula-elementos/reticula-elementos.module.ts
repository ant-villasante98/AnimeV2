import { CommonModule, NgOptimizedImage } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReticulaElementosComponent } from "./reticula-elementos.component";


@NgModule({
    declarations: [ReticulaElementosComponent],
    imports: [
        CommonModule,
        NgOptimizedImage,
        RouterModule
    ],
    exports: [ReticulaElementosComponent]

})
export class ReticulaElementosModule { }