import { Component, OnInit } from '@angular/core';
import { InfoPService } from '../info-p.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  informacionRecibida:any={}
    constructor(private variableServicio:InfoPService) {
      variableServicio.obtenerChistesRandom().subscribe((data)=>{
        this.informacionRecibida=data
        console.log("listo")
      })

    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  }



