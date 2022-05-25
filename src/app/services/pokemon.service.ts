import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  getPokemon(offset=0){
    return this.http.get(`${environment.baseUrl}/pokemon?offset=${offset}&limit=25`).pipe(map(result=>{
      return result['results'];
    })
    ,
    map(pokemons => {
      return pokemons.map((poke, index)=>{
        poke.image = this.getImage(index + offset + 1);
        poke.Index = index + offset + 1;
        return poke;
      })
    })
    )
  }
  getImage(index){
    return `${environment.imageUrl}${index}.png`;
  }

  getDetail(index){
    return this.http.get(`${environment.baseUrl}/pokemon/${index}`).pipe(map(result =>{
      return result;
    })
    )
  }
}
