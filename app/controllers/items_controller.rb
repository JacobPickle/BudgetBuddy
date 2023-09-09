class ItemsController < ApplicationController
  def index
    @items = Item.all
  end

  def show
    @item = Item.find(params[:id])
  end

  def new
    @item = Item.new
  end

  def create
    @purchase = Purchase.find(params[:purchase_id])
    @item = @purchase.items.create(items_params)

    redirect_to purchase_path(@purchase)
  end

  def edit
    @item = Item.find(params[:id])
  end

  def update
    @item = Item.find(params[:id])

    if @item.update(items_params)
      redirect_to @item
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy

    redirect_to root_path, status: :see_other
  end

  private
  def items_params
    params.require(:item).permit(:name, :price)
  end
end
