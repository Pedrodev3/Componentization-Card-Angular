import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit {
  header!: string;
  subheader!: string;
  foto!: string;
  text!: string;

  constructor() {
    this.header = "Angular";
    this.subheader =
      'Liderado pela Equipe Angular do Google';
    this.foto =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png';
    this.text =
      'Plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript';
  }

  ngOnInit() {}
}
