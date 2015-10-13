class RemovePayerAddAccountsToBillHistories < ActiveRecord::Migration
  def change
    remove_column :bill_histories, :payer
    remove_column :bills, :payer
    add_column :users, :account_id, :integer, :null => false
    add_column :bills, :account_id, :integer
  end
end
