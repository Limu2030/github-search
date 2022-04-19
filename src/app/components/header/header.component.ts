import { Component, OnInit } from '@angular/core';
import { GithubSearchService } from 'src/app/services/github-search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public findService: GithubSearchService) { }

  ngOnInit(): void {
    this.findService.getUser('Limu2030')
    this.findService.getRepo('Limu2030')
  }

  findData(term: string) {
    this.findService.getUser(term)
    this.findService.getRepo(term)
  }

}
