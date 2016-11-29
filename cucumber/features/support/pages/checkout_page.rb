class CheckoutPage
  include PageObject

  page_url("file:#{Dir.pwd}/../app/checkout.html")

  button(:checkout, id: 'checkout')


end