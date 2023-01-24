import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AnimeComponent } from './components/anime/anime.component';
import { BuscarAnimeComponent } from './components/buscar-anime/buscar-anime.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
import { MyInterceptor } from './shared/my-Interceptor';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AnimeComponent,
    BuscarAnimeComponent,
    MenuComponent,
    ModalDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
