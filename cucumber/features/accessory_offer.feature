Feature: Accessory is offered at checkout
  As the marketing director,
  I want customers to be offered useful accessories,
  So that I can sell more products with the initial purchase

  Scenario: Residential PermaLawn orders under 1/2 acre are offered starter maintenance kit
#    Given the following upsell offerings:
#      | From Acreage | To Acreage | Property type | offering                |
#      | 0.00         | 0.50       | residential   | Starter Maintenance Kit |
#      | 0.50         | 99.0       | residential   | Deluxe Maintenance Kit  |
    When the customer checks out with:
      | Acreage | Property type | Product               |
      | 0.49    | residential   | PermaLawn Starter Kit |
    Then "Starter Maintenance Kit" is offered
    And "Deluxe Maintenance Kit" is not offered