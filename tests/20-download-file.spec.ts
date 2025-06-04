import {test, expect} from '@playwright/test'

test('Download File', async({page}) => {
    await page.goto('https://www.techglobal-training.com/frontend/file-download')

    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.click('#file_download')
    ])

    const path = 'downloads/' + download.suggestedFilename()

    await download.saveAs(path)
})