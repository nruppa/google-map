import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {
  map!: google.maps.Map;
  // constructor(private map: google.maps.Map) { }
  declare google: any
  @ViewChild('mapElement') mapElement: any

  // ngAfterViewInit(): void {
  //   const location = { lat: 20.5937, lng: 78.9629 }
  //   this.map = new google.maps.Map(this.mapElement.nativeElement, {
  //     center: location,
  //     zoom: 6,
  //   })
  // }
  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyB3dHIbl2Or9L1HRcKK7npM_R0qgMMnV90',
    });
    loader.load().then(() => {
      // const location = { lat: 61.5240, lng: 105.3188 }
      // const location = { lat: 20.5937, lng: 78.9629 }
      const location = { lat: 12.9716, lng: 77.5946 }
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        center: location,
        zoom: 4,
      })
      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
      });

    })
  }
}
