import {test, expect} from '@playwright/test'

test('Upload File', async({page}) => {
    await page.goto('https://www.techglobal-training.com/frontend/file-download')
    const uploadLink = page.locator('#file_upload')

    await uploadLink.setInputFiles('downloads/SampleText.txt')
    // const resulatLocater = page.locator('.notification')
    // await expect( resulatLocater).toContainText('You uploaded SampleText.txt')
})