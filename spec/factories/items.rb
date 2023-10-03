# frozen_string_literal: true

FactoryBot.define do
  factory :item do
    name { 'MyString' }
    price { 1.5 }
    purchase { nil }
  end
end
