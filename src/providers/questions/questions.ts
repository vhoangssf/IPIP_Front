import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the QuestionsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class QuestionsProvider {

  //Strongloop API Explorer's request URL 
  baseUrl: string = "https://sp-17-jenny-jbrownssf.c9users.io:8080/api";
  path: string = "/Questions";
  
  constructor(public http: Http) {
    console.log('Hello QuestionsProvider Provider');
  }
  
  
  //Method to retrieve Goldberg's questions (50 questions) as an array of objects
  getQuestions(){
    return this.http.get(this.baseUrl + this.path);
  }
  
  

}
