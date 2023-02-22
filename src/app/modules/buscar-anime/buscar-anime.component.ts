import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Anime } from 'src/app/core/models/anime';
import { AnimeService } from 'src/app/core/services/anime.service';
import { finalize, map, switchMap } from 'rxjs/operators'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-buscar-anime',
  templateUrl: './buscar-anime.component.html',
  styleUrls: ['./buscar-anime.component.css']
})
export class BuscarAnimeComponent implements OnInit {

  nombreBusqueda: string = '';
  pagina: number = 1;

  limitResultPage: number = 20;

  $listResult: Observable<Anime[]> | null = null;

  lastPage: number;

  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeService
  ) {
  }

  ngOnInit(): void {

    //funcion para realizar la busqueda cada vez que cambie el parametro de la URL
    this.observarUrl()

    //funcion para ejecutar la busqueda de animes pero solo funciona la primera vez
    // this.nombreBusqueda = String(this.route.snapshot.paramMap.get('q'));
    // this.buscar(this.nombreBusqueda);
  }
  observarUrl() {
    this.$listResult = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.nombreBusqueda = params.get('q')
          console.log("Observador de Parametros de URL")
          return this.animeService.get(this.nombreBusqueda, this.pagina, this.limitResultPage)
        })
      ).pipe(map(({ data, pagination }: any) => {
        this.lastPage = pagination.last_visible_page
        return data
      }))
  }

  nextPage(q: string) {
    if (this.nombreBusqueda == '') return;

    this.$listResult = this.animeService.get(q, this.pagina, this.limitResultPage)
      .pipe(
        map(({ data, pagination }: any) => {
          this.lastPage = pagination.last_visible_page
          window.scrollTo(0, 0);
          return data
        })
      )
  }
}

