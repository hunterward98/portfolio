module Api
  class ProfilesController < ApplicationController
    def index
      profile = Profile.first
      render json: profile
    end
  end
end
