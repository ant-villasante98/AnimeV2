import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Anime } from 'src/app/models/anime';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {

  Elemento: Anime;
  cargaFinalizada: boolean = false;
  urlVideo: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    const IdAnime: number = Number(this.route.snapshot.paramMap.get('id'));
    this.getAnime(IdAnime);
  }
  getAnime(id: number) {
    this.animeService.getById(id).subscribe((e: any) => {
      this.Elemento = e.data;
      this.cargaFinalizada = true;
      this.transform(this.Elemento.trailer.url);
    })
  }
  transform(url: string) {
    this.urlVideo = this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
}
