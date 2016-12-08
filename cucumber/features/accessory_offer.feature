Feature: Accessory is offered at checkout
  As the marketing director,
  I want customers to be offered useful accessories,
  So that I can sell more products with the initial purchase

  Scenario: Residential PermaLawn orders under 1/2 acre are offered starter maintenance kit
    Given the following cart:
      |Lawn acreage|Property type|Product   |
      |0.49        |residential  |PermaLawn |
    When the customer checks out
    Then a starter maintenance kit is offered