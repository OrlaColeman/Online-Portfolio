
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
code = "<Code>"
switchBtn: String = "more";
rachel_vid: any;
rachel_cover: any;
tempo_vid: any;
tempo_cover: any;
  constructor() { }

  ngOnInit() {
    this.rachel_cover = document.getElementById('rachel_cover');
    this.rachel_vid = document.getElementById('styled_by_rachel_vid');
    this.rachel_vid.style.display='none';
    this.tempo_cover = document.getElementById('tempo_cover');
    this.tempo_vid = document.getElementById('tempo_antiques_vid');
    this.tempo_vid.style.display='none';

    // setTimeout(function () {
    //   this.changeState();
    // }.bind(this), 800);
    // document.getElementById('other-projects').style.display='none';
    // document.getElementById('snapshots').style.display='none';
    // document.getElementById('info-card').style.display='none';
  }

  showRachelVid(){
this.rachel_cover.style.display='none';
this.rachel_vid.style.display='block';
  }
  showTempoVid(){
this.tempo_cover.style.display='none';
this.tempo_vid.style.display='block';
  }
  // showInfoBox(){
  //   document.getElementById('info-card').style.display='block';
  //   document.getElementById('snapshots').style.display='none';
  //   document.getElementById('code').style.display='none';
  // }
  // showSnapShots(){
  //   document.getElementById('info-card').style.display='none';
  //   document.getElementById('snapshots').style.display='block';
  //   document.getElementById('code').style.display='none';
  // }
  // showCode(){
  //   document.getElementById('info-card').style.display='none';
  //   document.getElementById('snapshots').style.display='none';
  //   document.getElementById('code').style.display='block';

  // }
  showMore(e){
   console.log(e)
   if(e === "more"){
    document.getElementById('other-projects').style.display='block';
    this.switchBtn="less";
   }
      
    
  
if(e === "less"){
  
  document.getElementById('other-projects').style.display='none';
  this.switchBtn = "more";
}
  }
}
