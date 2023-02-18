import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { Anime } from 'src/app/core/models/anime';
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
    this.getTop()

  }

  getTop() {
    this.listResult$ = this.animeService.getTop('anime')
      .pipe(
        map(({ data }) => data))
  }

}
