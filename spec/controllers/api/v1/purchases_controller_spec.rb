# frozen_string_literal: true

require 'rails_helper'

describe Api::V1::PurchasesController do
  describe 'POST create' do
    before(:each) do
      store = create :store, name: 'Hyvee'
      post :create, params: { purchase_date: Date.current, total: 5.99, store_id: store.id }
    end

    it 'returns a success response' do
      expect(response).to have_http_status(:success)
    end

    it 'assigns the correct total' do
      purchase = response.parsed_body
      expect(purchase['total']).to eq 5.99
    end

    it 'assigns the correct date' do
      purchase = response.parsed_body
      expect(Date.parse(purchase['purchase_date'])).to eq Date.current
    end
  end

  describe 'GET purchase' do
    subject(:purchase) do
      store = create :store, name: 'Hyvee'
      create :purchase, purchase_date: Date.current, total: 5.99, store_id: store.id
    end

    before(:each) do
      get :show, params: { id: purchase.id }
    end

    it 'returns a success response' do
      expect(response).to have_http_status(:success)
    end

    it 'returns the correct total' do
      response_purchase = response.parsed_body
      expect(response_purchase['total']).to eq purchase.total
    end

    it 'returns the correct date' do
      response_purchase = response.parsed_body
      expect(Date.parse(response_purchase['purchase_date'])).to eq Date.current
    end
  end

  describe 'GET index' do
    before(:each) do
      store1 = create :store, name: 'Hyvee'
      store2 = create :store, name: 'Aldi'
      create :purchase, purchase_date: Date.current, total: 2.57, store_id: store1.id
      create :purchase, purchase_date: Date.current, total: 1.99, store_id: store2.id
    end

    it 'returns a success response' do
      get :index
      expect(response).to have_http_status(:success)
    end

    it 'returns the correct number of purchases' do
      get :index
      response_purchases = response.parsed_body
      expect(response_purchases.size).to eq 2
    end
  end

  describe 'DELETE destroy' do
    subject(:purchase) do
      store = create :store, name: 'Hyvee'
      create :purchase, purchase_date: Date.current, total: 5.99, store_id: store.id
    end

    before(:each) do
      delete :destroy, params: { id: purchase.id }
    end

    it 'returns a success response' do
      expect(response).to have_http_status(:success)
    end

    it 'deletes store' do
      expect(Purchase.exists?(purchase.id)).to be false
    end
  end
end
