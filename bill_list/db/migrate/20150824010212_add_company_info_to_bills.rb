class AddCompanyInfoToBills < ActiveRecord::Migration
  def change
    add_column :bills, :logo_url, :string
    add_column :bills, :company_url, :string
    add_column :bills, :payer, :string
    add_column :bills, :amount, :decimal, :precision => 30, :scale => 10
  end
end
