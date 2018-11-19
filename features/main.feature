Feature: Play Rock-paper-scissor against an AI

   As a user
   In order to play the rps game
   I should be able to choose from the 3 choices

   Scenario: Choose rps
   Given I visit the site
   Then I should see "Rock"
   And I should see "Paper"
   And I should see "Scissor"
   When I click "rock" I should see under choice "Rock"