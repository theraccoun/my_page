source 'https://rubygems.org'

gem 'rails', '3.2.11'
gem 'bootstrap-sass', '2.1'

group :development, :test do
  gem 'sqlite3', '1.3.5'
  gem 'rspec-rails', '2.11.0'
end

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '3.2.5'
  gem 'coffee-rails', '3.2.2'
  gem 'uglifier', '1.2.3'
end

gem 'jquery-rails'
gem 'jquery-ui-rails'

group :test do
  gem 'capybara', '1.1.2'
end

group :production do
  gem 'pg', '0.12.2'
  gem 'newrelic_rpm' # site performance metrics
  gem 'unicorn'      # http://collectiveidea.com/blog/archives/2012/11/26/setup-a-high-volume-site-on-heroku-for-free/
end