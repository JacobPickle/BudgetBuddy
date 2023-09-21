class Api::V1::StoresController < ApplicationController
  before_action :set_store, only: %i[show destroy]

  def index
    stores = Store.all.order(created_at: :desc)
    render json: stores
  end

  def create
    store = Store.create!(store_params)
    if store
      render json: store
    else
      render json: store.errors
    end
  end

  def show
    render json: @store
  end

  def destroy
    @store&.destroy
  end

  private

  def store_params
    params.permit(:name)
  end

  def set_store
    @store = Store.find(params[:id])
  end
end
