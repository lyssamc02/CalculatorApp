import { Component, OnInit } from '@angular/core';

import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
//import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  selector: 'app-orientation',
  templateUrl: './orientation.page.html',
  styleUrls: ['./orientation.page.scss'],
})
export class OrientationPage implements OnInit {
  //currentScreenOrientation: string;
  activeScreenOrt: string;

  constructor(private screenOrientation: ScreenOrientation) {
    // Find screen current orientation
    console.log(this.screenOrientation.type);
    this.activeScreenOrt = this.screenOrientation.type; 
    
    this.screenOrientation.onChange().subscribe(
      () => {
        alert("Orientation changed" + this.screenOrientation.type);
        this.activeScreenOrt = this.screenOrientation.type;
      }
    );  
  }

  getCurrentOrientation() {
    this.activeScreenOrt = this.screenOrientation.type;
  }
  
   // set to Portrait/landscape
  lockScreenOrientationPortrait() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    screen.orientation.lock('portrait');
  }

  lockScreenOrientationLandscape() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    screen.orientation.lock('landscape');
  }

  //setLandscape(){
  //  this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  //}

  // Screen orientation unlock, allow user to rotate
  unlockSo() {
    this.screenOrientation.unlock();
    screen.orientation.unlock();
  }

  // this invokes whenever user changes orientation or rotates phone
  /*detectOrientation() {
    this.screenOrientation.onChange().subscribe(()=>{
      alert("Orientation changed");
      alert("current orientation is = " + this.screenOrientation.type);
    })
  }*/

  ngOnInit() {
    }
}
