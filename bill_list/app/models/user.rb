class User < ActiveRecord::Base
  has_secure_password
  has_many :bills

  # Exclude password info from json output.
  def to_json(options={})
    options[:except] ||= [:password_digest]
    super(options)
  end

end
