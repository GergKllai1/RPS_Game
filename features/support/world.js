const { setWorldConstructor } = require('cucumber')
const { expect } = require('chai')
const puppeteer = require('puppeteer')

const HOME_PAGE = 'http://localhost:3000'

class RPSWorld{
    constructor() {}

    async openHomePage() {
        this.browser = await puppeteer.launch({headless: false, slowmo: 300})
        this.page = await this.browser.newPage()
        await this.page.goto(HOME_PAGE)
    }

    async closeHomePage() {
        await this.browser.close()
    }

    async selectItem(selection, outcome){
        const choice = `#${selection}`
        await this.page.evaluate(choise => choice.textContent, choice)
        expect(choice).to.be.eq(`#${outcome}`)
    };

    async clickOn(choice){
        const inputSelector = `#${choice}`
        await this.page.click(inputSelector)
    }
    

    async theResult(){
        const computerrock = await this.page.$('#computerrock')
        const computerpaper = await this.page.$('#computerpaper')
        const computerscissors = await this.page.$('#computerscissors')
        const choice = await this.page.$('#result')
        const results = await this.page.evaluate(choice => choice.textContent, choice)
        if(computerrock !== null){
            expect(results).to.be.eq('The game is a tie')
        }else if(computerpaper !== null){
            expect(results).to.be.eq('You have lost')
        }else if(computerscissors !== null){
            expect(results).to.be.eq('You have won')
        } 
    }
}

setWorldConstructor(RPSWorld)