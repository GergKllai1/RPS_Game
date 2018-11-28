Feature: User can choose

   As a user
   In order to play the game
   I should be able to choose from 3 choices

   Background: User visits the site
      Given I visit the site

   Scenario: User can choose from Rock, Paper and Scissors
      When I click "rock" I should see under choice "rock"
      When I click "paper" I should see under choice "paper"
      When I click "scissors" I should see under choice "scissors"
      When I click "Rock" I should see the results
      And "ai" should be either "Rock" "Paper" or "Scissor"