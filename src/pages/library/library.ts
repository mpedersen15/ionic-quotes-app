import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { CategoryPage } from '../category/category';

import quotes from '../../data/quotes';
/*
  Generated class for the Library page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage implements OnInit {
	quoteCollection: {category: string, quotes: Quote[], icon: string}[];
	categoryPage = CategoryPage;
	
	constructor(public navCtrl: NavController, public navParams: NavParams) {}

	ngOnInit(){
		this.quoteCollection = quotes;
	}
}
