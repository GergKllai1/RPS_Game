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
    };

    async theScore(){
        const computer = await this.page.$('#computerscore')
        const computerscore = await this.page.evaluate(computer => computer.textContent, computer)
        const human = await this.page.$('#humanscore')
        const humanscore = await this.page.evaluate(human => human.textContent, human)
        const inputSelector = await this.page.$('#result')
        const result = await this.page.evaluate(inputSelector => inputSelector.textContent, inputSelector)
        if(result === 'The game is a tie'){
            expect(computerscore).to.be.eq('0')
            expect(humanscore).to.be.eq('0')
        }else if(result === 'You have won'){
            expect(computerscore).to.be.eq('0')
            expect(humanscore).to.be.eq('1')
        }if(result === 'You have lost'){
            expect(computerscore).to.be.eq('1')
            expect(humanscore).to.be.eq('0')
        }
    }

}

setWorldConstructor(RPSWorld)