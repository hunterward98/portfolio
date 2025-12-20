class Experience < ApplicationRecord
  validates :company, presence: true
  validates :position, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true

  # Store responsibilities as array in JSON
  serialize :responsibilities, coder: JSON
end
