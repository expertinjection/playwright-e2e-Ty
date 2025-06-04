import {test, expect} from '@playwright/test'
test.describe('Download & Upload ', () => {
    test.beforeEach(async({page})=>{
        await page.goto('https://www.techglobal-training.com/frontend/file-download')
    })
    test('Download File', async({page}) => {
   
        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.click('#file_download')
        ])
    
        const path = 'downloads/' + download.suggestedFilename()
    
        await download.saveAs(path)
    })
    
    test('Upload File', async({page}) => {
        const uploadLink = page.locator('#file_upload')
    
        await uploadLink.setInputFiles('downloads/SampleText.txt')
        // const resulatLocater = page.locator('.notification')
        // await expect( resulatLocater).toContainText('You uploaded SampleText.txt')
    })
})
