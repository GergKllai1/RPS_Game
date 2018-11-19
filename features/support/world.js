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
        await this.page.click(`#${selection}`)
        let chosen = await this.page.$('#choice')
        const text = await this.page.evaluate(chosen => chosen.textContent, chosen)
        expect(text).to.be.eq(outcome)
    }     
}

setWorldConstructor(RPSWorld)