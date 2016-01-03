class BillHistoriesController < ApplicationController
  before_action :set_bill, only: [:create]

  def partial
    render :partial => params[:name]
  end

  def create
    @bill_history = BillHistory.new(bill_history_params)
    @bill_history.bill_id = @bill.id
    @bill_history.save
    @bill.reload
    render json: @bill.to_json(:methods => :last_payment)
  end

  private
  def bill_history_params
    params.require(:bill_history).permit(:bill_id, :amount, :paid_date)
  end

  def set_bill
    @bill = Bill.find(params[:bill_id].to_i)
  end

end
