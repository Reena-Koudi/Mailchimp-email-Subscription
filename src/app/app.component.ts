import { Component, ViewChild } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { MailchimpService } from './mailchimp.service';
import { HiddenFormComponent } from './hidden-form/hidden-form.component';
import { environment } from './environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mailchimp-demo';
  showMsg = false;
  apiUrl = environment.mailchimp.apiUrl;
  hiddenInputName = environment.mailchimp.hiddenInputName;

  @ViewChild(HiddenFormComponent)
  hidden: HiddenFormComponent;

  constructor(
    private fb: FormBuilder,
    private mailchimpService: MailchimpService) { }

  emailform = this.fb.group({
    email: ''
  });

  onSubmit() {
    this.hidden.email = this.emailform.get('email').value;
    console.log(this.hidden.email);
    console.log(this.emailform.value);
    console.log(this.emailform.get('email').value);
    setTimeout(() => {
      this.hidden.submitBtn.nativeElement.click();
    }, 3000);
    console.log(this.hidden.email);
    this.showMsg = true;
    this.emailform.reset();
  }
}


