# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string
#  password_digest :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'rails_helper'

RSpec.describe User, type: :model do
  it 'has a valid factory' do
    expect(build(:user)).to be_valid
  end
  
  describe 'Presence validations' do
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password).on(:create) }
  end
  
  describe 'Enumeratives' do
    it { should define_enum_for(:role) }
  end
  
  describe 'Authentication' do
    it { should have_secure_password }
  end
end
