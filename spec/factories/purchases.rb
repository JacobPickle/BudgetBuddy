# frozen_string_literal: true

FactoryBot.define do
  factory :purchase do
    purchase_date { '2023-10-03' }
    total { 1.5 }
    store { nil }
  end
end
