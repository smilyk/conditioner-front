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
    {path: Redirect.ADD_CONDITIONER, label: 'добавить кодиционер', icon: 'books'},
    {path: Redirect.CONDITIONERS_LIST, label: 'список кондиционеров', icon: 'library_books'},
    {path: 'maint/add', label: 'добавить ТО', icon: 'books'},
    {path: 'maint', label: 'список ТО', icon: 'library_books'},
    {path: 'instr', label: 'инструкция', icon: 'folder_open'}
  ];
  loginLink: NavLink = {path: 'Redirect.LOGIN', label: 'Login', icon: 'person'};
  logoutLinks: NavLink =    {path: 'Redirect.LOGOUT', label: 'Logout', icon: 'person_outline'};
  menuItems: NavLink [] = [
    {path: 'Redirect.BOOK_AUTHORS', label: 'Books of Author', icon: 'books'},
    {path: 'Redirect.READER_DELAYING', label: 'ReadersDelaying', icon: 'person_add_disabled'},
    {path: 'Redirect.ACTIVE_READERS', label: 'ActiveReaders', icon: 'sentiment_satisfied_alt'},
    {path: 'Redirect.AUTHORS_LIST', label: 'ManageAuthors', icon: 'people'},
    {path: 'Redirect.READERS_LIST', label: 'ManageReaders', icon: 'people_outline'},
    {path: 'Redirect.ADD_READER', label: 'AddReader', icon: 'person_add'},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
