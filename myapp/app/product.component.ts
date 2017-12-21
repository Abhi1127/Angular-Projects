import {Component , OnInit} from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
    selector:'app-products',
    template:``
})

export class ProductComponent implements OnInit   {


constructor(private db: AngularFirestore){}

ngOnInit(){
this.db.collection('/products').valueChanges().subscribe((data) => {
    
})
}

}