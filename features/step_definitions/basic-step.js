const {Given, Then, When, After} = require('cucumber')

Given('I visit the site' , async function() {
    await this.openHomePage()
})

Then('I should see {string}', async function(string) {
    await this.pageHasSelectedContent(string)
})

After(async function() {
    return await this.closeHomePage()
})