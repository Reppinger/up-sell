Given(/^the following cart:$/) do |cart_info|
  cart_info.symbolic_hashes.each do |info|
    create(:info)
  end
end

When(/^the customer checks out$/) do
  visit(CheckoutPage).checkout
end