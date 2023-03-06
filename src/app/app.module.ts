import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapIntegrationComponent } from './map-integration/map-integration.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { MaplocationComponent } from './maplocation/maplocation.component';
import { ServiceService } from './service.service';
import { LocationComponent } from './location/location.component';


@NgModule({
  declarations: [
    AppComponent,
    MapIntegrationComponent,
    GooglemapComponent,
    MaplocationComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
   ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
