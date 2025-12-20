module Api
  class AboutsController < ApplicationController
    def index
      about = About.first
      render json: about
    end
  end
end
