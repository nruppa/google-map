import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-map-integration',
  templateUrl: './map-integration.component.html',
  styleUrls: ['./map-integration.component.css']
})
export class MapIntegrationComponent implements OnInit {

  form: any
  center: google.maps.LatLngLiteral = {
    lat: 0,
    lng: 0
  };
  display: any;
  Positions: any = [];
  map: any;
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  marker!: MapMarker;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      latitude: '42.485144',
      longitude: '-83.497852',
      latitude1: '',
      longitude1: '',
    })
  }
  zoom = 4
  markerOptions: google.maps.MarkerOptions = {
    draggable: true,
    // clickable: true
  };
  markerPositions: google.maps.LatLngLiteral[] = [];
  onChose() {
    this.markerPositions = []
    this.markerPositions.push({
      lat: parseFloat(this.form.controls.latitude.value),
      lng: parseFloat(this.form.controls.longitude.value),
    })
  }
  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null)
      this.markerPositions.push(event.latLng.toJSON());
  }
  moveMap(event: google.maps.MapMouseEvent) {
    this.center = (event.latLng!.toJSON())
  }
  mouseMove(event: google.maps.MapMouseEvent) {
    if (event.latLng != null)
      this.display = event.latLng.toJSON()
  }
}










// marker(event: google.maps.MapMouseEvent)
  // {
  //   let marker = null;
  //   this.map(event)=> {

  //     if(this.marker !== null){
  //         this.map.removeLayer(this.marker);
  //     }

  //     // marker = new google.maps.Map;
  // }
  // }