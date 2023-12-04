module Api
  module V1
    class SettingsController < ApplicationController
      def weeks
        settings = Setting.weeks
        render json: settings
      end
      def budget
        settings = Setting.budget
        render json: settings
      end

      def create
        Setting.weeks = params[:weeks]
        Setting.budget = params[:budget]
      end
    end
  end
end