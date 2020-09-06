import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';


import {AbstractConditionerService} from '../../services/abstract-conditioner-service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Redirect} from '../../models/Redirect';
import {Conditioner} from '../../models/Conditioner';

@Component({
  selector: 'app-add-conditioner',
  templateUrl: './add-conditioner.component.html',
  styleUrls: ['./add-conditioner.component.css']
})
export class AddConditionerComponent implements OnInit {

  constructor(private httpClient: HttpClient,
              private conditionerService: AbstractConditionerService,
              private router: Router
              ) {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  saveConditioner(form: NgForm) {
    const conditioner = form.value as Conditioner;
    conditioner.maintenance = [];
    conditioner.deleted = false;
    this.conditionerService.addConditioner(conditioner)
      .subscribe(() => this.cancel());
  }

  cancel() {
    this.router.navigate([Redirect.CONDITIONERS_LIST]).then();
  }
}
