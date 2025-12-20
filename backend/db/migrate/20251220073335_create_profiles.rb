class CreateProfiles < ActiveRecord::Migration[8.1]
  def change
    create_table :profiles do |t|
      t.string :name
      t.string :title
      t.string :email
      t.string :location
      t.string :github
      t.string :linkedin

      t.timestamps
    end
  end
end
