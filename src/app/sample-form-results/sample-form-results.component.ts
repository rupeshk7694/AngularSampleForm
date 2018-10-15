import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service';
@Component({
  selector: 'app-sample-form-results',
  templateUrl: './sample-form-results.component.html',
  styleUrls: ['./sample-form-results.component.css']
})
export class SampleFormResultsComponent implements OnInit {

  constructor(private dataService:DataServiceService) {
    this.data = this.dataService.getData();
  }

  ngOnInit() {
  }

}
