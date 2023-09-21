Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'purchases/index'
      post 'purchases/create'
      get 'purchases/show/:id', to: 'purchases#show'
      delete 'purchases/destroy/:id', to: 'purchases#destroy'
      get 'stores/index'
      post 'stores/create'
      get '/stores/show/:id', to: 'stores#show'
      delete '/stores/destroy/:id', to: 'stores#destroy'
      get 'items/index'
      post 'items/create'
      get 'items/show/:id', to: 'items#show'
      delete 'items/destroy/:id', to: 'items#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
