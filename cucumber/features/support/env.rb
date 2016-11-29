require 'rspec'
require 'page-object'
require 'factory_girl'
require 'active_record'
require 'require_all'

ActiveRecord::Base.establish_connection(
    :adapter  => "postgresql",
    :host     => "localhost",
    :database => "aztro_tuff"
)
World(PageObject::PageFactory)
World(FactoryGirl::Syntax::Methods)