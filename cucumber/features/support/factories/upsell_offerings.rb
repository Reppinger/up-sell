require 'active_record'

class UpsellOfferings < ActiveRecord::Base
end

FactoryGirl.define do
  factory :upsell_offerings do
    from_acreage 0.0
    to_acreage 0.0
    property_type  "residential"
    offering "Yard Gnome"
  end
end