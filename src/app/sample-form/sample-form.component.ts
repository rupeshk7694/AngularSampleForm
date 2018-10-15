import {Component, OnInit} from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';
import {DataServiceService} from '../data-service.service';
/**
 * Sample form class
 */
@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent implements OnInit {
  subscriptions = [
    'Basic',
    'Advanced',
    'Pro'
  ];

  constructor(private formBuilder: FormBuilder,private snackBar: MatSnackBar,private router:Router,private dataService:DataServiceService) {
    this.sampleForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      subscription: ['Advanced', Validators.required],
      password: ['', [Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]]
    });
  }

  ngOnInit() {
  }

  /**
   * On Submit of the form
   */
  onSubmit(){
    this.submitted = true;
    if(!this.sampleForm.invalid){
      this.dataService.putData(this.sampleForm.value);
      this.router.navigate(["/result"]);
    } else {
      this.showWarning();
    }
  }

  /**
   * Show warning for invalid form
   */
  showWarning(){
    if(this.sampleForm.touched && this.sampleForm.invalid){
      this.snackBar.open("Form is invalid", "Warning", {
        duration: 2000,
      });
    }

  }

  /**
   * Show the error for a field to be shown or not
   * - only when when either form is submitted or
   * field is touched
   * @param fieldName
   * @returns {any|boolean|null}
   */
  shouldShowError(fieldName){
    return  this.submitted  || this.sampleForm.controls[fieldName].touched
  }

  /**
   * On Clear - Clear the form
   */
  onClear(){
    if(this.sampleForm.dirty){
      const result = confirm("Are you sure you want to discard the changes?");
      if(result){
        this.sampleForm.reset();
      }
    }
  }
}
