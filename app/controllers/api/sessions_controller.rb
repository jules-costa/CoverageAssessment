class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login(@user)
      # render "api/stories"
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def destroy
    logout
    # render "api/sessions/"
  end
end