import { Component, OnInit } from '@angular/core';
import {Redirect} from '../../models/Redirect';

interface NavLink {
  path: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-nav-conditioner',
  templateUrl: './nav-conditioner.component.html',
  styleUrls: ['./nav-conditioner.component.css']
})
export class NavConditionerComponent implements OnInit {
  homeLinks: NavLink[] = [
    {path: Redirect.ADD_CONDITIONER, label: 'добавить кодиционер', icon: 'books'},
    {path: Redirect.CONDITIONERS_LIST, label: 'список кондиционеров', icon: 'library_books'},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
