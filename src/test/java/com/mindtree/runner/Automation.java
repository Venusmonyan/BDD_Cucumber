package com.mindtree.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features=".//FeatureFiles/Automation.feature", glue = {"com.mindtree.stepdefinitions"},
				dryRun=false,monochrome=true,plugin= {"pretty","html:test-output"}
				)
public class Automation {

}
