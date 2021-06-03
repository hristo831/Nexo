Feature: Login page tests

    Scenario: Login
        Given Create user through API
        When Navigate to login page
        And Fill in UserName and Password
        And Click Login button
        Then The user successfully login