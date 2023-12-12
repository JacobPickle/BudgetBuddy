# frozen_string_literal: true

class Store < ApplicationRecord
  belongs_to :store_type
  validates :name, presence: true
end
