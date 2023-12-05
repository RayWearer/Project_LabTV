import { Component } from '@angular/core';
import { MovieSearchService } from '../movie-search.service';
import { ToggleService } from '../toggle.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  searchQuery: string = '';

  constructor(private movieSearchService: MovieSearchService, public toggleService: ToggleService) {

  }

  toggleSearchBar() {
    this.toggleService.handleSearchBarVisibility();
  }

  handleSearchQuery() {
    this.movieSearchService.setSearchQuery(this.searchQuery);
  }
}