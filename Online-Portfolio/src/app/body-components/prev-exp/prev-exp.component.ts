import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prev-exp',
  templateUrl: './prev-exp.component.html',
  styleUrls: ['./prev-exp.component.css']
})
export class PrevExpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showAfrica(){
    document.getElementById('africa').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
      }

}
