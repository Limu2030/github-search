import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {
  url : string = "https://api.github.com/users/";

  constructor(private http: HttpClient) { }

  getUser(username:string){
    // https://api.github.com/users/username

    this.http.get(this.url + username)
  }
}
