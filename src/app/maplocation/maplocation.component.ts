import { Component, OnInit, } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxDirection from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';


@Component({
  selector: 'app-maplocation',
  templateUrl: './maplocation.component.html',
  styleUrls: ['./maplocation.component.css']
})
export class MaplocationComponent implements OnInit {
  map!: mapboxgl.Map
  lat: 12.9716
  lng: 77.5946
  zoom: 5
  style: 'mapbox://styles/mapbox/streets-v12'
  constructor() {
    (mapboxgl as any).accessToken = mapboxgl.accessToken
  }
  ngOnInit(): void {
    { this.buildMap(); }
  }
  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      center: { lat: 12.9716, lng: 77.5946 },
      attributionControl: false
    })
    const navcontrol = new mapboxgl.NavigationControl({
      visualizePitch: true
    })
    const geoloacate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true,
      showAccuracyCircle: true
    })
    const direction = new MapboxDirection({
      unit: 'metric',
      profile: 'mapbox/driving',
      container: 'direction',
      bearing: true,
      steps: true,
      voice_instructions: true,
      inputs: true,
      controls: {
        inputs: true,
        instructions: true,
        profileSwitcher: true
      }
    })
    this.map.addControl(direction)
    this.map.addControl(navcontrol, 'top-right')
    this.map.addControl(geoloacate, 'top-left');
    geoloacate.on('geoloacate', locateUser);
    this.map.on('load', function () {
      geoloacate.trigger
    })
    this.map.on('load', function () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          direction.setOrigin([position.coords.longitude, position.coords.latitude])
        })
      }
    })
    this.map.addControl(new mapboxgl.ScaleControl(), ('bottom-right'))
    this.map.addControl(new mapboxgl.FullscreenControl(), ('top-right'))
  }
}
function locateUser(e: any) {
  console.log("Lng:" + e.coorde.longitude + " ", "Lat:" + e.coorde.latitude);
}

