import { Given,Then,When } from "@wdio/cucumber-framework";
import chai from "chai"
Given(/^Google page is opened$/,async function(){
    await console.log("Before opening the chrome");
    await browser.url('https://www.google.com/')
    await browser.pause(8000)
    // await browser.url('https://webdriver.io/')
    // await console.log(browser.getTitle())
    // await browser.pause(8000)
})
When(/^Search with (.*)$/,async function(SearchItem){
    console.log(`>>SearchItem:${SearchItem}`);
    let ele = await $(`[name=q]`)
    await ele.click()
    await ele.setValue(SearchItem)
    await browser.keys('Enter')
})
Then(/^Click on the first search result$/,async function(){
    let ele=await $(`<h3>`)
    await ele.click()
})
Then(/^URL should match (.*)$/,async function(ExpectedURL){
    console.log(`>>Expected URL: ${ExpectedURL}`);
    await expect(browser).toHaveUrl('https://webdriver.io/') 
})
