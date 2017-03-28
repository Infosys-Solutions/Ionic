import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   items
   i
  constructor(public navCtrl: NavController,private http:Http) {
    this.http.get("http://127.0.0.1:8081/listUsers").subscribe(data=>{
      this.items=JSON.parse(data['_body']).results;
      
    },error=>{
      console.log(error);
    });
  }
  itemClicked(event,item)
  {
    console.log(item.user.name);
    
  }
  removeItem(item)
  {
     console.log("got results");
    for(this.i=0;this.i<this.items.length;this.i++)
    {
      if(this.items[this.i]==item)
      {
        this.items.splice(this.i,1);
      }

    }
  }

}
