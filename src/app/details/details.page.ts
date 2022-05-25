import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  details : any;
  
  constructor(private route:ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit() {
    const myCustomIcon = "/assets/img/pokeball.png";
    let index = this.route.snapshot.paramMap.get('index');
    this.pokemonService.getDetail(index).subscribe((res) =>{
      console.log(res);
      this.details = res;
    });
  }

}
