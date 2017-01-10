Given(/^the following shopping cart:$/) do |cart_info|
  cart_info.symbolic_hashes.each do |info|
    create(:info)
  end
end

When(/^the customer checks out$/) do
  visit(ShoppingCartPage).checkout
end

Then(/^"([^"]*)" is offered$/) do |expected_offering|
  on(CheckoutPage) do |page|
    expect(on(CheckoutPage)).to have_radio_button expected_offering
  end
end

Then(/^"([^"]*)" is not offered$/) do |offering_not_expected|
  on(CheckoutPage) do |page|
    expect(page).to_not have_radio_button offering_not_expected
  end
end