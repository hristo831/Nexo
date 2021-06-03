Feature: Books page tests

    Background:
        Given Navigate to books page

    Scenario Outline: Search for an existing book
        When Search <bookName>
        Then Book should be found

        Examples:
            | bookName            |
            | Speaking JavaScript |