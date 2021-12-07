Feature: The Cypress io  Website

  Scenario Outline: Check page header text
    Given I should navigate to <page> page
    And Text of pageHeader of <page> should be <text>
    Examples:
      | page      | text                                             |
      | features  | A test runner built for humans.                  |
      | dashboard | Test and debug faster with the Cypress Dashboard |
      | pricing   | Cypress Dashboard Pricing                        |

  Scenario Outline: Check error message text for invalid email
    Given I should navigate to <page> page
    Then I should scroll into inputEmail view
    Then I input invalid email "<mail>"
    Then I will click on <subscribeForm> element
    And I will check <text> which depends on error message when i click in subscribe button with invalid email
    Examples:
      | mail  | text                                 |
      | assss | Email must be formatted correctly.   |
      |       | Please complete this required field. |

  Scenario Outline: Chek subscribe text vor valid email
    Given I should navigate to page page
    Given I should scroll into inputEmail view
    Then I should input valid email <email>
    Then I will click on <subscribeForm> element
    And I should check subscribing <text>
    Examples:
      | email            | text                            |
      | grigor@email.com | Thanks for submitting the form. |
      | newuser@mail.ru  | Thanks for submitting the form. |

  Scenario Outline: check element visibility
    Given I click in <elem> element
    Then I will check visibility of <element> which contain message <message>
    Examples:
      | elem          | element        | message              |
      | cypressButton | cypressElement | Copied to clipboard! |

