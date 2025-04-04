Feature: Login

Scenario: As standard user I want to access to the web sucessfuly
Given Load Swag Labs web
When enter user <user> and password <password>
And  click on login button
Then the system validate the user can see the product list
Examples: 
| user            | password     |
| standard_user   | secret_sauce |

Scenario: As locked out user I want to the system denied the access to the login in the web.
Given Load Swag Labs web
When enter user <user> and password <password>
And  click on login button
Then the system validate the user can not access, <messageValidation>
Examples: 
| user            | password     | messageValidation                                   |
| locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out. |



