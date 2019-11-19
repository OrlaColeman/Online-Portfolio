import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('fadeIn', [
      state('initial', style({
        opacity: 0
      })),
      state('final', style({
        opacity: 1
      })),
      transition('initial=>final', animate('1000ms')),
      transition('final=>initial', animate('1300ms'))
    ])
  ]
})
export class NavbarComponent implements OnInit {

  currentState = 'initial'
  buttons: any;

  constructor() { }

  ngOnInit() {
this.buttons = document.getElementById('buttons');
this.buttons.style.display = 'none';
  }
  
showNav(){
  this.buttons.style.display = 'block'
  this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
}


}
