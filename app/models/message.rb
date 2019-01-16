# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  author     :string
#  text       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord
  
  EMAIL_REGEXP = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
  
  after_create :send_notification
  
  validates :author, :text, presence: true
  validates :author, format: { with: EMAIL_REGEXP }
  
  private
  
  def send_notification
    ActionCable.server.broadcast("notifications:general", self)
  end
end
