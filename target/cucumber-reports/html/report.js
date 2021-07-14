$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/farmland.feature");
formatter.feature({
  "name": "Check farmland function",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login_cp02"
    }
  ]
});
formatter.scenario({
  "name": "Login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login_cp02"
    }
  ]
});
formatter.step({
  "name": ": login",
  "keyword": "Given "
});
formatter.match({
  "location": "Farmland.login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Open the field information page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login_cp02"
    }
  ]
});
formatter.step({
  "name": ": open a information page",
  "keyword": "Given "
});
formatter.match({
  "location": "Farmland.openAInformationPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Check farmland information",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": ": Enter the field name \"\u003cname\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": ": Selected field type \"\u003ctype\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": ":Click the query button",
  "keyword": "And "
});
formatter.step({
  "name": ":Check whether the query matches \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "type",
        "result"
      ]
    },
    {
      "cells": [
        "18-3",
        "",
        "18-3"
      ]
    },
    {
      "cells": [
        "18-2",
        "水田",
        "18-2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check farmland information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login_cp02"
    }
  ]
});
formatter.step({
  "name": ": Enter the field name \"18-3\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Farmland.enterTheFieldName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": Selected field type \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "Farmland.selectedFieldType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ":Click the query button",
  "keyword": "And "
});
formatter.match({
  "location": "Farmland.clickTheQueryButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ":Check whether the query matches \"18-3\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Farmland.checkWhetherTheQueryMatches(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check farmland information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login_cp02"
    }
  ]
});
formatter.step({
  "name": ": Enter the field name \"18-2\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Farmland.enterTheFieldName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": Selected field type \"水田\"",
  "keyword": "When "
});
formatter.match({
  "location": "Farmland.selectedFieldType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ":Click the query button",
  "keyword": "And "
});
formatter.match({
  "location": "Farmland.clickTheQueryButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ":Check whether the query matches \"18-2\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Farmland.checkWhetherTheQueryMatches(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Open view page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login_cp02"
    }
  ]
});
formatter.step({
  "name": "Check View button",
  "keyword": "Given "
});
formatter.match({
  "location": "Farmland.checkViewButton()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d91.0.4472.114)\nBuild info: version: \u00274.0.0-alpha-6\u0027, revision: \u00275f43a29cfc\u0027\nSystem info: host: \u0027LAPTOP-P2OBPK1K\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_152\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\86186\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60125}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: d840ca9f3846c9ececc87851fcfb9099\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:316)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:85)\r\n\tat pageObjects.SelLibrary.findElementByXpathAndClick(SelLibrary.java:58)\r\n\tat Setprecision.Farmland.checkViewButton(Farmland.java:98)\r\n\tat ✽.Check View button(src/test/resources/Feature/farmland.feature:20)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Closing details",
  "keyword": "Then "
});
formatter.match({
  "location": "Farmland.closingDetails()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "out login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login_cp02"
    }
  ]
});
formatter.step({
  "name": "loginout",
  "keyword": "Given "
});
formatter.match({
  "location": "Farmland.loginout()"
});
formatter.result({
  "status": "passed"
});
});