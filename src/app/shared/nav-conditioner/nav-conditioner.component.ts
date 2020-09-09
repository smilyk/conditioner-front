import {Component, OnInit} from '@angular/core';
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
    {path: Redirect.HOME, label: 'главная страница', icon: 'home'},
    ];
  conditionerLinks: NavLink[] = [
    {path: Redirect.ADD_CONDITIONER, label: 'добавить кодиционер', icon: 'books'},
    {path: Redirect.CONDITIONERS_LIST, label: 'список кондиционеров', icon: 'library_books'},
    ];
  typeMaintenanceLinks: NavLink[] = [
    {path: 'maint/add', label: 'добавить ТО', icon: 'books'},
    {path: 'maint', label: 'список ТО', icon: 'library_books'},
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
