package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class CarSearchPageLocators {
	
	@FindBy(how = How.XPATH, using = "//*[@id='makes']")
	public WebElement anyMake;
	
	
	@FindBy(how = How.XPATH, using = "//*[@id=\"block-system-main\"]/div/div/div/div/div/form/div[1]/label[1]")
	public WebElement allnewusedcarlink;
	
	@FindBy(how = How.XPATH, using = "//*[@id='models']")
	public WebElement anyModel;
	
	@FindBy(how = How.XPATH, using = "//*[@id='locations']")
	public WebElement anyLocation;
	
	@FindBy(how = How.XPATH, using = "//*[@id='priceTo']")
	public WebElement price;
	
	@FindBy(how = How.XPATH, using = "//*[@id='search-submit']")
	public WebElement findMyNextCar;
	
	

}
