Feature: Home Page of BigSmall
@SearchTest
Scenario Outline: Verify the Search Results Page
Given When user opens URL "https://www.bigsmall.in/"
When User searches "<key>" in the Search Bar
And clicks on the "<option>"
Then verify if the page navigates to Search Results Page

Examples:
		|key	   | 	option        |
		|Lord Shiva|Search Icon Button|
		|Lord Shiva|Enter Key in Keyboard|

@ModulesTest
Scenario Outline:Verify all the Modules
Given When user opens URL "https://www.bigsmall.in/"
When User clicks on the "<modules>"
Then verify if the page navigates to "<modules>"

Examples:
|        modules		|
|personalizedGifts		|
|new					|
|topFiftyModule			|
|christmasGifts			|
|secretChristmasGifts	|
|allOfIt				|
|giftCards				|
|wishList				|


Scenario: Verify the Login
Given When user opens URL "https://www.bigsmall.in/"
When User clicks on the "Sign In" Button
And user gives Email as "" and Password as ""
And user clicks Login button
Then verify the Login

Scenario Outline: Verify the Login of Registered Details
Given When user opens URL "https://www.bigsmall.in/"
When User clicks on the "Sign In" Button
And user gives Email as "<email>" and Password as "<pass>"
And user clicks Login button
Then verify the Login

Examples:
|email				|pass	|
|x123x123x@gmail.com|123456	|




