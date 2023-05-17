import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private httpClient:HttpClient) { }
  googleApiAutocomplete(input: any) {
    return this.httpClient.get<any>(
      'https://maps.googleapis.com/maps/api/place/autocomplete/json?key=&input=' +
        input
    );
  }

}
