class ApplicationController < ActionController::API
  include Pundit
  include Knock::Authenticable
  before_action :authenticate_user
end
