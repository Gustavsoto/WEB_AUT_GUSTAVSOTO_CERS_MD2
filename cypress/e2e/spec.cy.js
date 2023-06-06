import appointmentPage from "../pageObjects/appointmentPage";
import homePage from "../pageObjects/homePage";
import loginPage from "../pageObjects/loginPage";
import summaryPage from "../pageObjects/summaryPage";
import historyPage from "../pageObjects/historyPage";

describe('template spec', () => {
  context('Make an Appointment', () => {
    beforeEach(() => {
      //Open https://katalon-demo-cura.herokuapp.com/
      homePage.visit();
    })
    it('Make an Appointment', () => {
      //Click - Make Appointment
      homePage.makeAppointmentButton.click();
      //Set username and password fields with the demo account credentials
      loginPage.userNameInput.type("John Doe");
      loginPage.passwordInput.type("ThisIsNotAPassword");
      //Click - Login
      loginPage.loginButton.click();
      //Set Facility - Seoul CURA Healthcare Center
      appointmentPage.facilityDropdownMenu.select("Seoul CURA Healthcare Center");
      //Check - Apply for hospital readmission
      appointmentPage.checkBox.click();
      //Select - Medicaid
      appointmentPage.healthcareProgram.click();
      //Set Date value by using the widget - 30
      appointmentPage.visitDateInput.click();
      appointmentPage.calendarDay.contains("30").click();
      //Set comment - CURA Healthcare Service
      appointmentPage.commentBox.click('topRight').type("CURA Healthcare Service");
      //Click - Book Appointment
      appointmentPage.bookAppointmentButton.click();
      //Validate values
      summaryPage.facility.should('have.text', 'Seoul CURA Healthcare Center');
      summaryPage.readmission.should('have.text', 'Yes');
      summaryPage.program.should('have.text', 'Medicaid');
      summaryPage.date.should('have.text', '30/05/2023');
      summaryPage.comment.should('have.text', 'CURA Healthcare Service');
    });
    it('Appointment history empty', () => {
      //Click - Make Appointment
      homePage.makeAppointmentButton.click();
      //Set username and password fields with the demo account credentials
      loginPage.userNameInput.type("John Doe");
      loginPage.passwordInput.type("ThisIsNotAPassword");
      //Click - Login
      loginPage.loginButton.click();
      //Click - Menu/Stack/Burger icon
      appointmentPage.menuIcon.click();
      //Validate that the sidebar is active
      appointmentPage.wraper.should('have.class', 'active');
      //Click - History
      appointmentPage.historyLink.click();
      //Validate that - No appointment - is visible
      historyPage.paragraph.should('have.text', 'No appointment.');
    })
  });
});