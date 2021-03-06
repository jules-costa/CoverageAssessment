class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    # TODO: change this
    @user.category_id = 1
    if @user.save
      login(@user)
      render "/api/users/show.json.jbuilder"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end
end
