import { Component } from '@angular/core';
import {LugaresService} from "../services/lugares.service";

@Component({
    selector: 'app-lugares',
    templateUrl: './lugares.component.html'
})
export class LugaresComponent {
    title = 'PlatziSquare';
    lat:number = 4.6560663;
    lng:number = -74.0595918;
    lugares: null;
    constructor(private lugaresService: LugaresService){
      lugaresService.getLugares()
          .valueChanges()
          .subscribe(lugares => {
          console.log(lugares)
          this.lugares = lugares;
});
    }
}
