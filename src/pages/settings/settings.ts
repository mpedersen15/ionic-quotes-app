import { Component } from '@angular/core';
import { NavController, NavParams, Toggle } from 'ionic-angular';
import { SettingsService } from '../../services/settings';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public settingsService: SettingsService) {}

  onToggle(toggle: Toggle){
	console.log('toggle',toggle);
	
	this.settingsService.setAltBackground(toggle.checked);
	
	console.log('service alt bg boolean', this.settingsService.isAltBackground());
	
  }
  
  checkAltBackground(){
	return this.settingsService.isAltBackground();
  }

}
