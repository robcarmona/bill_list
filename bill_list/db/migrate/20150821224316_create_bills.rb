class CreateBills < ActiveRecord::Migration
  def change
    create_table :bills do |t|
      t.string :name
      t.datetime :due
      t.timestamps null: false
    end
  end
end
