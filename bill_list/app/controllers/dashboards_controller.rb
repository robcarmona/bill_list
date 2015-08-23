class DashboardsController < ApplicationController
  before_action :authorize, except: [:show]
  # root page
  def show
    render :file => 'public/views/index.html'
  end

  def index
    render :json => { sucess: true, user: { email: @current_user.email, id: @current_user.id } }
  end


end
