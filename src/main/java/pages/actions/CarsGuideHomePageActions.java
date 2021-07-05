package pages.actions;

import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import pages.locators.CarsGuideHomePageLocators;
import utils.SeleniumDriver;

public class CarsGuideHomePageActions {

	CarsGuideHomePageLocators carsGuideHomePageLocators = null;

	public CarsGuideHomePageActions() {

		this.carsGuideHomePageLocators = new CarsGuideHomePageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), carsGuideHomePageLocators);

	}

	public void moveToBuySellMenu() {
		
		Actions action=new Actions(SeleniumDriver.getDriver());
		action.moveToElement(carsGuideHomePageLocators.buySellLink).perform();

	}

	public void clickOnSearchCarsSubMenu(String carstypeLink) {
		
		carsGuideHomePageLocators.searchCarsLink.click();

	}

	public void clickOnUsedCarsSubMenu() {
		carsGuideHomePageLocators.usedLink.click();
	}
	
	
	public void moveToReviews() {
		Actions action=new Actions(SeleniumDriver.getDriver());
		action.moveToElement(carsGuideHomePageLocators.reviewsLink).perform();
	}

}
