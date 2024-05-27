Feature: Messaging in Chat server 

  @chat
  Scenario Outline: Two users are messaging
    When User1 opens chat window
    Then Chat window is visible
    When User1 connects to the server
    And User1 enters <nickname1>
    And User1 connects
    When User1 sends a message <message1> 
    Then <message1> from User1 is visible
    When User1 opens another browser tab
    Then User2 connects to the server
    When User2 enters <nickname2>
    And User2 connects
    And User2 replies with a message <message2> 
    When User2 goes back to the first browser tab
    Then <message2> from User2 is visible
    When User1 disconnects
    Then User1 is not in the list 

  
    Examples:
    | nickname1  | nickname2 | message1                    | message2                               |
    | User0001   | User0002  | Hello, that is my message1! | Hello you! That is my message2 as well! |


    
