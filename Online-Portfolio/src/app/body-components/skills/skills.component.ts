import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { instagramUser, instagramCode, instagramAccessToken } from './instagram';
import { ActivatedRoute } from '@angular/router';
import { equalParamsAndUrlSegments } from '@angular/router/src/router_state';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  // url =  'https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=code'
  
  params: instagramAccessToken;

  url = 'https://graph.instagram.com/17841401485030230?fields=id, username&access_token=IGQVJWWFM3c29lakNBUGxOTXJkZAUpuOEppdkEySmFyQVMyX3E4UnF3Snd0VG1qcFdjQzdlZAVRHNW1DdWVwSEl6ZAlVhdkxlUVZAtQVdUVy13cHMzMWlfSm5IeWd5ZAzVFU1lLWWc3MUFtTHdQa2NwMEpnT1hIeUcxOEhkTThz'
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  code: string;
  ngOnInit() {

    this.params.app_id = 521641655232804;
    this.params.app_secret = '31f87237dfe53996aade1a9e44899513';
    this.params.grant_type = 'authorization_code';
    this.params.redirect_uri = 'https://localhost:4200/skills'
    this.params.code = 'AQAPOI7xUWSmriCFi7_WcI8Qnj4IeZhP-jDIQv0KEKhuE-YCicfJ7UPEva7w83nAL3kxMrBufXeiiLYmIl1EEm7ECugIInBItW_ZBWSQuUCloFNfvBq4XPYH7hBTPy5UpWh_QZJQzFd2ROaxtkfS-XpfL943GRLH6OJL_t43A8KSu3Zd4vQ2CZs-zOtF3gsMPEdHhERL5008vBu5D1fjQjpyC7y6wcqhA8MWBesPrWKP-A'
    // this.getInstaUser().subscribe( x => {
    //   console.log(x);
    // })

    this.getCode();
      
}
getInstaUser():Observable<instagramUser>{
      return this.http.get<instagramUser>(this.url);
}
getCode(){
    this.activatedRoute.queryParams.subscribe(params => {
        let code = params['code'];
        console.log(code); // Print the parameter to the console. 
    });
    this.getAccessCode(this.params);
}
getAccessCode(params: instagramAccessToken){

  let url = 'https://api.instagram.com/oauth/access_token'
  this.http.post(url, params).subscribe( x => {
    console.log(x);
  })
}


// constructor(private activatedRoute: ActivatedRoute) {
//   this.activatedRoute.queryParams.subscribe(params => {
//         let date = params['startdate'];
//         console.log(date); // Print the parameter to the console. 
//     });
// }

}

// createQuestion(question: Question){
//   let url = this.URL + `/Questions`;
//   this.http.post(url, question).subscribe(
//     result => {location.reload},
//     error => alert(error)
//   );
// }

    // this.adminService.getRoles().subscribe( x => {
     
    //   x.forEach( role => {
    //      if(role.role != "Sogeti"){
    //        this.roles.push(role);
    //      }
    //   });
    //  });
   
    // getRoles():Observable<Roles[]>{
    //   return this.http.get<Roles[]>(this.URL + '/Roles');
    // }
