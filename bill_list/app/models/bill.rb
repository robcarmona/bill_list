class Bill < ActiveRecord::Base
  belongs_to :user
  has_many :bill_histories
  validates :user_id, presence: true
end
