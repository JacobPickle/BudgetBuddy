# frozen_string_literal: true

class Store < ApplicationRecord
  belongs_to :store_type, required: false
  validates :name, presence: true
end
