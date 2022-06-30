import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-customizecalc',
  templateUrl: './customizecalc.page.html',
  styleUrls: ['./customizecalc.page.scss'],
})

export class CustomizecalcPage implements OnInit {

  public themeColor = [
    { name: 'Default', class: 'default' },
    { name: 'Dark', class: 'dark-theme' },
    { name: 'Red', class: 'red' },
    { name: 'Green', class: 'green' }
  ];
  public selectTheme;
  constructor(private theme: ThemeService) {
    this.selectTheme = 'default';
    this.dynamicTheme()
  }
   
   dynamicTheme() {
    this.theme.activeTheme(this.selectTheme);
   }

  ngOnInit() {
  }

}
