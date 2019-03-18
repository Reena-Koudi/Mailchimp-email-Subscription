import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { environment } from '../environment';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-hidden-form',
  templateUrl: './hidden-form.component.html',
  styleUrls: ['./hidden-form.component.scss']
})
export class HiddenFormComponent {
  apiUrl = environment.mailchimp.apiUrl;
  hiddenInput = environment.mailchimp.hiddenInput;
  email: string;
  @ViewChild('submit')
  submitBtn: ElementRef<HTMLInputElement>;
  http: any;
  constructor(private fb: FormBuilder) {
    this.email = '';
  }

  hiddenform = this.fb.group({
    email: ''
  });

 onSubmit() {
  //  return this.http.post(this.apiUrl);
  console.log(this.submitBtn.nativeElement);
 }


}
