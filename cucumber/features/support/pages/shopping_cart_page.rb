class ShoppingCartPage
  include PageObject

  page_url("file:#{Dir.pwd}/../app/shopping-cart.html")

  button(:checkout, id: 'checkout')

end