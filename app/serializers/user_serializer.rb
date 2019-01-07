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

class UserSerializer
  include FastJsonapi::ObjectSerializer
  
  attributes :email, :role
end
