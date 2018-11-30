const {Given, Then, When, After} = require('cucumber')

Given('I visit the site' , async function() {
    await this.openHomePage()
})

When('I click {string} I should see under choice {string}', async function(choice, chosen){
    return await this.selectItem(choice, chosen)
});

When('I click {string}', async function(choice) {
    return await this.clickOn(choice)
});

Then('I should see the results', async function () {
    return await this.theResult()

});
Then('the score increases', async function () {
    return await this.theScore();
});

After(async function() {
    return await this.closeHomePage()
})
