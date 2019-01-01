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

require 'rails_helper'

RSpec.describe Product, type: :model do
  it 'has a valid factory' do
    expect(build(:product)).to be_valid
  end
  
  describe 'Associations' do
    it { should belong_to(:category).counter_cache(true) }
  end
  
  describe 'Presence validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:price) }
  end
  
  describe 'Numericality validations' do
    it { should validate_numericality_of(:price).is_greater_than(0) }
  end
end
