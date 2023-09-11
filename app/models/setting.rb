# RailsSettings Model
# https://github.com/huacnlee/rails-settings-cached
class Setting < RailsSettings::Base
  field :weeks, type: :integer, default: 2
  field :weekly_budget, type: :integer, default: 150
end
