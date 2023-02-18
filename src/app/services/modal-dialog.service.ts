import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalDialogComponent } from '../shared/components/modal-dialog/modal-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ModalDialogService {

  private modalBloqueoRef: NgbModalRef;
  private contador: number = 0;
  constructor(
    private ngbModal: NgbModal
  ) { }

  BloquearPantalla(container: string = 'body') {
    this.contador++
    if (this.contador == 1) {
      this.modalBloqueoRef = this.ngbModal.open(ModalDialogComponent, {
        backdrop: 'static',
        keyboard: true,
        centered: true,
        container: container
      });
    }
  }
  DesbloquearPantalla() {
    this.contador = 0;
    this.modalBloqueoRef.close();
  }
}
