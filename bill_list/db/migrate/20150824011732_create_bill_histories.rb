class CreateBillHistories < ActiveRecord::Migration
  def change
    create_table :bill_histories do |t|
      t.decimal :amount
      t.datetime :paid_date
      t.string :payer
      # Add user and bill references
      t.references :bill, index: true
      t.timestamps null: false
    end
    add_foreign_key :bill_histories, :bills
  end
end
