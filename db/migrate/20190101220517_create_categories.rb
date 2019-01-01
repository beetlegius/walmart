class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :name

      t.integer :products_count, default: 0, null: false
      t.timestamps
    end
  end
end
