class Api::PostsController < ApplicationController
  def create
    @post = Post.new(post_params)
    @post.category_id = 1
    @post.date = "replace with today's date"
    if @post.save
      render "api/posts/show"
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update_attributes
      render "api/posts/show"
    else
      render json: @post.errors.full_messages
    end
  end

  def destroy
  end

  def index
    @posts = Post.all
    render "api/posts/index.json.jbuilder"
  end

  def show
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :body, :category_id)
  end
end
