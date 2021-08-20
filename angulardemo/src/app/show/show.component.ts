import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  public movies = ['Teminator', 'Mr Bean', 'Qủy Ám'];
  public name = '';
  public fakedata() {
    this.movies.push(this.name);
  }
  constructor() {}

  ngOnInit(): void {}
}
