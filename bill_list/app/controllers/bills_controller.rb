class BillsController < ApplicationController
  def create
    bill = Bill.new(bill_params)
    render :json => { success: bill.save }
  end

  def show
    render :json => { data: current_user.bills }
  end

  private
  def bill_params
    params.permit(:name, :due, :user_id, :logo_url, :company_url, :payer, :amount)
  end
end
