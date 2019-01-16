class NotificationsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "notifications:general"
  end

  def unsubscribed
    stop_all_streams
  end
  
  def receive(message)
    self.class.broadcast_to('general', message)
  end

end
