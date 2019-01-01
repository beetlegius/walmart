# == Schema Information
#
# Table name: products
#
#  id          :integer          not null, primary key
#  description :string
#  name        :string
#  price       :decimal(15, 2)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category_id :integer
#
# Indexes
#
#  index_products_on_category_id  (category_id)
#

class Product < ApplicationRecord
  belongs_to :category, counter_cache: true
  
  validates :name, :price, presence: true
  validates :price, numericality: { greater_than: 0 }
end
