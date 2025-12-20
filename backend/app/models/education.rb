class Education < ApplicationRecord
  validates :degree, presence: true
  validates :school, presence: true
  validates :graduation_date, presence: true

  # Store honors and minors as arrays in JSON
  serialize :honors, coder: JSON
  serialize :minors, coder: JSON
end
