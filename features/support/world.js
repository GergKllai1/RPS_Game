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

    async pageHasSelectedContent(content) {
        const pageContent = await this.page.content()
        const actualContent = pageContent.match(content)[0]

        expect(content).to.be.eq(actualContent)
    }

    async selectItem(selection, outcome){
        const inputSelector = `#${selection}`
        await this.page.click(inputSelector.toLowerCase())
        let chosen = await this.page.$('#choice')
        const text = await this.page.evaluate(chosen => chosen.textContent, chosen)
        expect(text).to.be.eq(outcome)
    }
    
    game(human,ai){
        if(human === ai){
            return 'The game is a tie'
        } else if(human === 'Rock' && ai === 'Scissor'){
            return 'You have won'
        } else if(human === 'Scissor' && ai === 'Paper'){
            return  'You have won'
        } else if(human === 'Paper' && ai === 'Rock'){
            return 'You have won'
        } else {
            return 'You have lost'
        }
    }

    async aiChosen(ai,rock,paper,scissor){
        const possibilites = [rock, paper, scissor]
        const inputSelector = `#${ai}`
        let chosen = await this.page.$(inputSelector.toLowerCase())
        let text = await this.page.evaluate(chosen => chosen.textContent, chosen)
        expect(possibilites).to.include(text)
    }

    async theResult(choice){
        const inputSelector = `#${choice}`
        await this.page.click(inputSelector.toLocaleLowerCase())
        const humanChoice = await this.page.$('#choice')
        const aiChoice = await this.page.$('#ai')
        const results = await this.page.$('#result')
        const actualResults = await this.page.evaluate(results => results.textContent, results)
        const human = await this.page.evaluate(humanChoice => humanChoice.textContent, humanChoice)
        const ai = await this.page.evaluate(aiChoice => aiChoice.textContent, aiChoice)
        const expectedResults = this.game(human, ai) 

        expect(expectedResults).to.be.eq(actualResults)
    }

}

setWorldConstructor(RPSWorld)