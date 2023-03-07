import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  // Directives
  @Input() header!: string;
  @Input() subheader!: string;
  @Input() foto!: string;
  @Input() text!: string;

  constructor() {}

  ngOnInit() {}
}
