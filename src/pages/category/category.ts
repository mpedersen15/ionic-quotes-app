import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';
import { Quote } from '../../data/quote.interface';

/*
  Generated class for the Category page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage implements OnInit{
	category: string;
	quotes:  { id: 'string', person: 'string', text: 'string' }[];
	icon: string;
	
	constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public quotesService: QuotesService ) {}

	onAddToFavorites(quote: Quote){
		console.log('Want to add quote to favorites', quote);
		
		let alert = this.alertCtrl.create({
			title: 'Add to Favorites?',
			subTitle: 'Would you like to add this quote to your Favorites?',
			buttons: [
				{
					text: 'Cancel',
					handler: () => {
						console.log('Cancel clicked');
					}
				},
				{
					text: 'Favorite',
					handler: () => {
						//console.log('Add clicked');
						this.quotesService.addQuoteToFavorites(quote);
						
					}
				}
			]
		});
		alert.present();
	}
	
	onRemoveFromFavorites(quote: Quote){
		this.quotesService.removeQuoteFromFavorites(quote);
	}
	
	isFavorite(quote: Quote){  
		return this.quotesService.isFavorite(quote);
	}
	
	ngOnInit(){
		console.log(this.navParams);
		this.category = this.navParams.get('category');
		this.quotes = this.navParams.get('quotes');
		this.icon = this.navParams.get('icon');
	}
  
  /* ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  } */

}
