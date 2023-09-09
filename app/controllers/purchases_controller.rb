class PurchasesController < ApplicationController

    def index
      @purchases = Purchase.all
    end
    
    def show
      @purchase = Purchase.find(params[:id])
    end
    
    def new
      @purchase = Purchase.new
    end
    
    def edit
      @purchase = Purchase.find(params[:id])
    end
    
    def update
      @purchase = Purchase.find(params[:id])
   
      if @purchase.update(purchase_params)
        redirect_to @purchase
      else
        render :edit, status: :unprocessable_entity
      end
    end
    
    def destroy
      @purchase = Purchase.find(params[:id])
      @purchase.destroy
  
      redirect_to root_path, status: :see_other
    end
          
    def create
        @store = Store.find(params[:store_id])
        @purchase = @store.purchases.create(purchase_params)
        redirect_to purchase_path(@purchase)
    end
    
private
    def purchase_params
        params.require(:purchase).permit(:purchase_date, :total)
    end
end
    
  
