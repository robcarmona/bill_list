class UsersController < ApplicationController
  def new
  end

  def create
    @user = User.create(user_params)
    render :json => { success: @user.valid?, data: @user }
  end

  private
  def user_params
    params.permit(:name, :email, :password)
  end
end
