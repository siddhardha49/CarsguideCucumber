package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class UsedCarPageLocators {
	
	@FindBy(how = How.XPATH, using = "//*[@id='models']")
	public WebElement anyModel;
	
	
	

}
