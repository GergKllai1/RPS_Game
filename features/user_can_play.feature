Feature: User can play and see the results

    As a user
    In order to play the game 
    I should be able to choose and then see the results

    Background: User visits the site
        Given I visit the site

    Scenario: When user chooses, the computer should choose and user should see the results
        When I click 'rock'
        Then I should see the results
        And the score increases