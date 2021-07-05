package pages.actions;

import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import pages.locators.CarSearchPageLocators;
import utils.SeleniumDriver;

public class CarsSearchPageActions {

	CarSearchPageLocators carSearchPageLocators = null;

	public CarsSearchPageActions() {
		this.carSearchPageLocators = new CarSearchPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), carSearchPageLocators);

	}

	public void selectCarMake(String carBrand) throws InterruptedException {
		
		//carSearchPageLocators.allnewusedcarlink.click();
		//driver.findElement(By.xpath("//*[@id=\"block-system-main\"]/div/div/div/div/div/form/div[1]/label[1]")).click();

		Select selectCarMaker = new Select(carSearchPageLocators.anyMake);
		selectCarMaker.selectByVisibleText(carBrand);
		Thread.sleep(3000);

	}

	public void selectCarModel(String carModel) {

		Select selectCarModels = new Select(carSearchPageLocators.anyModel);
		selectCarModels.selectByVisibleText(carModel);

	}
	
	public void selectCarLocation(String carLocation) {

		Select selectCarLocations = new Select(carSearchPageLocators.anyLocation);
		selectCarLocations.selectByVisibleText(carLocation);

	}
	
	public void selectCarPrice(String carPrice) {

		Select selectCarPricer = new Select(carSearchPageLocators.price);
		selectCarPricer.selectByVisibleText(carPrice);

	}
	
	
	public void findMyNextCarButton() {

		carSearchPageLocators.findMyNextCar.click();
	}


}
