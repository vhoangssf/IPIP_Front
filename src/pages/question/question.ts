import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';


/**
 * Generated class for the QuestionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

let apiQuestions = [
  {
      "Keyed": true,
      "Text": "Am the life of the party.",
      "Style": "Extraversion"
  },
  {
      "Keyed": true,
      "Text": "Feel comfortable around people.",
      "Style": "Extraversion"
  },
  {
      "Keyed": true,
      "Text": "Start conversations.",
      "Style": "Extraversion"
  },
  {
      "Keyed": true,
      "Text": "Talk to a lot of different people at parties.",
      "Style": "Extraversion"
  },
  {
      "Keyed": true,
      "Text": "Don't mind being the center of attention.",
      "Style": "Extraversion"
  },
  {
      "Keyed": false,
      "Text": "Don't talk a lot.",
      "Style": "Extraversion"
  },
  {
      "Keyed": false,
      "Text": "Keep in the background.",
      "Style": "Extraversion"
  },
  {
      "Keyed": false,
      "Text": "Have little to say.",
      "Style": "Extraversion"
  },
  {
      "Keyed": false,
      "Text": "Don't like to draw attention to myself.",
      "Style": "Extraversion"
  },
  {
      "Keyed": false,
      "Text": "Am quiet around strangers.",
      "Style": "Extraversion"
  }
];

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})

export class QuestionPage {
  @ViewChild(Slides) slides:Slides;
  questions: any = apiQuestions;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
    console.log(apiQuestions);
  }

  slideNext() {
    console.log("Submitted");
    if(this.slides.getActiveIndex() + 1 !== apiQuestions.length) {
      this.slides.lockSwipes(false);
      this.slides.slideTo(this.slides.getActiveIndex() + 1);
      this.slides.lockSwipes(true);
    } else {
      
    }

  }

}
