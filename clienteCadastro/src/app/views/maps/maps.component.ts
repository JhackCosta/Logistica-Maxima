import {  Component, NgZone, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  latitude!: any;
  longitude!: any;
 
  center: google.maps.LatLngLiteral = {
    lat: -23.55421862284195,
    lng: -46.808552300189724 
  };
  
  constructor(private ngZone: NgZone) {
    
  }
 
  ngOnInit(): void {

      navigator.geolocation.getCurrentPosition((position) => {

        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
     });
  }

}


