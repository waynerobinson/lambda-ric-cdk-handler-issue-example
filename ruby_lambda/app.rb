require "json"

module App
  class Handler
    def self.process(event:, context:)
      return {
        message: "Hello world!",
        event:,
        context:, 
      }.to_json
    end
  end
end