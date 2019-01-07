class CategoriesController < ApplicationController
  before_action :set_category, :protect, only: [:show, :update, :destroy]

  # GET /categories
  def index
    @categories = Category.includes(:products)
    authorize @categories
    serialize @categories
  end

  # GET /categories/1
  def show
    serialize @category
  end

  # POST /categories
  def create
    @category = Category.new(category_params)
    authorize @category

    if @category.save
      serialize @category, status: :created, location: @category
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /categories/1
  def update
    if @category.update(category_params)
      render json: @category
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  # DELETE /categories/1
  def destroy
    @category.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_category
      @category = Category.find(params[:id])
    end
    
    def protect
      authorize @category
    end

    # Only allow a trusted parameter "white list" through.
    def category_params
      params.require(:category).permit(:name, :products_count)
    end
    
    def serialize(records, options = {})
      results = options.merge(
        json: CategorySerializer.new(records).serializable_hash
      )
      
      render results
    end
end
