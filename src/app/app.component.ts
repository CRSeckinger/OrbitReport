import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';

  sourceList: Satellite [];
  
  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
 
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
 
          let fetchedSatellites = data.satellites;
          // TODO: loop over satellites
          for (let i=0; i < fetchedSatellites.length; i++) {
          console.log (fetchedSatellites[i])
          
          // TODO: create a Satellite object using new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);

          let satellite = {
          name: fetchedSatellites[i].name,
          type: fetchedSatellites[i].type,
          launchDate: fetchedSatellites[i].launchDate,
          orbitType: fetchedSatellites[i].orbitType,
          operational: fetchedSatellites[i].operational
          };

          this.sourceList.push(satellite)
        }

          // TODO: add the new Satellite object to sourceList using: this.sourceList.push(satellite);
 
       }.bind(this));
    }.bind(this));
 
 }

}


