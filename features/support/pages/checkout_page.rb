class CheckoutPage
  include PageObject

  page_url('file:/Users/Randy/code/refactoring/up-sell/app/checkout.html')

  button(:checkout, id: 'checkout')


end