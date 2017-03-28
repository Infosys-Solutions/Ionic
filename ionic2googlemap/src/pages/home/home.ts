import { Component,ViewChild } from '@angular/core';
import { NavController} from 'ionic-angular';
declare var google

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
@ViewChild('map') mapElement;
map:any;
  constructor(public navCtrl: NavController) {
    
  }
ionViewDidLoad()
{
  this.initMap();
}
initMap()
{
  
  let mapOption={
     center:{lat: -34.397, lng: 150.644},
     Zoom:15,
     mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  this.map =new google.maps.Map(this.mapElement.nativeElement,mapOption);
}

}
