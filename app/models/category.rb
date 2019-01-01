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

class Category < ApplicationRecord
  has_many :products, dependent: :destroy
  
  validates :name, presence: true, uniqueness: true, length: { maximum: 255 }
end
