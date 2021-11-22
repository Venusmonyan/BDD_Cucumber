package com.mindtree.pageobjects;

import java.io.FileNotFoundException;
import java.io.IOException;
import com.mindtree.utilities.ReadPropertyFile;

public class PageTitleValidator {
	public static String PageTitle(String module) throws FileNotFoundException, IOException {
		
		ReadPropertyFile rpf = new ReadPropertyFile();
		if(module.equalsIgnoreCase("personalizedGifts")) {
			return rpf.getPersonalizedGiftsValidator();
		}
		else if(module.equalsIgnoreCase("new")) {
			return rpf.getNewModuleValidator();
		}
		else if(module.equalsIgnoreCase("topFiftyModule")) {
			return rpf.getTopFiftyValidator();
		}
		else if(module.equalsIgnoreCase("christmasGifts")) {
			return rpf.getChristmasGiftsValidator();
		}
		else if(module.equalsIgnoreCase("secretChristmasGifts")) {
			return rpf.getSecretChristmasGiftsValidator();
		}
		else if(module.equalsIgnoreCase("allOfIt")) {
			return rpf.getAllOfItValidator();
		}
		else if(module.equalsIgnoreCase("giftCards")) {
			return rpf.getGiftCardValidator();
		}
		else if(module.equalsIgnoreCase("wishList")) {
			System.out.println(rpf.getWishListValidator());
			return rpf.getWishListValidator();
		}
		return "None";
	}
}
