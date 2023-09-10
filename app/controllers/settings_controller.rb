class SettingsController < ApplicationController
  def index
  end

  def create
    setting_params.keys.each do |key|
      next if setting_params[key].nil?

      setting = Setting.new(var: key)
      setting.value = setting_params[key].strip
    end

    setting_params.keys.each do |key|
      Setting.send("#{key}=", setting_params[key].strip) unless setting_params[key].nil?
    end

    redirect_to root_path
  end

  private
    def setting_params
      params.require(:setting).permit(:weeks)
    end
end