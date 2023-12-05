# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'purchases/index'
      get 'purchases/recent'
      get 'purchases/recent_total'
      post 'purchases/create'
      get 'purchases/show/:id', to: 'purchases#show'
      delete 'purchases/destroy/:id', to: 'purchases#destroy'
      get 'store_types/index'
      post 'store_types/create'
      get 'store_types/show/:id', to: 'store_types#show'
      delete 'store_types/destroy/:id', to: 'store_types#destroy'
      get 'stores/index'
      post 'stores/create'
      get '/stores/show/:id', to: 'stores#show'
      delete '/stores/destroy/:id', to: 'stores#destroy'
      get 'items/index'
      post 'items/create'
      get 'items/show/:id', to: 'items#show'
      get 'items/show_by_purchase/:purchase_id', to: 'items#show_by_purchase_id'
      delete 'items/destroy/:id', to: 'items#destroy'
      get 'settings/weeks', to: 'settings#weeks'
      get 'settings/budget', to: 'settings#budget'
      post 'settings/create'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
