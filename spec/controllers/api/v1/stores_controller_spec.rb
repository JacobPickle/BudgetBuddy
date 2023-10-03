require 'rails_helper'

describe Api::V1::StoresController do
    describe 'POST create' do
        before(:each) do
            post :create, params: {name: "Aldi"}
        end

        it 'returns a success response' do
            expect(response).to have_http_status(:success)
        end

        it 'assigns the correct name' do
            store = response.parsed_body
            expect(store['name']).to eq "Aldi"
        end
    end

    describe 'GET store' do
        subject(:store) { Store.create({name:"Hyvee"}) }

        it 'returns a success response' do
            get :show, params: {id: store.id}
            expect(response).to have_http_status(:success)
        end

        it 'returns the correct name' do
            get :show, params: {id: store.id}
            response_store = response.parsed_body
            expect(response_store['name']).to eq store.name
        end
    end

    describe 'GET index' do
        before(:each) do
            Store.create({name:"Hyvee"})
            Store.create({name:"Aldi"})
        end

        before(:each) {
            get :index
        }

        it 'returns a success response' do
            expect(response).to have_http_status(:success)
        end

        it 'returns the correct number of stores' do
            response_stores = response.parsed_body
            expect(response_stores.size).to eq 2
        end
    end

    describe 'DELETE destroy' do
        subject(:store) { Store.create({name:"Hyvee"}) }
        before(:each) do
            delete :destroy, params: {id: store.id}
        end

        it 'returns a success response' do
            expect(response).to have_http_status(:success)
        end

        it 'deletes store' do
            expect(Store.exists?(store.id)).to be false
        end
    end
end