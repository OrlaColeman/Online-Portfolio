import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  showMailbox(){
    document.getElementById('mailbox').style.display='block';
    document.getElementById('aboutMeText').style.display='none';
    document.getElementById('aboutMeImg').style.display='none'
  }

}
