package com.mindtree.pageobjects;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;

import com.mindtree.helper.WebDriverHelper;
import com.mindtree.uistore.AppUI;

public class PageModuleChecker {
	WebDriver driver;
	Logger logger;
	WebDriverHelper wdh;
	
	public void moduleValidator(WebDriver driver,Logger logger,WebDriverHelper wdh,String module) {
		if(module.equalsIgnoreCase("personalizedGifts")) {
			wdh.clicks(AppUI.PersonalizedGifts, driver, logger, module);
		}
		else if(module.equalsIgnoreCase("new")) {
			wdh.clicks(AppUI.newModule, driver, logger, module);
		}
		else if(module.equalsIgnoreCase("topFiftyModule")) {
			wdh.clicks(AppUI.topFifty, driver, logger, module);
		}
		else if(module.equalsIgnoreCase("christmasGifts")) {
			wdh.clicks(AppUI.christmasGifts, driver, logger, module);
		}
		else if(module.equalsIgnoreCase("secretChristmasGifts")) {
			wdh.clicks(AppUI.secretChristmasGifts, driver, logger, module);
		}
		else if(module.equalsIgnoreCase("allOfIt")) {
			wdh.clicks(AppUI.allOfIt, driver, logger, module);
		}
		else if(module.equalsIgnoreCase("giftCards")) {
			wdh.clicks(AppUI.giftCard, driver, logger, module);
		}
		else if(module.equalsIgnoreCase("wishList")) {
			wdh.clicks(AppUI.wishList, driver, logger, module);
		}
	}
}
