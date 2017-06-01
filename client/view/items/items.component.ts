import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  form: FormGroup;
  payLoad = '';

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
