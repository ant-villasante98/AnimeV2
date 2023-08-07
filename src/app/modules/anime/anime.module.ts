import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AnimeRoutingModule } from "./anime-routing.module";
import { AnimeComponent } from "./anime.component";
import { YouTubePlayerModule } from "@angular/youtube-player";

@NgModule({
    declarations: [
        AnimeComponent
    ],
    imports: [
        AnimeRoutingModule,
        HttpClientModule,
        CommonModule,
        YouTubePlayerModule
    ]
})

export class AnimeModule { }