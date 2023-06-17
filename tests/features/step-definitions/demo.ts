import { Given,Then,When, } from "@wdio/cucumber-framework";
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
Given(/^I open orange HRM$/,async function(){
    await browser.url('/')
    await browser.maximizeWindow()
    await browser.pause(10000)
    await browser.setTimeout({implicit:15000,pageLoad:10000})
})
When(/^I enter correct credentials$/,async function(){
    await $('input[name="username"]').setValue('Admin')
     await $('input[name="password"]').setValue('admin123')
     await $('button[type="submit"]').click()
})
Then(/^I see orange HRM web application opened$/,async function(){
    await browser.pause(10000)
    await expect(browser).toHaveUrlContaining('https://opensource-demo.orangehrmlive.com/')
})
Given(/^I launch the Internet Herokuapp$/,async function(){
    await browser.url('https://the-internet.herokuapp.com/inputs')
})
When(/^I enter number in the input field$/,async function(){
    let number=12345
    let string=number.toString()
    let set=await $('input[type="number"]')
    set.setValue(string)
    await browser.pause(10000)
    await $('input[type="number"]').clearValue()
})
Then(/^I clear the input field and type slowly$/,async function(){
    let number1=12345
    let string1=number1.toString()
    let set1=await $('input[type="number"]')
    set1.click()
   for(let i=0;i<=string1.length;i++)
   {
    let iteration=string1.charAt(i)
    await browser.keys(iteration)
   }
 await browser.pause(8000)
})

