import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';


/**
 * Generated class for the QuestionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

let apiQuestions = [{
  "questionNumber": 1,
  "text": "I am the life of the party.",
  "factor": "Extroversion"
}, {
  "questionNumber": 2,
  "text": "I feel little concern for others.",
  "factor": "apathy"
}, {
  "questionNumber": 3,
  "text": "I am always prepared.",
  "factor": "preparedness"
}];

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})

export class QuestionPage {

  questions: any = apiQuestions;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

  // slideNext()

}
