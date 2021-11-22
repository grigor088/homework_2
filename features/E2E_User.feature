#Feature: Test End to End user
#
#  Scenario Outline: Validate End to End Get Single User
#    Given I am on the page <pageUrl>
#    When I perform <endPoint> user search
#    And I make GET <endPoint> api call
#    Then I validate the search result
#
#    Examples:
#      | pageUrl                   | endPoint    |
#      | https://resttesttest.com/ | /api/user/2 |