import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';
import { SettingsService } from '../../services/settings';
import { QuotePage } from '../quote/quote';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
	
	quotes: Quote[];
	
	constructor(public navCtrl: NavController, public navParams: NavParams, public quotesService: QuotesService, public modalCtrl: ModalController, public settingsService: SettingsService) {}

	
	onViewQuote(quote: Quote){
		let modal = this.modalCtrl.create(QuotePage, quote);
		modal.present();
		
		modal.onDidDismiss((remove: boolean) => {
			if (!remove) return;
			this.onRemoveFromFavorites(quote);
		});
	}
	
	onRemoveFromFavorites(quote: Quote){
		this.quotesService.removeQuoteFromFavorites(quote);
		this.quotes = this.quotesService.getFavoriteQuotes(); // could also splice the this.quotes array
	}
	
	getBackground(){
		return this.settingsService.isAltBackground();
	}
	
	ionViewWillEnter(){
		this.quotes = this.quotesService.getFavoriteQuotes();
	}
}
