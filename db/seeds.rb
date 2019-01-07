# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

2500.times { Category.create name: Faker::Commerce.department }

Category.all.each do |category|
  rand(200).times do
    category.products.create!(
      name:        Faker::Commerce.product_name,
      description: Faker::Lorem.paragraph,
      price:       Faker::Commerce.price
    )
  end
end

puts 'DONE!'