class Skill < ApplicationRecord
  validates :category, presence: true
  validates :items, presence: true

  # Store items as array in JSON
  serialize :items, coder: JSON
end
