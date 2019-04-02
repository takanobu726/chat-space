class User < ApplicationRecord
  has_many :groups, through: :users_groups
  has_many :massages
end
