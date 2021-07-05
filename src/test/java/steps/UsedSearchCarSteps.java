package steps;

import java.util.List;

import cucumber.api.java.en.When;
import pages.actions.CarsGuideHomePageActions;
import pages.actions.UsedCarPageActions;

public class UsedSearchCarSteps {
	
	UsedCarPageActions usedCarPageActions=new UsedCarPageActions();
	CarsGuideHomePageActions carsGuideHomePageActions=new CarsGuideHomePageActions();
	
	
	@When("^click on \"([^\"]*)\" cars from used cars page$")
	public void click_on_cars_from_used_cars_page(String arg1) throws Throwable {
		
		carsGuideHomePageActions.clickOnUsedCarsSubMenu();
	   
	}

	@When("^select carmodel from used car page$")
	public void select_carmodel_from_used_car_page(List<String> list) throws Throwable {
		
		System.out.println("car model selected is : "+list.get(1));
		
		
		usedCarPageActions.selectCarModel(list.get(1));
		
	    
	}

	
	
	
}
