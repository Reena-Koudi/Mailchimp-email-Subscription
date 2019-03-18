import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { environment } from '../environment';


@Component({
  selector: 'app-hidden-form',
  templateUrl: './hidden-form.component.html',
  styleUrls: ['./hidden-form.component.scss']
})
export class HiddenFormComponent {
  apiUrl = environment.mailchimp.apiUrl;
  hiddenInputName = environment.mailchimp.hiddenInputName;
  email: string;
  @ViewChild('submit')
  submitBtn: ElementRef<HTMLInputElement>;
  constructor(private fb: FormBuilder) {
    this.email = '';
  }

  hiddenform = this.fb.group({
    email: ''
  });

 onSubmit() {
  console.log(this.submitBtn.nativeElement);
 }


}
