class Api::PostsController < ApplicationController
  def create
  end

  def update
  end

  def destroy
  end

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  end
end
