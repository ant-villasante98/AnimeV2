import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Anime } from 'src/app/core/models/anime';
import { AnimeService } from 'src/app/core/services/anime.service';
import { map, switchMap } from 'rxjs/operators'
import { observable, Observable } from 'rxjs';
import { ModalDialogService } from 'src/app/core/services/modal-dialog.service';
import { DayTemplateContext } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-template-context';

@Component({
  selector: 'app-buscar-anime',
  templateUrl: './buscar-anime.component.html',
  styleUrls: ['./buscar-anime.component.css']
})
export class BuscarAnimeComponent implements OnInit {

  nombreBusqueda: string = '';
  pagina: number = 1;

  limitResultPage: number = 18;

  $listResult: Observable<Anime[]> | null = null;
  // listResult$: any

  lastPage: number;
  // animes$:observable
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private animeService: AnimeService,
    private modalDialog: ModalDialogService
  ) {
  }

  ngOnInit(): void {

    //funcion para realizar la busqueda cada vez que cambie el parametro de la URL
    this.observaUrl()
    // this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => {
    //     this.nombreBusqueda = params.get('q');
    //     return this.animeService.get(params.get('q'), this.pagina, this.limitResultPage);
    //   }
    //   ))
    //   .subscribe((r: any) => {
    //     this.lastPage = r.pagination.last_visible_page;
    //     this.listResult = r.data;
    //   }
    //   )
    //funcion para ejecutar la busqueda de animes pero solo funciona la primera vez
    // this.nombreBusqueda = String(this.route.snapshot.paramMap.get('q'));
    // console.log(this.nombreBusqueda + 'buscar')
    // this.buscar(this.nombreBusqueda);
  }
  observaUrl() {
    this.$listResult = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.nombreBusqueda = params.get('q')
          return this.animeService.get(params.get('q'), this.pagina, this.limitResultPage)
        })
      ).pipe(map(({ data, pagination }: any) => {
        this.lastPage = pagination.last_visible_page
        // let { data } = res
        return data
      }))
  }

  buscar(q: string) {
    if (this.nombreBusqueda == '') {
      return;
    }
    // this.modalDialog.BloquearPantalla('#contenedor-resultados-busqueda');
    console.log('entra')
    this.$listResult = this.animeService.get(q, this.pagina, this.limitResultPage)
      .pipe(
        map(({ data, pagination }: any) => {
          this.lastPage = pagination.last_visible_page
          window.scroll(0, 0);
          return data
        })
      )
    // .subscribe((r: any) => {
    // this.lastPage = r.pagination.last_visible_page;
    // this.$listResult = r.data;
    // this.modalDialog.DesbloquearPantalla();
    //   window.scroll(0, 0);
    // })
  }
}
interface Data {
  data: Anime[]
  pagination: {
    last_visible_page: number
  }
}
