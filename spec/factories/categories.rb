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

FactoryBot.define do
  factory :category do
    name { Faker::Commerce.department }
    
    factory :category_with_products do
      transient do
        products_count { 5 }
      end
      
      after(:create) do |model, evaluator|
        create_list :product, evaluator.products_count, category: model
      end
    end
  end
end
