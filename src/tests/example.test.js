import { step } from 'mocha-steps'
import puppeteer from 'puppeteer'

describe('Mocha steps demo', () => {
	let browser
	let page

	before(async () => {
		browser = await puppeteer.launch({ headless: true })
		page = await browser.newPage()
		await (await page).setDefaultTimeout(7000)
	})

	after(async () => {
		await browser.close()
	})

	step('should load google homepage', async () => {
		await page.goto('https://google.com')
	})

	step('Step 2', async () => {
		await page.waitForSelector('#FAIL')
	})

	step('Step 3', async () => {
		console.log('From Step 3')
	})
	step('Step 4', async () => {
		console.log('From Step 4')
	})
})
