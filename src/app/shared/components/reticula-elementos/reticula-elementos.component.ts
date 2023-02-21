import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";
import { Anime } from "src/app/core/models/anime";


@Component({
    selector: 'app-reticula-elementos',
    templateUrl: './reticula-elementos.component.html',
    styleUrls: ["./reticula-elementos.component.css"]
})
export class ReticulaElementosComponent {
    @Input() $listElementos: Observable<Anime[]> | null = null;

    censura: string = "hentai"

    censurarImg(item) {
        let res = ''
        if (item.rating) {
            res = item?.rating.toLowerCase().includes(this.censura) ? 'censurar' : ' '
        }
        return res
    }
}