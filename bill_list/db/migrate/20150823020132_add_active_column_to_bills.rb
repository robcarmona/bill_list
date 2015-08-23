class AddActiveColumnToBills < ActiveRecord::Migration
  def change
    add_column :bills, :active, :boolean, :default => true
    add_column :bills, :user_id, :integer, :null => false
  end
end
