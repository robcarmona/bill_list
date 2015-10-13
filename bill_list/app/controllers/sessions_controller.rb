class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render :json => { success: true, redirect: root_url }
    else
      render :json => { success: false }
    end

  end

  def destroy
    session[:user_id] = nil
    render :json => { success: true }
  end
end
