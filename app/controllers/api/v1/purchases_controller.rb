class Api::V1::PurchasesController < ApplicationController
  before_action :set_purchase, only: %i[show destroy]

  def index
    purchases = Purchase.all.order(created_at: :desc)
    render json: purchases
  end

  def create
    store = Store.find(purchase_params[:store_id])
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
