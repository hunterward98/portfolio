class CreateAbouts < ActiveRecord::Migration[8.1]
  def change
    create_table :abouts do |t|
      t.text :summary

      t.timestamps
    end
  end
end
