# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string
#  password_digest :string
#  role            :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  enum role: ROLES = [
    ADMIN  = 'admin',
    MEMBER = 'member'
  ]
  
  has_secure_password
  
  validates :email, presence: true
  validates :password, presence: true, on: :create
end
