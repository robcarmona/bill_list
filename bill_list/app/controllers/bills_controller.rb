class BillsController < ApplicationController
  before_action :set_bill, only: [:update, :edit]
  def create
    bill = Bill.new(bill_params)
    bill.due = DateTime.strptime(params[:bill][:due], "%m/%d/%Y")
    bill.user_id = current_user.id
    bill.save
    render json: bills_json
  end

  def show
    respond_to do |format|
      format.json { render json: bills_json  }
    end
  end

  def edit
  end

  def update
    if @bill.update_attributes(bill_params)
      render json: bills_json
    end
  end

  def partial
    render :partial => params[:name]
  end

  private
  def bill_params
    params.require(:bill).permit(:name, :due, :user_id, :logo_url, :company_url, :amount, :active)
  end

  def bills_json
    current_user.bills.where(active: true).to_json(:methods => :last_payment)
  end

  def set_bill
    #params[:bill][:due] = DateTime.strptime(params[:bill][:due], "%m/%d/%Y")
    @bill = Bill.find_by(id: params[:id])
  end

end
