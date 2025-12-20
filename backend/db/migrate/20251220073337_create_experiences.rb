class CreateExperiences < ActiveRecord::Migration[8.1]
  def change
    create_table :experiences do |t|
      t.string :company
      t.string :position
      t.string :location
      t.string :start_date
      t.string :end_date
      t.text :responsibilities

      t.timestamps
    end
  end
end
