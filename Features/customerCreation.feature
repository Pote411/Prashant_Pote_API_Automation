Feature: This File contains customer creation scenarios

  Background:
    Given User is on the home page
    When User navigates to the "Add Customer" page

  Scenario: Add a new customer with valid details
    When User enters customer details with first name "John", last name "Doe", email "