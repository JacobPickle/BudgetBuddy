class Api::V1::ItemsController < ApplicationController
  before_action :set_item, only: %i[show destroy]
  def index
    items = Item.all.order(created_at: :desc)
    render json: items
  end

  def create
    item = Item.create!(item_params)
    if item
      render json: item
    else
      render json: item.errors
    end
  end

  def show
    render json: @item
  end

  def destroy
    @item&.destroy
  end

  private

  def item_params
    params.permit(:name, :price)
  end

  def set_item
    @item = Item.find(params[:id])
  end
end
