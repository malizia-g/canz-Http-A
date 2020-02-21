import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../album.model';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.css']
})
export class DettagliComponent implements OnInit {
  
  @Input() album : Album;
  constructor() { }

  ngOnInit(): void {
  }

}
