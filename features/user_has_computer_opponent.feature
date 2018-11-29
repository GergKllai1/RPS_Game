Feature: User has a computer oponent

    As a user
    In order to play the game 
    I should see the results when playing

    Background: User visits the site
        Given I visit the site

    Scenario: When user chooses, the computer should choose
        When I click 'Rock'
        Then I should see the results