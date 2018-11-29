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
    }
    

    async theResult(){
        const computerrock = this.page.$('#computerrock')
        const computerpaper = this.page.$('#computerpaper')
        const computerscissors = this.page.$('#computerscissors')
        const choice = '#result'
        const result = await this.page.evaluate(choice => choice.textContent, choice)
        if(computerrock === {}){
            expect(result).to.be.eq('The game is a tie')
        }else if(computerpaper === {}){
            expect(result).to.be.eq('You have lost')
        }if(computerscissors === {}){
            expect(result).to.be.eq('You have won')
        }
    }

}

setWorldConstructor(RPSWorld)