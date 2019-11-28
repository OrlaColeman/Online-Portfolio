import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  qr_code: any;
  enter: any;
  constructor() { }

  ngOnInit() {
    this.qr_code = document.getElementById('qr_code');
    this.enter = document.getElementById('enter');

    this.enter.style.display = 'none';

    setTimeout(() => {
      this.enter.style.display = 'block';
      this.qr_code.style.display = 'none';
    }, 10000);
  }

}
