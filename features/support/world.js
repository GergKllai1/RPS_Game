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
        let result = await this.page.$('#result')
        let text = await this.page.evaluate(result => result.textContent, result)
        expect(text).to.be.a('string')
    }

}

setWorldConstructor(RPSWorld)