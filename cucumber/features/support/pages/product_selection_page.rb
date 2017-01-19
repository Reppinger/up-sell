class ProductSelectionPage
  include PageObject

  page_url("file:#{Dir.pwd}/../app/product-selection.html")

  # acreage
  # property_type
  # product

  button(:checkout, id: 'checkout')

end