class AddMinorsToEducations < ActiveRecord::Migration[8.1]
  def change
    add_column :educations, :minors, :text
  end
end
