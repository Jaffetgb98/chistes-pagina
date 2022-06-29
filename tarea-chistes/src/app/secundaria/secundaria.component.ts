import { Component, OnInit } from '@angular/core';
import { InfoPService } from '../info-p.service';
@Component({
  selector: 'app-secundaria',
  templateUrl: './secundaria.component.html',
  styleUrls: ['./secundaria.component.css']
})
export class SecundariaComponent implements OnInit {

  constructor(private variableServicio:InfoPService) {
    
   }

  ngOnInit(): void {
  }

}
