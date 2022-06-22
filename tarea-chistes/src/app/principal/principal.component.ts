import { Component, OnInit } from '@angular/core';
import { InfoPService } from '../info-p.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  informacionRecibida={}
    constructor(private varServicio:InfoPService) {
      varServicio.obtenerChistesRandom().subscribe((data)=>{
        this.informacionRecibida=data
        console.log("listo")
      })

    }
  ngOnInit(): void {}

  }



