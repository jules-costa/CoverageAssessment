class ApplicationController < ActionController::Base
  # TODO: comment this back in!
  # protect_from_forgery with: :exception

  helper_method :current_user
  helper_method :logged_in

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logout
    user = User.find_by(session_token: session[:session_token])
    user.reset_session_token!
    session[:session_token] = nil
  end

  def logged_in
    !!current_user
  end

end
