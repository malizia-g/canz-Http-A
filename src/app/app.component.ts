// Importo tutto il necessario le varie classi e i vari componenti
import { Component, Input } from '@angular/core';
import { AlbumList } from './albumList.model';
import { Album } from './album.model';
import { Song } from './song.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //creo una variabile che mi permette di capire la opzione selezionata
  selectedOption : string;
  // inserisco il titoli
  title = "Benvenuti al canzoniere";
  // indico che albums è uguale a album list 
  albums = AlbumList;
  // dico che selectedAlbum prende gli attributi dalla classe albuum e li inserisce nell'arrey vuoto AlbumList
  selectedAlbum: Album = AlbumList[0];

  songList: Song[];  //Questo vettore va passato al componente sonList
  // creo un observable un oggetto che notifica quando arriva la risposta http dal server
  obsSongs : Observable<Song[]>;
  //costruttore con la richesta http
  constructor(public  http: HttpClient) { 

  }

  ngOnInit() {
    // indichiamo che songList è un array che verrà riempito dalla variabile song
    this.songList = new Array <Song>();
    // un metodo che faccia una get ma ritorni un observable che ritorni i dati in una lista di oggetti
    this.obsSongs = this.http.get<Song[]>("https://my-json-server.typicode.com/malizia-g/hotel/songlist");
    //Attacchiamo all'Observable o un metodo "observer" che verrà lanciato quando arriva la risposta
    this.obsSongs.subscribe(this.getSongs);
  }
    //Il metodo che notifica la risposta 
  getSongs = (data : Song[]) =>
  {
    //Notifico l’oggetto ricevuto dal server
    this.songList = data;
  }

  /*Il metodo on CLick controlla cerca l'album selezionato in base al titolo e aggiunge la canzone
  Selezionata alla songList*/
  onClick(t: HTMLInputElement  ,d : HTMLInputElement, l :HTMLInputElement ) : boolean
  {
    this.selectedAlbum = AlbumList.find((album: Album) => album.title == this.selectedOption);
    this.songList.push(new Song(this.selectedAlbum, new Date(d.value), Number(l.value), t.value));
    //Dopo aver aggiunto la canzone azzero tutti i campi
    t.value ="";
    d.value ="";
    l.value="";
    this.selectedOption = undefined;
    return false;
  }


  onChange()
  {
    this.selectedAlbum = AlbumList.find((album: Album) => album.title == this.selectedOption);
  }
}

