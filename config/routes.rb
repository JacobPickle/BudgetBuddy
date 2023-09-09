Rails.application.routes.draw do
  root "stores#index"

  resources :stores do
    resources :purchases , shallow: true do
      resources :items , shallow: true
    end
  end
end
