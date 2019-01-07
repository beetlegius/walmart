Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  
  resources :users
  resources :categories, shallow: true do
    resources :products
  end
end
