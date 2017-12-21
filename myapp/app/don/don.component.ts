import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {UserForm,Product} from './../Model/movie';
import { movies } from '../movie.services';

@Component({
  selector: 'app-don',
  templateUrl: './don.component.html',
  styleUrls: ['./don.component.css']
})
export class DonComponent implements OnInit {

  sublink; 
  product = new UserForm();
  constructor(private _sublink:ActivatedRoute, private _movies:movies) { }

  ngOnInit() {
    this._sublink.params.subscribe((params)=>{
      let id = params['muvid'];
      this._movies.SetMovie(id).subscribe((items) => {
        this.product = items;
      })


    })
  }
viewmode = 'chi';
}
