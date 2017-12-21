import { MovielistComponent } from "./movielist/movielist.component";
import {RouterModule} from '@angular/router';
import { DonComponent } from "./don/don.component";
import { LoginComponent } from "./login/login.component";

export const routes = RouterModule.forRoot([
    {
        path:'',
        component:LoginComponent
        
    },
    {
        path:'',
        component:MovielistComponent

    },
      {
    path:'MovieList',
    component:MovielistComponent
},
{
    path:'don/:muvid',
    component:DonComponent
}


]
)
