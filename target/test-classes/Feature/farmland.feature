@login_cp02
Feature: Check farmland function
  Scenario:Login
    Given : login

  Scenario:Open the field information page
    Given : open a information page

    Scenario Outline: Check farmland information
      Given : Enter the field name "<name>"
      When : Selected field type "<type>"
      And :Click the query button
      Then :Check whether the query matches "<result>"
      Examples:
        | name | type | result |
        | 18-3 |      | 18-3   |
        | 18-2 | 水田   | 18-2   |

  Scenario: Open view page
    Given Check View button
    Then Closing details

  Scenario: out login
    Given loginout
