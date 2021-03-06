package Setprecision;

import Utility.Logback;
import Utility.TestLogin;
import Utility.Util;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import pageObjects.BasePage;
import pageObjects.SelLibrary;

import java.io.InputStream;
import java.util.Properties;

public class Farmland {
    private BasePage bp = new BasePage();
    private String btnFarm = "//li[2]//div[1]//div[1]//span[1]";
    private String btnRegional = "//li[text()='区域管理']";
    private String farmtgename = "//tbody/tr[2]/td[3]";
    private String inputname = "//input[@placeholder='请输入内容']";
    private String Selectclick = "//div[text()='田块类型：']/../div[2]//span";
//    private String selectType = "//span[text()='水田']/../..";
    private String btnquery = "//span[text()=' 查询']/..";
    private String checkquery = "//table//tr[1]//td[3]";
    private String btnsee = "//span[text() ='查看']/..";
    private String closefarm = "//i[@class='el-icon-close']";



    @Given("^: login$")
    public void login() throws InterruptedException{
        Util.fnLoadBrowser();
        TestLogin.login(Util.driver, "zhaoyueyou", "Aa123456@");
        Thread.sleep(2000);
    }

    @Given("^: open a information page$")
    public void openAInformationPage() throws InterruptedException {
        Thread.sleep(3000);
        //点击农场管理
        new SelLibrary().findElementByXpathAndClick(Logback.properties.getProperty("农场管理点击"));
        bp.waitime(2000);
        //点击区域管理
        new SelLibrary().findElementByXpathAndClick(Logback.properties.getProperty("区域管理"));
        bp.waitime(3000);
    }

    @Given("^: Enter the field name \"([^\"]*)\"$")
    public void enterTheFieldName(String name) throws Throwable {

        /*String farmname = new SelLibrary().getTextByXpath(farmtgename);
        bp.waitime(2000);*/
        WebElement farm = new SelLibrary().findElementByXpath(Logback.properties.getProperty("输入田块名称"));
        farm.clear();
        bp.waitime(2000);
        farm.sendKeys(name);


    }

    @When("^: Selected field type \"([^\"]*)\"$")
    public void selectedFieldType(String type) throws Throwable {
//        new SelLibrary().findElementByXpathAndClick(Logback.properties.getProperty("田块类型"));
//        new SelLibrary().findElementByXpathAndClick(Logback.properties.getProperty("选中田块"));
         new SelLibrary().findElementByXpathAndClick(Selectclick);
         String selectType = "//span[text()='"+ type +"']";
         new SelLibrary().findElementByXpathAndClick(selectType);
       //  String farmtype = new SelLibrary().findElementByXpath(selectType).getText();

    }

    @And("^:Click the query button$")
    public void clickTheQueryButton() {
        bp.waitime(3000);
        new SelLibrary().findElementByXpathAndClick(Logback.properties.getProperty("查询按钮"));
    }

    @Then("^:Check whether the query matches \"([^\"]*)\"$")
    public void checkWhetherTheQueryMatches(String result) throws Throwable {

            bp.waitime(3000);
            String text = new SelLibrary().getTextByXpath(Logback.properties.getProperty("检查结果"));
            Assert.assertEquals(text, result);


    }


    @Given("^Check View button$")
    public void checkViewButton() {
        bp.waitime(3000);
        System.out.println(Util.driver.findElement(By.xpath("//span[text() ='查看']")).getText());
        new SelLibrary().findElementByXpathAndClick(btnsee);
        bp.waitime(3000);

    }

    @Then("^Closing details$")
    public void closingDetails() {

        bp.waitime(3000);
        new SelLibrary().findElementByXpathAndClick(closefarm);
        bp.waitime(3000);
    }

    @Given("^loginout$")
    public void loginout() {
        Util.driver.quit();
    }


}
