module ApplicationCable
  class Connection < ActionCable::Connection::Base
    
    def connect
      puts 'Identifico el usuario'
    end
    
  end
end
