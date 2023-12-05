class CreateStoreTypes < ActiveRecord::Migration[7.0]
  def change
    create_table :store_types do |t|
      t.string :name

      t.timestamps
    end
    add_reference :stores, :store_type, foreign_key: true
  end
end