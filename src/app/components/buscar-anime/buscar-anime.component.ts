import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import gsap from 'gsap/all';
import { Anime } from 'src/app/models/anime';
import { AnimeService } from 'src/app/services/anime.service';
import { switchMap } from 'rxjs/operators'
import { observable, Observable } from 'rxjs';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';

@Component({
  selector: 'app-buscar-anime',
  templateUrl: './buscar-anime.component.html',
  styleUrls: ['./buscar-anime.component.css']
})
export class BuscarAnimeComponent implements OnInit {

  nombreBusqueda: string = '';
  pagina: number = 1;

  limitResultPage: number = 12;

  listResult: Anime[] = null;
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
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        console.log('aquiiii')
        this.nombreBusqueda = params.get('q');
        return this.animeService.get(params.get('q'), this.pagina, this.limitResultPage);
      }
      ))
      .subscribe((r: any) => {
        console.log('peticion');
        this.lastPage = r.last_page * this.limitResultPage;
        this.listResult = r.results;
      }
      )
    //funcion para ejecutar la busqueda de animes pero solo funciona la primera vez
    // this.nombreBusqueda = String(this.route.snapshot.paramMap.get('q'));
    // console.log(this.nombreBusqueda + 'buscar')
    // this.buscar(this.nombreBusqueda);
  }

  buscar(q: string) {
    if (this.nombreBusqueda == '') {
      return;
    }
    // this.modalDialog.BloquearPantalla('#contenedor-resultados-busqueda');
    console.log('entra')
    this.animeService.get(q, this.pagina, this.limitResultPage).subscribe((r: any) => {
      this.lastPage = r.last_page * this.limitResultPage
      this.listResult = r.results;
      // this.modalDialog.DesbloquearPantalla();
      window.scroll(0, 0);
    })
  }
  animacionElemento(elemto: Element, badera: boolean) {

    if (badera) {
      gsap.to(elemto, {
        duration: 1,
        scale: 1.1
      })
    }
    else {
      gsap.to(elemto, {
        duration: 1,
        scale: 1
      })

    }
  }
}