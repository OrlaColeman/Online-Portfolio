import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
code = "<Code>"
switchBtn: String = "more";
  constructor() { }

  ngOnInit() {
    document.getElementById('other-projects').style.display='none';
    document.getElementById('snapshots').style.display='none';
    document.getElementById('info-card').style.display='none';
  }
  showInfoBox(){
    document.getElementById('info-card').style.display='block';
    document.getElementById('snapshots').style.display='none';
    document.getElementById('code').style.display='none';
  }
  showSnapShots(){
    document.getElementById('info-card').style.display='none';
    document.getElementById('snapshots').style.display='block';
    document.getElementById('code').style.display='none';
  }
  showCode(){
    document.getElementById('info-card').style.display='none';
    document.getElementById('snapshots').style.display='none';
    document.getElementById('code').style.display='block';

  }
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
