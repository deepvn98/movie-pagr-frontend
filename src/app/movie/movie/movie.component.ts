import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../service/movie.service";
import {Movie} from "../../model/movie";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
movies:Movie[] = [];

  constructor( private movieSevice:MovieService) {

  }

  ngOnInit(): void {
  }

  getAllMovies(){
    this.movieSevice.gellAlllMovie().subscribe((data:Movie[])=>{
      this.movies = data;
    })
  }

}
