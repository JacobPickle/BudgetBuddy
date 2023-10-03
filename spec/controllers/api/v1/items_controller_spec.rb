# frozen_string_literal: true

require 'rails_helper'

describe Api::V1::ItemsController do
  describe 'POST create' do
    before(:each) do
      store = Store.create({ name: 'Hyvee' })
      purchase = Purchase.create({ purchase_date: Date.current, total: 5.99, store_id: store.id })
      post :create, params: { name: 'hotdogs', price: 1.99, purchase_id: purchase.id }
    end

    it 'returns a success response' do
      expect(response).to have_http_status(:success)
    end

    it 'assigns the correct price' do
      item = response.parsed_body
      expect(item['price']).to eq 1.99
    end

    it 'assigns the correct name' do
      item = response.parsed_body
      expect(item['name']).to eq 'hotdogs'
    end
  end

  describe 'GET item' do
    subject(:item) do
      store = Store.create({ name: 'Hyvee' })
      purchase = Purchase.create({ purchase_date: Date.current, total: 5.99, store_id: store.id })
      Item.create({ name: 'hotdogs', price: 1.99, purchase_id: purchase.id })
    end

    before(:each) do
      get :show, params: { id: item.id }
    end

    it 'returns a success response' do
      expect(response).to have_http_status(:success)
    end

    it 'returns the correct price' do
      response_item = response.parsed_body
      expect(response_item['price']).to eq item.price
    end

    it 'returns the correct name' do
      response_item = response.parsed_body
      expect(response_item['name']).to eq 'hotdogs'
    end
  end

  describe 'GET item by purchase id' do
    subject(:item) do
      store = Store.create({ name: 'Hyvee' })
      purchase = Purchase.create({ purchase_date: Date.current, total: 5.99, store_id: store.id })
      Item.create({ name: 'hotdogs', price: 1.99, purchase_id: purchase.id })
    end

    before(:each) do
      get :show_by_purchase_id, params: { purchase_id: item.purchase_id }
    end

    it 'returns a success response' do
      expect(response).to have_http_status(:success)
    end

    it 'returns the correct price' do
      response_item = response.parsed_body
      expect(response_item[0]['price']).to eq item.price
    end

    it 'returns the correct name' do
      response_item = response.parsed_body
      expect(response_item[0]['name']).to eq 'hotdogs'
    end
  end

  describe 'GET index' do
    before(:each) do
      store1 = Store.create({ name: 'Hyvee' })
      store2 = Store.create({ name: 'Aldi' })
      purchase1 = Purchase.create({ purchase_date: Date.current, total: 5.99, store_id: store1.id })
      purchase2 = Purchase.create({ purchase_date: Date.current, total: 3.29, store_id: store2.id })
      Item.create({ name: 'hotdogs', price: 1.99, purchase_id: purchase1.id })
      Item.create({ name: 'buns', price: 2.75, purchase_id: purchase2.id })
    end

    it 'returns a success response' do
      get :index
      expect(response).to have_http_status(:success)
    end

    it 'returns the correct number of items' do
      get :index
      response_purchases = response.parsed_body
      expect(response_purchases.size).to eq 2
    end
  end

  describe 'DELETE destroy' do
    subject(:item) do
      store = Store.create({ name: 'Hyvee' })
      purchase = Purchase.create({ purchase_date: Date.current, total: 5.99, store_id: store.id })
      Item.create({ name: 'hotdogs', price: 1.99, purchase_id: purchase.id })
    end

    before(:each) do
      delete :destroy, params: { id: item.id }
    end

    it 'returns a success response' do
      expect(response).to have_http_status(:success)
    end

    it 'deletes store' do
      expect(Item.exists?(item.id)).to be false
    end
  end
end
