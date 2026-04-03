import { Directive, Input, SimpleChanges } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { appEmailValidator } from './app-email-validator';

@Directive({
  selector: '[appAppEmail]'
})
export class AppEmailDirective {

  constructor() { }

  @Input() appEmail: string[] = [];

  validator: ValidatorFn = () => null;

  ngOnChanges(changes: SimpleChanges): void {
    const appEmailChange = changes['appEmail'];
    if (appEmailChange) {
      this.validator = appEmailValidator(appEmailChange.currentValue);
    }
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control);
  }
}
