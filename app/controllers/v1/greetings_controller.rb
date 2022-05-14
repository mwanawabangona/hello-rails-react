class V1::GreetingsController < ApplicationController
  def index
    @greetings = Message.find(Message.pluck(:id).sample)
    render json: {
      greetings: @greetings
    }.to_json
  end
end
