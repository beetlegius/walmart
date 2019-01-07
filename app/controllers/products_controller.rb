class ProductsController < ApplicationController
  before_action :set_category, only: [:index, :new, :create]
  before_action :set_product, :protect, only: [:show, :update, :destroy]

  # GET /products
  def index
    @products = @category.products
    authorize @products

    serialize @products
  end

  # GET /products/1
  def show
    serialize @product
  end

  # POST /products
  def create
    @product = @category.products.build(product_params)
    authorize @product

    if @product.save
      serialize @product, status: :created, location: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /products/1
  def update
    if @product.update(product_params)
      serialize @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /products/1
  def destroy
    @product.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end
    
    def protect
      authorize @product
    end

    def set_category
      @category = Category.find(params[:category_id])
    end

    # Only allow a trusted parameter "white list" through.
    def product_params
      params.require(:product).permit(:name, :description, :price, :category_id)
    end
    
    def serialize(records, options = {})
      results = options.merge(
        json: ProductSerializer.new(records).serializable_hash
      )
      
      render results
    end
end
