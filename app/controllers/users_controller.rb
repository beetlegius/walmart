class UsersController < ApplicationController
  before_action :set_user, :protect, only: [:show, :update, :destroy]

  # GET /users
  def index
    @users = User.all
    authorize @users

    serialize @users
  end

  # GET /users/1
  def show
    serialize @user
  end

  # POST /users
  def create
    @user = User.new(user_params)
    authorize @user

    if @user.save
      serialize @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      serialize @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end
    
    def protect
      authorize @user
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:email, :password_digest)
    end
    
    def serialize(records, options = {})
      results = options.merge(
        json: UserSerializer.new(records).serializable_hash
      )
      
      render results
    end
end
