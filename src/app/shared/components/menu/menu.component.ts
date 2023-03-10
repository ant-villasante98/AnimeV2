import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Anime } from 'src/app/core/models/anime';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild('tituloPagina', { static: true }) tituloPagina: ElementRef<HTMLElement>;
  @ViewChild('btnBuscar', { static: true }) btnBuscar: ElementRef<HTMLElement>;
  @ViewChild('inputNombreBusqueda', { static: true }) inputNombreBusqueda: ElementRef<HTMLElement>;

  formBuscar: UntypedFormGroup;
  constructor(
    private form: UntypedFormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.inputNombreBusqueda?.nativeElement.addEventListener("onkeypress",function(event)  {
    //   if (event. == 13) {
    //     this.btnBuscar.nativeElement.click();
    //   } // Use `.key` instead.
    //   // document.querySelector("#linkadd").click(); // Things you want to do.
    //   // event.preventDefault(); // No need to `return false;`.
    // });
    this.formBuscar = this.form.group({
      nombre: ['']
    });

  }

  buscar() {
    let q: string = this.formBuscar.controls.nombre.value.trim();
    if (q == '') {
      return;
    }
    // this.router.onSameUrlNavigation = 'reload';
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate(['buscar/', q], {
        skipLocationChange: false, replaceUrl: false
      }));
  }
  onKeyUp(event) {
    if (event.keyCode == 13) {
      this.btnBuscar.nativeElement.click();
    }
  }

}
