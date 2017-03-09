import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';
import { QuotePage } from '../quote/quote';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
	
	quotes: Quote[];
	
	constructor(public navCtrl: NavController, public navParams: NavParams, public quotesService: QuotesService, public modalCtrl: ModalController) {}

	
	onViewQuote(quote: Quote){
		let modal = this.modalCtrl.create(QuotePage, quote);
		modal.present();
		
		modal.onDidDismiss((remove: boolean) => {
			if (!remove) return;
			
			this.quotesService.removeQuoteFromFavorites(quote);
			this.quotes = this.quotesService.getFavoriteQuotes(); // could also splice the this.quotes array
			
		});
	}
	
	ionViewWillEnter(){
		this.quotes = this.quotesService.getFavoriteQuotes();
	}
}
