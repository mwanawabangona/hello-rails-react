Rails.application.routes.draw do
 namespace :v1, defaults: { format: :json } do
  get 'greetings', to: 'greetings#index'
 end

 get '*path', to: 'static#index', constraints: -> (request) do
  !request.xhr? && request.format.html?
 end

 root 'static#index'
end
