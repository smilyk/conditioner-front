import { Directive } from '@angular/core';
import {AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {AbstractConditionerService} from '../services/abstract-conditioner-service';
import {map} from 'rxjs/operators';

@Directive({
  selector: '[appUniqueTypeMaintenance]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS, useExisting: UniqueTypeMaintenanceDirective,
      multi: true
    }
  ]
})
export class UniqueTypeMaintenanceDirective implements Validator{

  constructor(private conditionerService: AbstractConditionerService) { }

  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const invNumber = control.value as string;
    const rez = this.conditionerService.getConditionerByInventoryNumber(invNumber)
      .pipe(map(m => m ? {unique: true} : null));
    return rez;
  }
}
