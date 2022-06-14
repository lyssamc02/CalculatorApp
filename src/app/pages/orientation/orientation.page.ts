import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  selector: 'app-orientation',
  templateUrl: './orientation.page.html',
  styleUrls: ['./orientation.page.scss'],
})
export class OrientationPage implements OnInit {
  currentScreenOrientation: string;

  constructor() {}
  
  ngOnInit() {
    }
}
