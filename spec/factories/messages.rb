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

FactoryBot.define do
  factory :message do
    author { Faker::Internet.email }
    text { Faker::Lorem.paragraph }
  end
end
