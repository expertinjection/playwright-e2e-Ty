import {test, expect} from '@playwright/test'

test.describe('Project01 Playwright', () =>{
    test.beforeEach(async({page}) => {
        await page.goto('https://techglobal-training.com/frontend/todo-list')
    })
    test('Test Case 01 - Todo-App Modal Verification', async({page}) => {
        const modelPanel = page.locator('.panel') 
        await expect(modelPanel).toBeVisible()
        const panelHeading = page.locator('.panel-heading')
        await expect(panelHeading).toHaveText('My Tasks')
        const toDoInputField = page.locator('#input-add')
        await expect(toDoInputField).toBeEnabled()
        const addButton = page.getByRole('button', { name: 'Add' })
        await expect(addButton).toBeEnabled()
        const searchField = page.locator('#search')
        await expect(searchField).toBeEnabled()
        const taskList = page.locator('.todo-item')
        await expect(taskList).toHaveText('No tasks found!')
    })
    test('Test Case 02 - Single Task Addition and Removal', async({page}) => {
        page.locator('#input-add').fill('Do Js Homework15')
        page.getByRole('button', { name: 'Add' }).click()
        await expect( page.locator('.todo-item')).toContainText('Do Js Homework15')
        const toDoItmeCount = await page.locator('#panel>div').count()
        expect(toDoItmeCount).toBe(1)
        await page.getByText('Do Js Homework15').click()
        const removeCompletedTaskButton = page.getByRole('button', { name: 'Remove completed tasks!'})
        await expect(removeCompletedTaskButton).toBeEnabled()
        await removeCompletedTaskButton.click()
        await expect(page.locator('.todo-item')).toHaveText('No tasks found!')
    })
    test('Test Case 03 - Multiple Task Operations', async({page}) => {
        const toDoTasks = [ 'Do Js Homework15', ' complete Playwright01', 'Attend the class', 'eat dinner', 'go to the gym' ]
        for(let i = 0; i < toDoTasks.length; i++){
            await page.locator('#input-add').fill(toDoTasks[i])
            await page.getByRole('button', {name: 'Add'}).click()
        }
        const toDoList = page.locator('#panel>div')
        await expect(toDoList).toHaveCount(toDoTasks.length)
        for(let i = 0; i < toDoTasks.length; i++){
            await expect(toDoList).toHaveText(toDoTasks)
        }
        const clickonItems = page.locator('[data-icon =circle-check]')
        const tasksNumber = await clickonItems.count()
        for(let i = 0; i < tasksNumber; i++) {
            await clickonItems.nth(i).click()
        }
        const removeCompletedTaskButton = page.getByRole('button', { name: 'Remove completed tasks!'})
        await expect(removeCompletedTaskButton).toBeEnabled()
        await removeCompletedTaskButton.click()
        await expect(page.locator('.todo-item')).toHaveText('No tasks found!')
    })
    test('Test Case 04 - Search and Filter Functionality in todo App', async({page}) => {
        const toDoTasks = [ 'Do Js Homework15', 'complete Playwright01', 'Attend the class', 'eat dinner', 'go to the gym' ]
        for(let i = 0; i < toDoTasks.length; i++){
            await page.locator('#input-add').fill(toDoTasks[i])
            await page.getByRole('button', {name: 'Add'}).click()
        }
        const toDoList = page.locator('#panel>div')
        await expect(toDoList).toHaveCount(toDoTasks.length)
        for(let i = 0; i < toDoTasks.length; i++){
            await expect(toDoList).toHaveText(toDoTasks)
        }
        await page.locator('#search').fill('complete Playwright01')
        await expect(toDoList).toHaveCount(1)
    })
    test('Test Case 05 - Task Validation and Error Handling', async({page}) => {
        page.locator('#input-add').fill('')
        await page.getByRole('button', { name: 'Add' }).click()
        await expect(page.locator('.todo-item')).toHaveText('No tasks found!')
        page.locator('#input-add').fill('asnfiujoiuyhfgeyiaoidcuyahyeqtrc')
        await page.getByRole('button', { name: 'Add' }).click()
        const errorMsg = page.locator('.notification')
        await expect(errorMsg).toHaveText('Error: Todo cannot be more than 30 characters!')
        page.locator('#input-add').fill('haitham')
        await page.getByRole('button', { name: 'Add' }).click()
        const taskcount = await page.locator('#panel>div').count()
        expect(taskcount).toBe(1)
        page.locator('#input-add').fill('haitham')
        await page.getByRole('button', { name: 'Add' }).click()
        await expect(errorMsg).toContainText('Error: You already have haitham in your todo list.')

    })
})


