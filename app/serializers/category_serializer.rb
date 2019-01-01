# == Schema Information
#
# Table name: categories
#
#  id             :integer          not null, primary key
#  name           :string
#  products_count :integer          default(0), not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class CategorySerializer
  include FastJsonapi::ObjectSerializer
  
  attributes :name
  
  has_many :products
end
