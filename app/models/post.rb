class Post < ApplicationRecord
  validates :title, :body, :category_id, :date, presence: true
end
