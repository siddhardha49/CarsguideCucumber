package pages.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import pages.locators.UsedCarPageLocators;
import utils.SeleniumDriver;

public class UsedCarPageActions {
	
	
	UsedCarPageLocators usedCarPageLocators=null;
	
	public UsedCarPageActions() {
		
		
		this.usedCarPageLocators=new UsedCarPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), usedCarPageLocators);
	}
	
	
	
	public void selectCarModel(String carModel) {

		Select selectCarModels = new Select(usedCarPageLocators.anyModel);
		selectCarModels.selectByVisibleText(carModel);

	}
	

}
