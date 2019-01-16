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

class UserSerializer
  include FastJsonapi::ObjectSerializer
  
  attributes :email, :role
end
