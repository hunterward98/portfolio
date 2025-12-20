module Api
  class ExperiencesController < ApplicationController
    def index
      experiences = Experience.all.order(created_at: :desc)
      render json: experiences
    end
  end
end
