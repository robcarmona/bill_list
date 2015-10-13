class DashboardsController < ApplicationController
  before_action :authorize, except: [:show]

  def show
    #render :file => 'public/views/index.html'
  end

  def index
    #render :file => 'public/views/index.html'
    #render :json => { sucess: true, user: { email: @current_user.email, id: @current_user.id } }
  end


end
