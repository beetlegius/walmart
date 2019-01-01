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

require 'rails_helper'

RSpec.describe Category, type: :model do
  
  it 'has a valid factory' do
    expect(build(:category)).to be_valid
  end
  
  describe 'Associations' do
    it { should have_many(:products).dependent(:destroy) }
  end
  
  describe 'Presence validations' do
    it { should validate_presence_of(:name) }
  end
  
  describe 'Uniqueness validations' do
    subject { create(:category) }
    
    it { should validate_uniqueness_of(:name) }
  end
  
  describe 'Length validations' do
    it { should validate_length_of(:name).is_at_most(255) }
  end
end
