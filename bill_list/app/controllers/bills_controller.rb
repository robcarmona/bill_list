class BillsController < ApplicationController
  def create
    bill = Bill.new(bill_params)
    render :json => { success: bill.save }
  end

  def show
    respond_to do |format|
      format.json { render json: current_user.bills.to_json(:methods => :last_payment)  }
    end
  end

  private
  def bill_params
    params.permit(:name, :due, :user_id, :logo_url, :company_url, :payer, :amount)
  end
end
