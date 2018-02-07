import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LugaresService} from "../services/lugares.service";

@Component({
    selector: 'app-detalles',
    templateUrl: './detalles.component.html'
})
export class DetallesComponent {
    id = null;
    lugar:any = {};
    constructor(private route: ActivatedRoute, private lugaresService:LugaresService){
        this.id = this.route.snapshot.params['id'];
        this.lugar = this.lugaresService.buscarLugar(this.id);
    }
}
