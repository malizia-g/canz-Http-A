import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../song.model';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  
  @Input() listaCanzoni:Song[];
  mostraLista : boolean = true;
  favoriteClass = "text-primary";
  constructor() { }
  
  ngOnInit(): void {
  }

  makeFavorite(song:Song)
  {
    console.log(song);
    song.favoriteClass = "text-warning";
  }

  hideList()
  {
    this.mostraLista = !this.mostraLista;
  }

}
