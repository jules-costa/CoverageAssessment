Rails.application.config.middleware.use OmniAuth::Builder do
  provider :linkedin, ENV['86m21rg7n0qlj4'], ENV['2drJGx5I0WZomFaq']
end
