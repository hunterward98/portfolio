class RemoveCourseworkFromEducations < ActiveRecord::Migration[8.1]
  def change
    remove_column :educations, :coursework, :text
  end
end
