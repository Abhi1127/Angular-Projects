import {Injectable} from '@angular/core';
import {Http , Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {UserForm,Product} from './Model/movie';

@Injectable()
export class movies{

    private _movies = "./assets/movie.json";
    constructor(private http:Http){}

    setmovie():Observable<Product[]>{
        return this.http.get(this._movies).map((res:Response)=>
        {
            return res.json();
        }
    )
    }
    SetMovie(id:number):Observable<Product>{
        return this.http.get(this._movies).map((res:Response)=>{
            let movie = res.json();
            let a:Product=movie.find((item:Product) =>item.muvid == id);
            return a;
        })
    }

}