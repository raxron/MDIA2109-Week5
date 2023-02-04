import {test, devices, expect} from '@playwright/test';

test.use({
    browserName:'chromium',
    ...devices['iPhone XR'],
})

test.describe("Testing for home mobile", ()=>{

    test("Testing for colors on mobile", async({page})=>{

        await page.goto(`http://localhost:3000`)
        const mainContainer = page.locator(`#colouring`);
        const checkingBackgroundColor = await mainContainer.evaluate((ele)=>{
            return window.getComputedStyle(ele).getPropertyValue("background-color")
        }
        )
        
        console.log(checkingBackgroundColor);
        expect(checkingBackgroundColor).toBe("rgb(255, 0, 0)");
    }
    
    )
})