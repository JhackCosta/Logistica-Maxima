import {  Component, Input, NgZone, DoCheck} from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements DoCheck {

  @Input() latitude!: any;
  @Input() longitude!: any;
 
  //  latitude: any = document.getElementById("teste1");
  //  longitude: any = document.getElementById("teste2");
  // @Input() latitude!: any;
  // @Input() longitude!:any;

  marker = {
    position: {
      //lat: document.getElementById("teste1"), lng: document.getElementById("teste")
      lat: Number(this.latitude), lng: Number(this.longitude)
      //lat: -18.99233986242702, lng:-48.263519222702094
    }
  }

  mapOptions: google.maps.MapOptions = {
    // center: { lat: Number(this.latitude), lng: Number(this.longitude)},
    center: { lat: -18.99233986242702, lng: -48.263519222702094},
    zoom : 15,
  }
  
  constructor(private ngZone: NgZone) {}
 
  ngDoCheck(): void {

    this.marker = {
      position: {
        //lat: document.getElementById("teste1"), lng: document.getElementById("teste")
        lat: Number(this.latitude), lng: Number(this.longitude)
        //lat: -18.99233986242702, lng:-48.263519222702094
      },
    }
  }
}


