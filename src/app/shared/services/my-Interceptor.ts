import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { ModalDialogService } from "../../core/services/modal-dialog.service";


@Injectable()
export class MyInterceptor implements HttpInterceptor {


    constructor(
        private ms: ModalDialogService
    ) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        this.ms.BloquearPantalla();
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                this.ms.DesbloquearPantalla()
                return throwError(error)
            }),
            finalize(() => this.ms.DesbloquearPantalla())
        )
    }
}