class CreateEducations < ActiveRecord::Migration[8.1]
  def change
    create_table :educations do |t|
      t.string :degree
      t.string :school
      t.string :location
      t.string :graduation_date
      t.string :gpa
      t.text :honors
      t.text :coursework

      t.timestamps
    end
  end
end
