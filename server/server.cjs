const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://instagram.com/falcoes_negro')

   const imgList = await page.evaluate(() => {
        const nodeList = document.querySelectorAll('article img')
        const imgArray = [...nodeList]

        const imgList = imgArray.map( ({src}) => ({
            src
        }))

        return imgList
    })

    fs.writeFile('instagram.json', JSON.stringify(imgList, null, 2), err => {
        if(err) throw new Error('Algo deu errado')

        console.log('Foi!!!')
    })

    await browser.close();
})()