class DashboardsController < ApplicationController
  def show
    render :file => 'public/views/index.html'
  end
end
