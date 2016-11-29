require 'active_record'

class Info < ActiveRecord::Base
end

FactoryGirl.define do
  factory :info do
    lawn_acreage 1.0
    property_type  "residential"
    product "EasyGreen"
  end
end