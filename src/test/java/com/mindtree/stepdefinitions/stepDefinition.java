package com.mindtree.stepdefinitions;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;

import com.mindtree.helper.WebDriverHelper;
import com.mindtree.pageobjects.PageModuleChecker;
import com.mindtree.pageobjects.PageTitleValidator;
import com.mindtree.uistore.AppUI;
import com.mindtree.utilities.ExtentLogUtilities;
import com.mindtree.utilities.OpenChrome;
import com.mindtree.utilities.ReadPropertyFile;
import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;



public class stepDefinition  {
	static ExtentTest test;
	static ExtentReports report;
	static Logger logger;
	WebDriverHelper wdh;
	ReadPropertyFile rpf;
	static WebDriver driver;
	String options="";
	PageModuleChecker pv;
	String pageChecker="";
	
	public static void VerifyCaptcha(Logger logger,ExtentTest test,String name) throws IOException, InterruptedException {
		if(driver.getPageSource().contains(AppUI.captcha)) {
			logger.info("Captcha Screen Found");
			logger.info("Manually Solve the Captcha within 45 seconds");
			Thread.sleep(45000);
			logger = Logger.getLogger(stepDefinition.class.getName());
			if(!driver.getPageSource().contains(AppUI.captcha)){
				logger.info("Captcha Verified Manually");
			}
			else {
				System.out.println("*******Captcha not Verified Manually*******");
				logger.error("Captcha was not Verified Manually");
				ExtentLogUtilities.fail(driver,test, "Captcha not Verified Manually",name);
				Assert.assertTrue(false);
			}
		}
	}
	@Before
	public void Initialize() throws FileNotFoundException, IOException {
		rpf = new ReadPropertyFile();
		wdh = new WebDriverHelper(); 
		driver = OpenChrome.getDriver();
		String timeStamp = new SimpleDateFormat("dd.MM.yyyy.HH.mm.ss.SS").format(new Date());
		report = new ExtentReports(rpf.getExtentReportPath()+"\\ExtentReportResults-"+timeStamp+"-.html");
		PropertyConfigurator.configure(rpf.getlog4jPath());
		logger = Logger.getLogger(stepDefinition.class.getName());
		pv = new PageModuleChecker();
	}
	public static void waits() throws InterruptedException {
		Thread.sleep(3000);
	}

	@Given("^When user opens URL \"([^\"]*)\"$")
	public void when_user_opens_URL(String URL) throws Throwable {
		wdh.GetURL(driver, logger, URL);
	}

	@When("^User searches \"([^\"]*)\" in the Search Bar$")
	public void user_searches_in_the_Search_Bar(String key) throws Throwable {
		wdh.sendText(AppUI.SearchBar, driver, logger, key, "Search Bar");

	}

	@When("^clicks on the \"([^\"]*)\"$")
	public void clicks_on_the (String option) throws Throwable {
		options = option;
		if(option.toUpperCase().contains("KEY")) {
			wdh.PressEnter(AppUI.SearchBar, driver, logger);
		}
		else {
			wdh.clicks(AppUI.SearchIcon, driver, logger, option);
		}
	}

	@Then("^verify if the page navigates to Search Results Page$")
	public void verify_if_the_page_navigates_to_Search_Results_Page() throws Throwable {
		//Name of the Method
		String name = Thread.currentThread().getStackTrace()[1].getMethodName();
		test = report.startTest(name);

		//Checking the Post Condition
		waits();
		
		if(driver.getPageSource().contains(rpf.getSearchIconValidator())) {
			if(options.toUpperCase().contains("KEY"))
			{
				ExtentLogUtilities.pass(driver, test, "Pressed ENTER key, navigated to Search Results Page",name);
				logger.info("Pressed ENTER key, navigated to Search Results Page");
			}
			else {
				ExtentLogUtilities.pass(driver, test, "Clicked on the SearchIconButton, navigated to Search Results Page",name);
				logger.info("Search Icon Click PASSED, navigated to Search Found Page");
			}
		}
		else {
			if(options.toUpperCase().contains("KEY"))
			{	Assert.assertTrue(false);
				logger.error("Pressed ENTER key, coudn't navigate to Search Results Page");
				ExtentLogUtilities.fail(driver, test, "Pressed ENTER key, coudn't navigate to Search Results Page",name);
			}
			else 
			{
				Assert.assertTrue(false);
			logger.error("Search Icon Click FAILED, coudn't navigate to Search Results Page");
			ExtentLogUtilities.fail(driver, test, "Clicked on the SearchIconButton, coudn't navigate to Search Results Page",name);
			}
		}
		report.endTest(test);
		report.flush();
	}
		
	@When("^User clicks on the \"([^\"]*)\"$")
	public void user_clicks_on_the(String module) throws Throwable {
		pageChecker = module;
		pv.moduleValidator(driver, logger, wdh, module);
	}

	@Then("^verify if the page navigates to \"([^\"]*)\"$")
	public void verify_if_the_page_navigates_to(String arg1) throws Throwable {
		String name = Thread.currentThread().getStackTrace()[1].getMethodName();
		test = report.startTest(name);

		//Checking the Post Condition
		waits();
		if(driver.getTitle().contains(PageTitleValidator.PageTitle(pageChecker))) {
			logger.info("Navigated to "+pageChecker+" Page");
			ExtentLogUtilities.pass(driver, test, "Navigated to "+pageChecker+" Page",name);
		}
		else {
			logger.error("Error Navigation to "+pageChecker+" Page");
			Assert.assertTrue(false);
			ExtentLogUtilities.fail(driver, test, "Error Navigation to "+pageChecker+" Page",name);
		}
		report.endTest(test);
		report.flush();

	}
	
	@When("^User clicks on the \"([^\"]*)\" Button$")
	public void user_clicks_on_the_Button(String button) throws Throwable {
		wdh.clicks(AppUI.signIn, driver, logger, button);
	   
	}

	@When("^user gives Email as \"([^\"]*)\" and Password as \"([^\"]*)\"$")
	public void user_gives_Email_as_and_Password_as(String email, String pass) throws Throwable {
		waits();
		wdh.sendText(AppUI.loginEmail, driver, logger, email, "Email");
		wdh.sendText(AppUI.loginPass, driver, logger, pass, "Password");
	   
	}

	@When("^user clicks Login button$")
	public void user_clicks_Login_button() throws Throwable {
		wdh.clicks(AppUI.loginButton, driver, logger, "Login");
	   
	}

	@Then("^verify the Login$")
	public void verify_the_Login() throws Throwable {
		String name = Thread.currentThread().getStackTrace()[1].getMethodName();
		test = report.startTest(name);
		Thread.sleep(2000);
		VerifyCaptcha(logger,test,name);
		
		//Verify if login is successfull or not
		if(driver.getPageSource().contains(AppUI.LogOut)) {
			ExtentLogUtilities.fail(driver,test, "User Logged In! with the above Credentials",name);
			logger.error("User Logged In! with the above Credentials");
			Assert.assertTrue(false);
		}
		else {
			logger.info("User is NOT Logged In! with the above Credentials:TC PASSED");
			ExtentLogUtilities.pass(driver,test, "User is NOT Logged In! with the above Credentials",name);
		}
		report.endTest(test);
		report.flush();
	}

	
	@After
	public void Teardown() {
		driver.close();
	}



}
