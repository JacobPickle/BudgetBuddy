# frozen_string_literal: true

class Purchase < ApplicationRecord
  belongs_to :store
  validates :purchase_date, presence: true
  validates :total, presence: true
end
