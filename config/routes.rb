Rails.application.routes.draw do
  root "purchases#index"

  resources :stores do
    resources :purchases
  end
  resources :purchases do
    resources :items, shallow:true
  end

  resource :settings
end
