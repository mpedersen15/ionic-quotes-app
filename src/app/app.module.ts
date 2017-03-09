import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LibraryPage } from '../pages/library/library';
import { CategoryPage } from '../pages/category/category';
import { QuotePage } from '../pages/quote/quote';
import { FavoritesPage } from '../pages/favorites/favorites';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { QuotesService } from '../services/quotes';

@NgModule({
  declarations: [
    MyApp,
	LibraryPage,
	CategoryPage,
	QuotePage,
	FavoritesPage,
	SettingsPage,
	TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
	LibraryPage,
	CategoryPage,
	QuotePage,
	FavoritesPage,
	SettingsPage,
	TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
	QuotesService
  ]
})
export class AppModule {}
