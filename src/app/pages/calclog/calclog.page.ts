import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calclog',
  templateUrl: './calclog.page.html',
  styleUrls: ['./calclog.page.scss'],
})
export class CalclogPage implements OnInit {

  data;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(info => {
      if (info && info.myData) {
        this.data = this.route.snapshot.data['myData']
      }
    });
  }

  ngOnInit() {
    if (this.route.snapshot.data['myData']) {
      this.data = this.route.snapshot.data['myData'];
    }
  }
}
