class CheckoutPage
  include PageObject

  def has_radio_button?(expected_label)
    self.label_elements.find {|label| label.text == expected_label}
  end

end