import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aus',
  templateUrl: './aus.component.html',
  styleUrls: ['./aus.component.css']
})
export class AusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('australiaWork').style.display='block';
    document.getElementById('australiaTravel').style.display='none';
  }
  showAusTravel(){
    document.getElementById('australiaWork').style.display='none';
    document.getElementById('australiaTravel').style.display='block';
  }
  showAusWork(){
    document.getElementById('australiaWork').style.display='block';
    document.getElementById('australiaTravel').style.display='none';
  }
}
