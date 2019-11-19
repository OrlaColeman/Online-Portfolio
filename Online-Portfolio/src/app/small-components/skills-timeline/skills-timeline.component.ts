import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-timeline',
  templateUrl: './skills-timeline.component.html',
  styleUrls: ['./skills-timeline.component.css']
})
export class SkillsTimelineComponent implements OnInit {

  angular: any;
  net: any;
  spring: any;
  sql: any;

  constructor() { }

  ngOnInit() {
    this.angular = document.getElementById('angular');
    this.net = document.getElementById('net');
    this.spring = document.getElementById('spring');
    this.sql = document.getElementById('sql');

    this.net.style.display='none';
    this.spring.style.display='none';
    this.sql.style.display='none';
  }

  showAngular(){
    this.angular.style.display='block';
    this.net.style.display='none';
    this.spring.style.display='none';
    this.sql.style.display='none';
  }
  showNet(){
    this.angular.style.display='none';
    this.net.style.display='block';
    this.spring.style.display='none';
    this.sql.style.display='none';
  }
  showSpring(){
    this.angular.style.display='none';
    this.net.style.display='none';
    this.spring.style.display='block';
    this.sql.style.display='none';
  }
  showSql(){
    this.angular.style.display='none';
    this.net.style.display='none';
    this.spring.style.display='none';
    this.sql.style.display='block';
  }
}
