Given(/^the following shopping cart:$/) do |cart_info|
  cart_info.symbolic_hashes.each do |info|
    create(:info)
  end
end

When(/^the customer checks out$/) do
  visit(ShoppingCartPage).checkout
end

Then(/^a starter maintenance kit is offered$/) do
  on(CheckoutPage) do |page|
    expect(page.text).to include 'Starter Maintenance Kit'
  end
end

And(/^a deluxe maintenance kit is not offered$/) do
  on(CheckoutPage) do |page|
    expect(page.text).to_not include 'Deluxe Maintenance Kit'
  end
end