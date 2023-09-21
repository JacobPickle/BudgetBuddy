class CreatePurchases < ActiveRecord::Migration[7.0]
  def change
    create_table :purchases do |t|
      t.date :purchase_date, null: false
      t.float :total, null: false
      t.references :store, null: false, foreign_key: true

      t.timestamps
    end
  end
end
