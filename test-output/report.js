$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./FeatureFiles/Automation.feature");
formatter.feature({
  "line": 1,
  "name": "Home Page of BigSmall",
  "description": "",
  "id": "home-page-of-bigsmall",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verify the Search Results Page",
  "description": "",
  "id": "home-page-of-bigsmall;verify-the-search-results-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SearchTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "When user opens URL \"https://www.bigsmall.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User searches \"\u003ckey\u003e\" in the Search Bar",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "clicks on the \"\u003coption\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "verify if the page navigates to Search Results Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "home-page-of-bigsmall;verify-the-search-results-page;",
  "rows": [
    {
      "cells": [
        "key",
        "option"
      ],
      "line": 10,
      "id": "home-page-of-bigsmall;verify-the-search-results-page;;1"
    },
    {
      "cells": [
        "Lord Shiva",
        "Search Icon Button"
      ],
      "line": 11,
      "id": "home-page-of-bigsmall;verify-the-search-results-page;;2"
    },
    {
      "cells": [
        "Lord Shiva",
        "Enter Key in Keyboard"
      ],
      "line": 12,
      "id": "home-page-of-bigsmall;verify-the-search-results-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2625579400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify the Search Results Page",
  "description": "",
  "id": "home-page-of-bigsmall;verify-the-search-results-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SearchTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "When user opens URL \"https://www.bigsmall.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User searches \"Lord Shiva\" in the Search Bar",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "clicks on the \"Search Icon Button\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "verify if the page navigates to Search Results Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.bigsmall.in/",
      "offset": 21
    }
  ],
  "location": "stepDefinition_HomePage.when_user_opens_URL(String)"
});
formatter.result({
  "duration": 5320302100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lord Shiva",
      "offset": 15
    }
  ],
  "location": "stepDefinition_HomePage.user_searches_in_the_Search_Bar(String)"
});
formatter.result({
  "duration": 393001800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Icon Button",
      "offset": 15
    }
  ],
  "location": "stepDefinition_HomePage.clicks_on_the(String)"
});
formatter.result({
  "duration": 112781700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition_HomePage.verify_if_the_page_navigates_to_Search_Results_Page()"
});
formatter.result({
  "duration": 3556535800,
  "status": "passed"
});
formatter.after({
  "duration": 328499700,
  "status": "passed"
});
formatter.before({
  "duration": 1135816400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify the Search Results Page",
  "description": "",
  "id": "home-page-of-bigsmall;verify-the-search-results-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SearchTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "When user opens URL \"https://www.bigsmall.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User searches \"Lord Shiva\" in the Search Bar",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "clicks on the \"Enter Key in Keyboard\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "verify if the page navigates to Search Results Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.bigsmall.in/",
      "offset": 21
    }
  ],
  "location": "stepDefinition_HomePage.when_user_opens_URL(String)"
});
formatter.result({
  "duration": 5686814500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lord Shiva",
      "offset": 15
    }
  ],
  "location": "stepDefinition_HomePage.user_searches_in_the_Search_Bar(String)"
});
formatter.result({
  "duration": 371361400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter Key in Keyboard",
      "offset": 15
    }
  ],
  "location": "stepDefinition_HomePage.clicks_on_the(String)"
});
formatter.result({
  "duration": 2013022300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition_HomePage.verify_if_the_page_navigates_to_Search_Results_Page()"
});
formatter.result({
  "duration": 3397243000,
  "status": "passed"
});
formatter.after({
  "duration": 4158030500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Verify all the Modules",
  "description": "",
  "id": "home-page-of-bigsmall;verify-all-the-modules",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@ModulesTest"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "When user opens URL \"https://www.bigsmall.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User clicks on the \"\u003cmodules\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "verify if the page navigates to \"\u003cmodules\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "home-page-of-bigsmall;verify-all-the-modules;",
  "rows": [
    {
      "cells": [
        "modules"
      ],
      "line": 21,
      "id": "home-page-of-bigsmall;verify-all-the-modules;;1"
    },
    {
      "cells": [
        "personalizedGifts"
      ],
      "line": 22,
      "id": "home-page-of-bigsmall;verify-all-the-modules;;2"
    },
    {
      "cells": [
        "new"
      ],
      "line": 23,
      "id": "home-page-of-bigsmall;verify-all-the-modules;;3"
    },
    {
      "cells": [
        "topFiftyModule"
      ],
      "line": 24,
      "id": "home-page-of-bigsmall;verify-all-the-modules;;4"
    },
    {
      "cells": [
        "christmasGifts"
      ],
      "line": 25,
      "id": "home-page-of-bigsmall;verify-all-the-modules;;5"
    },
    {
      "cells": [
        "secretChristmasGifts"
      ],
      "line": 26,
      "id": "home-page-of-bigsmall;verify-all-the-modules;;6"
    },
    {
      "cells": [
        "allOfIt"
      ],
      "line": 27,
      "id": "home-page-of-bigsmall;verify-all-the-modules;;7"
    },
    {
      "cells": [
        "giftCards"
      ],
      "line": 28,
      "id": "home-page-of-bigsmall;verify-all-the-modules;;8"
    },
    {
      "cells": [
        "wishList"
      ],
      "line": 29,
      "id": "home-page-of-bigsmall;verify-all-the-modules;;9"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1115835300,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify all the Modules",
  "description": "",
  "id": "home-page-of-bigsmall;verify-all-the-modules;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@ModulesTest"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "When user opens URL \"https://www.bigsmall.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User clicks on the \"personalizedGifts\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "verify if the page navigates to \"personalizedGifts\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.bigsmall.in/",
      "offset": 21
    }
  ],
  "location": "stepDefinition_HomePage.when_user_opens_URL(String)"
});
formatter.result({
  "duration": 6767929300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "personalizedGifts",
      "offset": 20
    }
  ],
  "location": "stepDefinition_HomePage.user_clicks_on_the(String)"
});
formatter.result({
  "duration": 3021805900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "personalizedGifts",
      "offset": 33
    }
  ],
  "location": "stepDefinition_HomePage.verify_if_the_page_navigates_to(String)"
});
formatter.result({
  "duration": 3365778600,
  "status": "passed"
});
formatter.after({
  "duration": 4139526800,
  "status": "passed"
});
formatter.before({
  "duration": 1210119900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify all the Modules",
  "description": "",
  "id": "home-page-of-bigsmall;verify-all-the-modules;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@ModulesTest"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "When user opens URL \"https://www.bigsmall.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User clicks on the \"new\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "verify if the page navigates to \"new\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.bigsmall.in/",
      "offset": 21
    }
  ],
  "location": "stepDefinition_HomePage.when_user_opens_URL(String)"
});
formatter.result({
  "duration": 7073367100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new",
      "offset": 20
    }
  ],
  "location": "stepDefinition_HomePage.user_clicks_on_the(String)"
});
formatter.result({
  "duration": 2081883700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new",
      "offset": 33
    }
  ],
  "location": "stepDefinition_HomePage.verify_if_the_page_navigates_to(String)"
});
formatter.result({
  "duration": 3428605100,
  "status": "passed"
});
formatter.after({
  "duration": 4154415000,
  "status": "passed"
});
formatter.before({
  "duration": 1196362900,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify all the Modules",
  "description": "",
  "id": "home-page-of-bigsmall;verify-all-the-modules;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@ModulesTest"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "When user opens URL \"https://www.bigsmall.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User clicks on the \"topFiftyModule\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "verify if the page navigates to \"topFiftyModule\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.bigsmall.in/",
      "offset": 21
    }
  ],
  "location": "stepDefinition_HomePage.when_user_opens_URL(String)"
});
formatter.result({
  "duration": 7124936700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "topFiftyModule",
      "offset": 20
    }
  ],
  "location": "stepDefinition_HomePage.user_clicks_on_the(String)"
});
formatter.result({
  "duration": 7885444300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "topFiftyModule",
      "offset": 33
    }
  ],
  "location": "stepDefinition_HomePage.verify_if_the_page_navigates_to(String)"
});
formatter.result({
  "duration": 3365630800,
  "status": "passed"
});
formatter.after({
  "duration": 4159889900,
  "status": "passed"
});
formatter.before({
  "duration": 1091703100,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify all the Modules",
  "description": "",
  "id": "home-page-of-bigsmall;verify-all-the-modules;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@ModulesTest"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "When user opens URL \"https://www.bigsmall.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User clicks on the \"christmasGifts\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "verify if the page navigates to \"christmasGifts\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.bigsmall.in/",
      "offset": 21
    }
  ],
  "location": "stepDefinition_HomePage.when_user_opens_URL(String)"
});
formatter.result({
  "duration": 5728032700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "christmasGifts",
      "offset": 20
    }
  ],
  "location": "stepDefinition_HomePage.user_clicks_on_the(String)"
});
formatter.result({
  "duration": 2592297900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "christmasGifts",
      "offset": 33
    }
  ],
  "location": "stepDefinition_HomePage.verify_if_the_page_navigates_to(String)"
});
formatter.result({
  "duration": 3406825600,
  "status": "passed"
});
formatter.after({
  "duration": 4155593400,
  "status": "passed"
});
formatter.before({
  "duration": 1256828600,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify all the Modules",
  "description": "",
  "id": "home-page-of-bigsmall;verify-all-the-modules;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@ModulesTest"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "When user opens URL \"https://www.bigsmall.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User clicks on the \"secretChristmasGifts\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "verify if the page navigates to \"secretChristmasGifts\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.bigsmall.in/",
      "offset": 21
    }
  ],
  "location": "stepDefinition_HomePage.when_user_opens_URL(String)"
});
formatter.result({
  "duration": 6670292400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secretChristmasGifts",
      "offset": 20
    }
  ],
  "location": "stepDefinition_HomePage.user_clicks_on_the(String)"
});
formatter.result({
  "duration": 2626338800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secretChristmasGifts",
      "offset": 33
    }
  ],
  "location": "stepDefinition_HomePage.verify_if_the_page_navigates_to(String)"
});
formatter.result({
  "duration": 3339788400,
  "status": "passed"
});
formatter.after({
  "duration": 4157961400,
  "status": "passed"
});
formatter.before({
  "duration": 1122524400,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify all the Modules",
  "description": "",
  "id": "home-page-of-bigsmall;verify-all-the-modules;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@ModulesTest"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "When user opens URL \"https://www.bigsmall.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User clicks on the \"allOfIt\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "verify if the page navigates to \"allOfIt\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.bigsmall.in/",
      "offset": 21
    }
  ],
  "location": "stepDefinition_HomePage.when_user_opens_URL(String)"
});
formatter.result({
  "duration": 6326794800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "allOfIt",
      "offset": 20
    }
  ],
  "location": "stepDefinition_HomePage.user_clicks_on_the(String)"
});
formatter.result({
  "duration": 2047801800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "allOfIt",
      "offset": 33
    }
  ],
  "location": "stepDefinition_HomePage.verify_if_the_page_navigates_to(String)"
});
formatter.result({
  "duration": 3359006400,
  "status": "passed"
});
formatter.after({
  "duration": 4163814100,
  "status": "passed"
});
formatter.before({
  "duration": 1158398700,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Verify all the Modules",
  "description": "",
  "id": "home-page-of-bigsmall;verify-all-the-modules;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@ModulesTest"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "When user opens URL \"https://www.bigsmall.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User clicks on the \"giftCards\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "verify if the page navigates to \"giftCards\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.bigsmall.in/",
      "offset": 21
    }
  ],
  "location": "stepDefinition_HomePage.when_user_opens_URL(String)"
});
formatter.result({
  "duration": 6517579700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "giftCards",
      "offset": 20
    }
  ],
  "location": "stepDefinition_HomePage.user_clicks_on_the(String)"
});
formatter.result({
  "duration": 1742040900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "giftCards",
      "offset": 33
    }
  ],
  "location": "stepDefinition_HomePage.verify_if_the_page_navigates_to(String)"
});
formatter.result({
  "duration": 3255331300,
  "status": "passed"
});
formatter.after({
  "duration": 4167913200,
  "status": "passed"
});
formatter.before({
  "duration": 1120596800,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify all the Modules",
  "description": "",
  "id": "home-page-of-bigsmall;verify-all-the-modules;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@ModulesTest"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "When user opens URL \"https://www.bigsmall.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User clicks on the \"wishList\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "verify if the page navigates to \"wishList\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.bigsmall.in/",
      "offset": 21
    }
  ],
  "location": "stepDefinition_HomePage.when_user_opens_URL(String)"
});
formatter.result({
  "duration": 6585016300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wishList",
      "offset": 20
    }
  ],
  "location": "stepDefinition_HomePage.user_clicks_on_the(String)"
});
formatter.result({
  "duration": 88550900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wishList",
      "offset": 33
    }
  ],
  "location": "stepDefinition_HomePage.verify_if_the_page_navigates_to(String)"
});
formatter.result({
  "duration": 3384125200,
  "status": "passed"
});
formatter.after({
  "duration": 180483800,
  "status": "passed"
});
formatter.before({
  "duration": 1135960600,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Verify the Login",
  "description": "",
  "id": "home-page-of-bigsmall;verify-the-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "When user opens URL \"https://www.bigsmall.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User clicks on the \"Sign In\" Button",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "user gives Email as \"\" and Password as \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user clicks Login button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "verify the Login",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.bigsmall.in/",
      "offset": 21
    }
  ],
  "location": "stepDefinition_HomePage.when_user_opens_URL(String)"
});
formatter.result({
  "duration": 5741574300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 20
    }
  ],
  "location": "stepDefinition_HomePage.user_clicks_on_the_Button(String)"
});
formatter.result({
  "duration": 1472305900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "stepDefinition_HomePage.user_gives_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 3280131000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition_HomePage.user_clicks_Login_button()"
});
formatter.result({
  "duration": 2228920800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition_HomePage.verify_the_Login()"
});
formatter.result({
  "duration": 47397057000,
  "status": "passed"
});
formatter.after({
  "duration": 4150929000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 39,
  "name": "Verify the Login of Registered Details",
  "description": "",
  "id": "home-page-of-bigsmall;verify-the-login-of-registered-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 40,
  "name": "When user opens URL \"https://www.bigsmall.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "User clicks on the \"Sign In\" Button",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "user gives Email as \"\u003cemail\u003e\" and Password as \"\u003cpass\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user clicks Login button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "verify the Login",
  "keyword": "Then "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "home-page-of-bigsmall;verify-the-login-of-registered-details;",
  "rows": [
    {
      "cells": [
        "email",
        "pass"
      ],
      "line": 47,
      "id": "home-page-of-bigsmall;verify-the-login-of-registered-details;;1"
    },
    {
      "cells": [
        "x123x123x@gmail.com",
        "123456"
      ],
      "line": 48,
      "id": "home-page-of-bigsmall;verify-the-login-of-registered-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1111322300,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Verify the Login of Registered Details",
  "description": "",
  "id": "home-page-of-bigsmall;verify-the-login-of-registered-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 40,
  "name": "When user opens URL \"https://www.bigsmall.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "User clicks on the \"Sign In\" Button",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "user gives Email as \"x123x123x@gmail.com\" and Password as \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user clicks Login button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "verify the Login",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.bigsmall.in/",
      "offset": 21
    }
  ],
  "location": "stepDefinition_HomePage.when_user_opens_URL(String)"
});
formatter.result({
  "duration": 6016466000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 20
    }
  ],
  "location": "stepDefinition_HomePage.user_clicks_on_the_Button(String)"
});
formatter.result({
  "duration": 1601358500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "x123x123x@gmail.com",
      "offset": 21
    },
    {
      "val": "123456",
      "offset": 59
    }
  ],
  "location": "stepDefinition_HomePage.user_gives_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 3365419700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition_HomePage.user_clicks_Login_button()"
});
formatter.result({
  "duration": 2288474800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition_HomePage.verify_the_Login()"
});
formatter.result({
  "duration": 47429482600,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat com.mindtree.stepdefinitions.stepDefinition_HomePage.verify_the_Login(stepDefinition_HomePage.java:189)\r\n\tat ✽.Then verify the Login(./FeatureFiles/Automation.feature:44)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 4156312700,
  "status": "passed"
});
});