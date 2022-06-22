import { Component, OnInit } from '@angular/core';
import { InfoPService } from '../info-p.service'; 


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  infoRecibida:any={}
    constructor(private varServicio:InfoPService) {
      varServicio.obtenerChistesRandom().subscribe((data)=>{
        this.infoRecibida=data
        console.log("listo")
      })

    }
  ngOnInit(): void {}

  }



