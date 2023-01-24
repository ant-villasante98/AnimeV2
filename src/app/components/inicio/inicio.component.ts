import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import gsap from 'gsap';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { Anime } from 'src/app/models/anime';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  @ViewChild('tituloInicio', { static: true }) tituloInicio: ElementRef<HTMLElement>;

  listResult: Anime[];
  listResult$: Observable<Anime[]>;

  constructor(
    private animeService: AnimeService
  ) { }

  ngOnInit(): void {
    this.getTop();
    this.initAmima();
  }

  getTop() {
    this.listResult$ = this.animeService.getTop('anime')
      .pipe(
        map(({ data }) => data))
  }
  animacionElemento(elemto: Element, badera: boolean) {

    // console.log(elemto)
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
  initAmima() {
    gsap.from(this.tituloInicio.nativeElement, {
      duration: 2,
      x: (screen.width / 2)
    })
  }
}
