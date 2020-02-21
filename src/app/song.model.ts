import { Album } from './album.model';

export class Song
{
    public favoriteClass : string = "text-primary"
    constructor(
        public album : Album,
        public data_uscita: Date,
        public durata : number,
        public title : String,
    
    ) {}
    
}