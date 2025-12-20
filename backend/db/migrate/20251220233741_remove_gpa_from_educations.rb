class RemoveGpaFromEducations < ActiveRecord::Migration[8.1]
  def change
    remove_column :educations, :gpa, :string
  end
end
