Rails.application.routes.draw do
  # App root
  root 'appointments#index'

# Routes to all 7 CRUD actions for appointments
  resources :appointments
end
