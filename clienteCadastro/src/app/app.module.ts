import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ClienteService} from './shared/service/cliente.service'
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms';
import { MapsComponent } from './views/maps/maps.component';
import { MatSliderModule } from '@angular/material/slider';
import { GoogleMapsModule } from '@angular/google-maps';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import { SectionComponent } from './views/section/section.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FormSelectComponent } from './views/form-select/form-select.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapsComponent,
    SectionComponent,
    FormSelectComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSliderModule,
    GoogleMapsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
