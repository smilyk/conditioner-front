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
  articleLinks: NavLink[] = [
    // {path: Redirect.ADD_ARTICLE, label: 'добавить статью', icon: 'books'},
    {path: Redirect.ARTICLES_LIST, label: 'все статьи', icon: 'library_books'},
  ];
  conditionerLinks: NavLink[] = [
    {path: Redirect.ADD_CONDITIONER, label: 'добавить кодиционер', icon: 'books'},
    {path: Redirect.CONDITIONERS_LIST, label: 'список кондиционеров', icon: 'library_books'},
    ];
  typeMaintenanceLinks: NavLink[] = [
    {path: 'maint/add', label: 'добавить ТО', icon: 'books'},
    {path: 'maint', label: 'список ТО', icon: 'library_books'},
    ];
  planningLinks: NavLink[] = [
    {path: Redirect.PLANNING_TYPE_MAINTENANCE_ALL, label: 'для планирования', icon: 'books'}
  ];
  calculatorLinks: NavLink[] = [
    {path: Redirect.CALCULATE, label: 'расчет мощности', icon: 'books'}
  ];
  priceLinks: NavLink[] = [
    {path: Redirect.UPLOAD_FILE, label: 'обновить прайс', icon: 'books'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
