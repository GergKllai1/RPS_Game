const {Given, Then, When, After} = require('cucumber')

Given('I visit the site' , async function() {
    await this.openHomePage()
})

Then('I should see {string}', async function(content) {
    await this.pageHasSelectedContent(content)
})

When('I click {string} I should see under choice {string}', async function(choice, chosen){
    return await this.selectItem(choice, chosen)
});

When('I click {string} I should see the results', async function(string) {
    return await this.theResult(string)
});

When('{string} should be either {string} {string} or {string}', async function (ai,rock,paper,scissor) {
    return await this.aiChosen(ai, rock, paper, scissor)
});

After(async function() {
    return await this.closeHomePage()
})
