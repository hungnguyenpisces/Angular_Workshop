import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycv',
  templateUrl: './mycv.component.html',
  styleUrls: ['./mycv.component.css']
})
export class MycvComponent implements OnInit {
  public name = 'Hưng'
  public job = 'IT'
  public salary = 1000
  constructor() { }

  ngOnInit(): void {
  }

}
