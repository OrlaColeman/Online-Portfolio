import { Component, OnInit } from '@angular/core';
import { style, state, transition, trigger, animate } from '@angular/animations';

@Component({
  selector: 'app-prev-exp',
  templateUrl: './prev-exp.component.html',
  styleUrls: ['./prev-exp.component.css'],
  animations: [
    trigger('fadeIn', [
      state('initial', style({
        opacity: 0
      })),
      state('final', style({
        opacity: 1
      })),
      transition('initial=>final', animate('1000ms')),
      transition('initial=>final', animate('1200ms'))
    ])
  ]
})
// animations: [
//   trigger('fadeIn', [
//     state('initial', style({
//       opacity: 0
//     })),
//     state('final', style({
//       opacity: 1
//     })),
//     transition('initial=>final', animate('1000ms')),
//     transition('final=>initial', animate('1300ms'))
//   ])
// ]
export class PrevExpComponent implements OnInit {
 
  currentState = 'initial'
  currentState2 = 'initial'
  currentState3= 'initial'
  currentState4 = 'initial'

  africa: any;
  europe: any;
  america: any;
  aus: any; 
  constructor() { }

  ngOnInit() {
 this.africa = document.getElementById('africa');
 this.europe = document.getElementById('europe');
 this.america = document.getElementById('america');
 this.aus = document.getElementById('aus');

 this.africa.style.display='none'
 this.europe.style.display='none'
 this.america.style.display='none'
 this.aus.style.display='none'
  }

  showAfrica(){
    this.africa.style.display='block'
    this.europe.style.display='none'
    this.america.style.display='none'
    this.aus.style.display='none'
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
    document.getElementById('africa').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }

  showEurope(){
    this.europe.style.display='block'
    this.africa.style.display='none'
    this.america.style.display='none'
    this.aus.style.display='none'
    this.currentState2 = this.currentState2 === 'initial' ? 'final' : 'initial';
    document.getElementById('europe').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }

    showAmerica(){
      this.africa.style.display='none'
      this.europe.style.display='none'
      this.america.style.display='block'
      this.aus.style.display='none'
      this.currentState3 = this.currentState3 === 'initial' ? 'final' : 'initial';
      document.getElementById('america').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }
    showAus(){
      this.africa.style.display='none'
      this.europe.style.display='none'
      this.america.style.display='none'
      this.aus.style.display='block'
      this.currentState4 = this.currentState4 === 'initial' ? 'final' : 'initial';
      document.getElementById('aus').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }

}
