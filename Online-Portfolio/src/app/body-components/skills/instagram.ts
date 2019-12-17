export class instagramUser{
    id: number;
    username: string;

    constructor(id: number, username: string){
        this.id=id;
        this.username=username;
    }
}
export class instagramCode{
    client_id = 521641655232804;
    redirect_uri: 'https://online-portfolio-a3c5d.firebaseapp.com/';
    response_type: string;

    constructor(){
    }   
}

export class instagramAccessToken{
    app_id: number;
    app_secret: string;
    grant_type: string;
    redirect_uri: string;
    code: string;

    constructor(app_id: number, app_secret: string, grant_type: string, redirect_uri: string,code: string){
        this.app_id=app_id;
        this.app_secret=app_secret;
        this.grant_type=grant_type;
        this.redirect_uri=redirect_uri;
        this.code=code;
    }

}