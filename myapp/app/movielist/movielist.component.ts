import { Component, OnInit } from '@angular/core';
import {movies} from './../movie.services';
import { UserForm } from '../Model/movie';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  book:any[];
  constructor(private _moovies:movies) { }

  ngOnInit() {

    this._moovies.setmovie().subscribe((books)=>{
      this.book = books;
    })


  }

}
