import { Component } from '@angular/core';
import { AlbumList } from './albumList.model';
import { Album } from './album.model';
import { Song } from './song.model';
import { FormBuilder,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = "Benvenuti al canzoniere";
  albums = AlbumList;
  selectedAlbum: Album;
  songList: Song[];
  songForm: FormGroup;

  constructor(public fb: FormBuilder) { }
  ngOnInit() {
  songForm: FormGroup;
  this.songForm = this.fb.group({
      albumControl: [AlbumList[0]],
      titleControl: [''],
      dateControl: [''],
      lengthControl: [''],
    });

    this.songList = new Array <Song>();
  }


  //Nell'html impostare l'html <option [ngValue]="room" ... permette di passare un oggetto 
  onChange() {
    //In questo modo ottengo l'oggetto selezionato
    this.selectedAlbum = this.songForm.controls['albumControl'].value;
  }

  onSubmit(): boolean {
    let album = this.songForm.controls['albumControl'].value;
    let title = this.songForm.controls['titleControl'].value;
    let date = this.songForm.controls['dateControl'].value;
    let length =  this.songForm.controls['lengthControl'].value;
   
    this.songList.push(new Song(album, new Date(date), length, title));
    return false;
  }
}

