Given(/^the following upsell offerings:$/) do |upsell_offerings|
  upsell_offerings.symbolic_hashes.each do |offering|
    create(:offering, offering)
  end
end