class BillsController < ApplicationController
  def create
    bill = Bill.new(bill_params)
    bill.user_id = current_user.id
    bill.save
    respond_to do |format|
      format.json { render json: bills_json  }
    end
  end

  def show
    respond_to do |format|
      format.json { render json: bills_json  }
    end
  end

  private
  def bill_params
    params.require(:bill).permit(:name, :due, :user_id, :logo_url, :company_url, :amount)
  end

  def bills_json
    current_user.bills.to_json(:methods => :last_payment)
  end

end
