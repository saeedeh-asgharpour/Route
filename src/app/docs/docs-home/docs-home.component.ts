import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs-home',
  templateUrl: './docs-home.component.html',
  styleUrls: ['./docs-home.component.css']
})
export class docsHomeComponent implements OnInit {
  data = [
    { name: 'Angular applications:The essentials', job: 'Routing & Navigation' },
    { name: 'Components', job: 'Forms' },
    { name: 'HTTP Client', job: 'Templates' }
  ];
  headers = [
    { key: 'employed', label: 'What is Angular?' },
    { key: 'name', label: 'Learn and Explore' },
    { key: 'age', label: 'Examine and Work' },
    { key: 'job', label: 'Tour of Heros' }
  ];

  constructor() {}

  ngOnInit() {}
}
