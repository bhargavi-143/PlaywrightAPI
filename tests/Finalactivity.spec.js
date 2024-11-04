const{ test, expect} = require('@playwright/test');
const { request } = require('http');
var Base_URL = "https://petstore.swagger.io/v2"

test("POST - Create a pet", async({ request }) =>{

    const response = await request.post(`${Base_URL}/pet`,{
        data : {
            "id": 0,
            "category": {
                "id": 12,
                "name": "Human"
            },
            "name": "bhargavi",
            "photoUrls": [
                "None"
            ],
            "tags": [
                {
                "id": 24,
                "name": "Gentle"
                }
            ],
            "status": "available"
        },
    })
    test.step('Verify the response status code is 200', async () =>{
        expect (response.status()).toBe(200)

    })
    test.step('Verify the response body attribute values are appropriate', async () =>{
        const responsebody = JSON.parse(await response.text())
        console.log(responsebody)
        expect(responsebody.id).toBeTruthy()
        expect(responsebody.category.id).toBe(12)
        expect(responsebody.category.name).toBe('Human')
        expect(responsebody.name).toBe('bhargavi')
        console.log(responsebody.category.name)
        console.log(responsebody.name)
    })
})

test.only("GET - get Pet inventories by status", async({ request }) =>{

    const response = await request.get(`${Base_URL}/store/inventory`) 
    test.step('Verify the response status code is 200', async () =>{
    expect (response.status()).toBe(200)
    })
    // console.log(responsebody.name)
    test.step('Verify the response body attribute values are appropriate', async () =>{
    const responsebody = JSON.parse(await response.text())
    console.log(responsebody)
    expect(responsebody.sold).toBeGreaterThan(10)
    expect(responsebody.teststa5).toBeGreaterThan(300)
    expect(responsebody.string).toBeGreaterThan(300)
    expect(responsebody.pending).toBeGreaterThanOrEqual(1)
    expect(responsebody.available).toBeGreaterThan(100)
    expect(responsebody.Y70tBSQxVq).toBeGreaterThanOrEqual(1)
    })



    




})

