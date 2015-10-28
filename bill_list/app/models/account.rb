class Account < ActiveRecord::Base
  has_many :users
  has_many :bill_histories
  has_many :bills


  # Return monthly bills
  def bills(type)
    start = DateTime.now.beginning_of_month
    ending = DateTime.now.end_of_month

    if type == "due"
      return Bill.joins(:bill_histories).where(account_id: self.id).where.not("bill_histories.paid_date between ? and ?", start, ending)
    end

    if type == "paid"
      return Bill.joins(:bill_histories).where(account_id: self.id).where("bill_histories.paid_date between ? and ?", start, ending)
    end

  end


end
