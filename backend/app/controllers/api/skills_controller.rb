module Api
  class SkillsController < ApplicationController
    def index
      skills = Skill.all
      # Transform to object format expected by frontend
      skills_data = skills.each_with_object({}) do |skill, hash|
        hash[skill.category] = skill.items
      end
      render json: skills_data
    end
  end
end
