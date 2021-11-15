Feature: The Cypress io  Website
  Scenario Outline:
    Given I should navigate to <page> page
    And Text of pageHeader of <page> should be <text>
    Examples:
        | page      |  text                                             |
        | features  |  A test runner built for humans.                  |
        | dashboard |  Test and debug faster with the Cypress Dashboard |
        | pricing   |  Cypress Dashboard Pricing                        |


  Scenario Outline:
    Then I should scroll into email search view
    Then I input invalid "<mail>"
    And I will check <text> which depends on error message when i click in subscribe button with invalid email
    Examples:
      | mail             | text                                 |
      | assss            | Email must be formatted correctly.   |
      |                  | Please complete this required field. |

  Scenario Outline:
      Given I should input valid <email>
      Then I should check subscribing <text>
      Examples:
      |   email          |  text                                |
      | grigor@email.com | Thanks for submitting the form.      |
      | newuser@mail.ru  | Thanks for submitting the form.      |

    Scenario Outline:
      Given I click in <elem> element
      Then I will check visibility of <element> which contain message <message>
      Examples:
      | elem          | element        | message              |
      | cypressButton | cypressElement | Copied to clipboard! |

