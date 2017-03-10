export class SettingsService {

	private altBackground: boolean = false;
	
	setAltBackground(isAlt: boolean){
		this.altBackground = isAlt;
	}
	
	isAltBackground(){
		return this.altBackground;
	}
	
}