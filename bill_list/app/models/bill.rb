class Bill < ActiveRecord::Base
  belongs_to :user
  has_many :bill_histories
  validates :user_id, presence: true

  # def as_json(options = {})
  #   super.merge()
  # end

  def last_payment
    self.bill_histories.order(:paid_date, :created_at).last
  end

end
