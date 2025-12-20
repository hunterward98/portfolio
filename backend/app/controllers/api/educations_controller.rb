module Api
  class EducationsController < ApplicationController
    def index
      educations = Education.all.order(graduation_date: :desc)
      render json: educations
    end
  end
end
