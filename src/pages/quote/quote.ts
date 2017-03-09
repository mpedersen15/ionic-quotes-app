import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
/*
  Generated class for the Quote page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage {
	person: string;
	text: string;
	quote: Quote;
	
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}


  ionViewDidLoad(){
	console.log(this.navParams);
	//this.quote = this.navParams.data;
	this.person = this.navParams.get('person');
	this.text = this.navParams.get('text');
  }
  
  unfavorite(quote: Quote){
  
  }
  
  onClose(remove = false){
	this.viewCtrl.dismiss(remove);
  }
}
