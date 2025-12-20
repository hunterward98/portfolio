module Api
  class ProjectsController < ApplicationController
    def index
      projects = Project.all.order(created_at: :desc)
      render json: projects
    end
  end
end
