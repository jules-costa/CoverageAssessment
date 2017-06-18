@posts.each do |post|
  json.set! post.id do
    json.id post.id
    json.title post.title
    json.date post.date
    json.body post.body
  end
end
