# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  author     :string
#  text       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Message, type: :model do
  it 'has a valid factory' do
    expect(build(:message)).to be_valid
  end
  
  describe 'Presence validations' do
    it { should validate_presence_of(:author) }
    it { should validate_presence_of(:text) }
  end
  
  describe 'Format validations' do
    it { should allow_value('example@example.com').for(:author) }
    it { should_not allow_value('example@').for(:author) }
  end
end
