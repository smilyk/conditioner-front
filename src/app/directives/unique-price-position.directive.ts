import { Directive } from '@angular/core';
import {AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
import {map} from "rxjs/operators";
import {AbstractPriceService} from "../services/abstract-price-service";

@Directive({
  selector: '[appUniquePricePosition]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS, useExisting: UniquePricePositionDirective,
      multi: true
    }
  ]
})
export class UniquePricePositionDirective implements Validator {

  constructor(private priceService: AbstractPriceService) { }

  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    console.log("hi")
    const positionModel = control.value as string;
    const rez = this.priceService.checkPriceModel(positionModel)
      .pipe(map(m => m ? {unique: true} : null));
    return rez;
  }

}
