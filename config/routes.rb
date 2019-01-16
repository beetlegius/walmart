Rails.application.routes.draw do
  mount ActionCable.server => '/cable'

  resources :messages
  post 'user_token' => 'user_token#create'
  
  resources :users
  resources :categories, shallow: true do
    resources :products
  end
end
