import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Article} from '../../models/Atricle';
import {HttpClient} from '@angular/common/http';

import {Router} from '@angular/router';
import {AbstractCalculatorService} from '../../services/abstract-calculator-service';
import {Calculator} from '../../models/Calculator';
import {Redirect} from '../../models/Redirect';
import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {


  constructor(
    private httpClient: HttpClient,
    private calculatorService: AbstractCalculatorService,
    private router: Router
  ) {
  }
  isResult = false;
  min = 0;
  max = 0;
  rec = 0;
  countTv: 0;
  others: 0.0;
  countComp: 0;
  countPeople: 0;

  // tslint:disable-next-line:typedef

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate([Redirect.HOME]).then();
  }

  // tslint:disable-next-line:typedef

  sendCalculator(form: NgForm) {
    const calculator = form.value as Calculator;
    if (calculator.q == '') {
      calculator.q = '3';
    }
    if (calculator.n == null) {
      calculator.n = 0;
    }
    if (calculator.k == null) {
      calculator.k = 0;
    }
    if (calculator.t == null) {
      calculator.t = 0;
    }
    if (calculator.a == null) {
      calculator.a = 0.0;
    }
    console.log(calculator);
    this.calculatorService.getPower(calculator).pipe(map(
      calc => calc))
      .subscribe(data => {
        console.log(data.recom + ' d');
        this.min = data.min;
        this.max = data.max;
        this.rec = data.recom;
      });
    this.result();
  }
  private result() {
    return this.isResult = true;
  }

  check() {
    return this.isResult = false;
  }
}

