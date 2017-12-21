import { Pipe, PipeTransform } from '@angular/core';
import {UserForm} from './Model/movie';

@Pipe({
    name: 'filter'
})
export class filterpipe implements PipeTransform{
    transform(value:UserForm[], filterby: string): UserForm[] {
        if(!value){
          return []; 
        }
        if(!filterby){
          return value;
        }
        filterby = filterby.toLocaleLowerCase();
        return filterby ? value.filter((pro:UserForm) => pro.header.toLocaleLowerCase().includes(filterby)):value
      }
    
}