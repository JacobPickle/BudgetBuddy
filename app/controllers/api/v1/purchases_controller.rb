# frozen_string_literal: true

module Api
  module V1
    class PurchasesController < ApplicationController
      before_action :set_purchase, only: %i[show destroy]

      def index
        purchases = Purchase.all.order(created_at: :desc)
        render json: purchases
      end

      def recent
        purchases = Purchase.where(:purchase_date => (Setting.weeks).week.ago..DateTime.now).order(created_at: :desc)
        render json: purchases
      end

      def recent_total
        purchase_total = Purchase.where(:purchase_date => (Setting.weeks).week.ago..DateTime.now).sum(:total)
        render json: purchase_total
      end

      def create
        purchase = Purchase.create!(purchase_params)
        if purchase
          render json: purchase
        else
          render json: purchase.errors
        end
      end

      def show
        render json: @purchase
      end

      def destroy
        @purchase&.destroy
      end

      private

      def purchase_params
        params.permit(:purchase_date, :total, :store_id)
      end

      def set_purchase
        @purchase = Purchase.find(params[:id])
      end
    end
  end
end
