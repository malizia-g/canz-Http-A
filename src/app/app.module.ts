import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; //Importa Il modulo http
import { FormsModule } from '@angular/forms';
import { SongListComponent } from './song-list/song-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DettagliComponent } from './dettagli/dettagli.component'; //Aggiungiamo qui 


@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    DettagliComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
