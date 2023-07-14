Feature: WebInteraction

    # @demo1
    # Scenario Outline: Orange HRM Applications
    # Given I open orange HRM 
    # When I enter correct credentials
    # Then I see orange HRM web application opened

    # @demo2
    # Scenario: The Internet Herokuapp
    # Given I launch the Internet Herokuapp
    # When I enter number in the input field
    # Then I clear the input field and type slowly

    # @demo3
    # Scenario: The Internet Herokuapp - Dropdown
    # Given I launch the Internet Herokuapp
    # When I select the dropdown option
    # Then I see selected dropdown present in the dropdown section

    @demo4
    Scenario: The Internet Herokuapp - Checkbox
    Given I launch the Internet Herokuapp
    When I select the Checkbox option
    # Then I see selected Checkbox is checked 



   