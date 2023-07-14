import { Given,Then,When, } from "@wdio/cucumber-framework";
import chai from "chai"
//first wdio code
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
//successful login
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
//input type entry
Given(/^I launch the Internet Herokuapp$/,async function(){
    //input field
    //await browser.url('https://the-internet.herokuapp.com/inputs') 
    //dropdown
    //await browser.url('https://the-internet.herokuapp.com/dropdown')
    //checkbox
    await browser.url('https://the-internet.herokuapp.com/checkboxes')
    
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
//drop down selection 
//validate the default selection in the drop down
When(/^I select the dropdown option$/,async function(){
    let defaultdropdown=await $('//select/option[@selected="selected"]').getText()
    chai.expect(defaultdropdown).to.equal('Please select an option')
    await browser.pause(3000)
    //selecting the options - attributes, visible text and index
    let listofoptions=await $('select[id="dropdown"]')
    await listofoptions.selectByAttribute('value','1') // option 1
    await browser.pause(2000)
    await listofoptions.selectByIndex(2) // option  2
    await browser.pause(2000)
    await listofoptions.selectByVisibleText('Option 1') // option 1
    await browser.pause(3000) 
    //Getting list of options available in drop down
    let dropdownlist=await $$(`select > option`)
    let storedarray = []
    for(let i=0;i<dropdownlist.length;i++)
    {
        let iterateoptions=dropdownlist[i]
        let storedoptions=await iterateoptions.getText()
        storedarray.push(storedoptions)
    }
     console.log(`********************** the list of  options: ${storedarray}`)
     await browser.pause(2000)
})
When(/^I select the Checkbox option$/,async function(){
    let flag=await $('//form[@id="checkboxes"]//input[2]').isSelected();
    chai.expect(flag).to.be.true
    console.log(`*******flag: ${flag}`);
    await browser.pause(2000)

})

