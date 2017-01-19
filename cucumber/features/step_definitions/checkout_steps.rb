When(/^the customer checks out with:$/) do |lawn_criteria|
  order = lawn_criteria.symbolic_hashes
  visit(ProductSelectionPage) do |page|
    page.acreage = order[:acreage]
    page.property_type = order[:property_type]
    page.product = order[:product]
    page.checkout
  end
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
