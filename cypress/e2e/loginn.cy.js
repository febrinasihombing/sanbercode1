import LoginPage from "../support/pageObjects/loginpage.JS"

const loginPage = new LoginPage()

describe('Login Test with POM', () => {
  it('Should login successfully', () => {
    loginPage.visit()
    loginPage.fillUsername('Admin')
    loginPage.fillPassword('admin123')
    loginPage.clickLogin()
    loginPage.assertLoginSuccess()
  })
})
