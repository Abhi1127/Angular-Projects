export class UserForm {
    constructor(public muvid?:number,public header?:string,public cast?:number,public ReleaseStatus?:boolean,
        public Price?:number,
        public src?:any,
        public rating?:string){}
 }

 export interface Product {
     
    muvid:number;
    header:string;
    cast:number;
    ReleaseStatus:boolean;
    Price:number;
    src:any;
    rating:string;

 } 

 export class loginform {
    constructor(public username:string,public password:any,public email:any){}
 }