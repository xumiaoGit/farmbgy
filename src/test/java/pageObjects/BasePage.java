package pageObjects;

import org.openqa.selenium.*;

import java.util.List;

public class BasePage {
    private static Object GetLoctions;
    private static volatile WebDriver driver = null;

    /**
     * 单击事件
     */
    public static void Click(WebElement element) {
        try {
            element.click();
        } catch (ElementNotVisibleException e) {
            System.out.println("传入的元素" + element + "有误！请检查元素是否正确！");
        }
    }


    //
  /*  public static void fnDoubleClick(By elnFirstRecord) {
        try {
            Action actions = new Action(driver);
        } catch (Exception e) {

        }
    }*/

    /**
     * 输入文本框
     */
    public static void Sendkeys(WebElement element, String key) {
        try {
            element.sendKeys(key);
        } catch (Exception e) {
            System.out.println("传入的元素:" + element + ",传入的Key值：" + key + "有错误！请检查");
        }
    }

//    // 处理提示框输入字符
//    public void AlterSendCase(String text, boolean iscancel) {
//        driver.DelAlterSendcase(text, iscancel);
//
//    }

    public WebElement getSonElement(List elements, int index) {

        return (WebElement) elements.get(index);
    }
    /**
     * 时间等待
     */
    public void waitime(long time) {
        try {
            Thread.sleep(time);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
    /**
     * 滚动到最下方
     */
    public void OperitionScrollDown() {
        ((JavascriptExecutor) driver).executeScript("window.scrollTo(0,document.body.scrollHeight)");
        this.waitime(3000);
    }


    /**
     * 滚动到指定元素位置
     */
    public void OperitionScrollToElement(WebElement element) {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView();", element);
        this.waitime(3000);
    }

    /**
     * 向下滑动800像素
     */
    public void OperitionScrollTo() {
        ((JavascriptExecutor) driver).executeScript("window…scrollBy(0,800);");
        this.waitime(3000);
    }

    /**
     * 处理Alert提示框
     */
    public void DelAlete(boolean iscancel) {
        Alert alt = driver.switchTo().alert();
        if (iscancel != false) {
            this.waitime(2000);
            alt.accept();
        } else {
            alt.dismiss();
        }
    }

    /**
     * 处理提示框里的输入框
     */
    public void DelAlterSendcase(String text, boolean iscancel) {
        Alert prompt = driver.switchTo().alert();
        prompt.sendKeys(text);
        if (iscancel != false) {
            prompt.accept();
        } else {
            prompt.dismiss();
        }
    }





}
