class UsersController < ApplicationController
  before_action :authorize, except: [:signin]
  before_action :redirect_home, only: [:signin]

  def new
  end

  def create
    @user = User.create(user_params)
    render :json => { success: @user.valid?, data: @user }
  end

  def signin
  end

  private
  def user_params
    params.permit(:name, :email, :password)
  end
  
  def redirect_home
    redirect_to root_url if current_user
  end

end
