import { Component, OnInit } from '@angular/core';
import { GithubSearchService } from 'src/app/services/github-search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private findService: GithubSearchService) { }

  ngOnInit(): void {
  }

  findData(term: string) {
    this.findService.getUser(term)
  }

}
