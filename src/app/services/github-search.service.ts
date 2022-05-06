import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {
  repoResults: any[] = [];
  userResults!: any;
  url : string = "https://api.github.com/users/";

  constructor(private http: HttpClient) { }

  getUser(username:string){
    // https://api.github.com/users/username

    let promise = new Promise<void>((resolve, reject) => {
      this.http.get(this.url + username).subscribe({
        next: (res: any) => {
          this.userResults = res
          resolve()
        },
        error: (err: any) => {
          reject(err);
        }
        
      })
    });
    return promise
  }

  getRepo(username:string){
    // https://api.github.com/users/username

    let promise = new Promise<void>((resolve, reject) => {
      this.http.get(this.url + username + '/repos').subscribe({
        next: (res: any) => {
          this.repoResults = res
          resolve()
        },
        error: (err: any) => {
          reject(err);
        }
        
      })
    });
    return promise
  }
}