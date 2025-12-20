class Project < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true

  # Store technologies as array in JSON
  serialize :technologies, coder: JSON
end
