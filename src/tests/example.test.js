import { step } from 'mocha-steps'

import Page from '../builder'

describe('Mocha steps demo', () => {
	let page

	before(async () => {
		page = await Page.build('Desktop')
	})

	after(async () => {
		await page.close()
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
