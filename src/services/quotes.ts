import { Quote } from '../data/quote.interface';

export class QuotesService {
	private favoriteQuotes: Quote[] = [];
	
	addQuoteToFavorites(quote: Quote){
		this.favoriteQuotes.push(quote);
		console.log('fav quotes', this.favoriteQuotes);
	}
	
	removeQuoteFromFavorites(quote: Quote){
		const position = this.favoriteQuotes.findIndex( (quoteEl) => {
			return quoteEl.id === quote.id;
		})
		this.favoriteQuotes.splice(position, 1);
		
		console.log('removed quote');
	}
	
	getFavoriteQuotes(){
		return this.favoriteQuotes.slice(); // slice to create a copy so that favoriteQuotes isn't editable from outside service
	}
	
	isFavorite(quote: Quote){
		return this.favoriteQuotes.find((quoteEl: Quote) => {
			return quoteEl.id === quote.id;
		})
	}
}