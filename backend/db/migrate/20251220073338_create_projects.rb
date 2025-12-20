class CreateProjects < ActiveRecord::Migration[8.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.text :description
      t.text :technologies
      t.string :github_url
      t.string :live_url

      t.timestamps
    end
  end
end
