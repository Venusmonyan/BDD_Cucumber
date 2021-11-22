package com.mindtree.utilities;

import java.io.FileNotFoundException;
import java.io.IOException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;


public class OpenChrome {
public static WebDriver driver;

public static WebDriver getDriver() throws FileNotFoundException, IOException {
	ReadPropertyFile r = new ReadPropertyFile();
	ChromeOptions options = new ChromeOptions();
	options.addArguments("start-maximized");
	options.addArguments("disable-popup-blocking");
	options.addArguments("--disable-notifications");
	System.setProperty(r.getChromeDriverKey(), r.getChromeDriverPath());
	driver = new ChromeDriver(options);
	return driver;
}

}
