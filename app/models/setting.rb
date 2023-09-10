# RailsSettings Model
# https://github.com/huacnlee/rails-settings-cached
class Setting < RailsSettings::Base
  field :weeks, type: :integer, default: 2
end
