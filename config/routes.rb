Rails.application.routes.draw do
  resources :categories, shallow: true do
    resources :products
  end
end
