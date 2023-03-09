import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  header!: string;
  subheader!: string;
  foto!: string;
  text!: string;

  constructor() {
    this.header = "React";
    this.subheader = "Criado pelo Facebook";
    this.foto =
      'https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png';
    this.text =
      'Biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.';
  }

  ngOnInit() {
  }

}
