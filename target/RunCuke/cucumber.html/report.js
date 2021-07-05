$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchCars.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing to validate search cars page is working",
  "description": "In order to validate that\nthe search cars page is working fine\nwe will do acceptance testing\nI want to use this template for my feature file",
  "id": "acceptance-testing-to-validate-search-cars-page-is-working",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Search-Cars"
    }
  ]
});
formatter.before({
  "duration": 3024141300,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Validate Search cars Page",
  "description": "",
  "id": "acceptance-testing-to-validate-search-cars-page-is-working;validate-search-cars-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Search-Cars-Positive"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on the Home page \"https://www.carsguide.com.au/\" of carsGuide website",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I move to menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 12
    },
    {
      "cells": [
        "buysell"
      ],
      "line": 13
    },
    {
      "cells": [
        "reviews"
      ],
      "line": 14
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "click on \"search cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "select carbrand as \"BMW\" from AnyMake Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "select carmodel as \"1 Series\" from AnyModel Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "select carlocation as \"NSW - Central Coast\" from AnyLocation Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "select carprice as \"$60,000\" from Price Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I will click on Find_My_Next_Car button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "i should see list of searched cars",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "page title should be \"Bmw 1 Series Under 60000 for Sale Central Coast NSW | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au/",
      "offset": 23
    }
  ],
  "location": "SearchCarsSteps.i_am_on_the_Home_page_of_carsGuide_website(String)"
});
formatter.result({
  "duration": 6531573400,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_move_to_menu(String\u003e)"
});
formatter.result({
  "duration": 217939400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "search cars",
      "offset": 10
    }
  ],
  "location": "SearchCarsSteps.click_on_link(String)"
});
formatter.result({
  "duration": 2730080500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_carbrand_as_from_AnyMake_Dropdown(String)"
});
formatter.result({
  "duration": 6242173800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 Series",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_carmodel_as_from_AnyModel_Dropdown(String)"
});
formatter.result({
  "duration": 185168800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Central Coast",
      "offset": 23
    }
  ],
  "location": "SearchCarsSteps.select_carlocation_as_from_AnyLocation_Dropdown(String)"
});
formatter.result({
  "duration": 201387600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$60,000",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_carprice_as_from_Price_Dropdown(String)"
});
formatter.result({
  "duration": 193443400,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_will_click_on_Find_My_Next_Car_button()"
});
formatter.result({
  "duration": 2933648300,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_should_see_list_of_searched_cars()"
});
formatter.result({
  "duration": 120400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bmw 1 Series Under 60000 for Sale Central Coast NSW | carsguide",
      "offset": 22
    }
  ],
  "location": "SearchCarsSteps.page_title_should_be(String)"
});
formatter.result({
  "duration": 28456600,
  "status": "passed"
});
formatter.after({
  "duration": 195360400,
  "status": "passed"
});
formatter.uri("UsedCarSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing to validate used search cars page is working",
  "description": "In order to validate that\r\nthe used search cars page is working fine\r\nwe will do acceptance testing\r\nI want to use this template for my feature file",
  "id": "acceptance-testing-to-validate-used-search-cars-page-is-working",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Used-Search-Cars"
    }
  ]
});
formatter.before({
  "duration": 1859906900,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Validate used Search cars Page",
  "description": "",
  "id": "acceptance-testing-to-validate-used-search-cars-page-is-working;validate-used-search-cars-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@used-Search-Cars-Positive"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on the Home page \"https://www.carsguide.com.au/\" of carsGuide website",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I move to menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 12
    },
    {
      "cells": [
        "buysell"
      ],
      "line": 13
    },
    {
      "cells": [
        "reviews"
      ],
      "line": 14
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "click on \"Used\" cars from used cars page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "select carbrand as \"Audi\" from AnyMake Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "select carmodel from used car page",
  "rows": [
    {
      "cells": [
        "carmodel"
      ],
      "line": 18
    },
    {
      "cells": [
        "A4"
      ],
      "line": 19
    },
    {
      "cells": [
        "A3"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "select carlocation as \"NSW - Central West\" from AnyLocation Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "select carprice as \"$20,000\" from Price Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I will click on Find_My_Next_Car button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "i should see list of searched cars",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "page title should be \"Used Audi A4 Under 20000 for Sale Central West NSW | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au/",
      "offset": 23
    }
  ],
  "location": "SearchCarsSteps.i_am_on_the_Home_page_of_carsGuide_website(String)"
});
formatter.result({
  "duration": 5264325000,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_move_to_menu(String\u003e)"
});
formatter.result({
  "duration": 742796100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used",
      "offset": 10
    }
  ],
  "location": "UsedSearchCarSteps.click_on_cars_from_used_cars_page(String)"
});
formatter.result({
  "duration": 2139470800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_carbrand_as_from_AnyMake_Dropdown(String)"
});
formatter.result({
  "duration": 6328767400,
  "status": "passed"
});
formatter.match({
  "location": "UsedSearchCarSteps.select_carmodel_from_used_car_page(String\u003e)"
});
formatter.result({
  "duration": 317583500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Central West",
      "offset": 23
    }
  ],
  "location": "SearchCarsSteps.select_carlocation_as_from_AnyLocation_Dropdown(String)"
});
formatter.result({
  "duration": 192665300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$20,000",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_carprice_as_from_Price_Dropdown(String)"
});
formatter.result({
  "duration": 153099300,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_will_click_on_Find_My_Next_Car_button()"
});
formatter.result({
  "duration": 6368093000,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_should_see_list_of_searched_cars()"
});
formatter.result({
  "duration": 79400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Audi A4 Under 20000 for Sale Central West NSW | carsguide",
      "offset": 22
    }
  ],
  "location": "SearchCarsSteps.page_title_should_be(String)"
});
formatter.result({
  "duration": 21876400,
  "status": "passed"
});
formatter.after({
  "duration": 176046600,
  "status": "passed"
});
});