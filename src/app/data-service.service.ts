import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  data = null;
  constructor() { }

  putData(data){
    this.data = data;
  }

  getData(){
    return this.data
  }
}
