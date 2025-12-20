class AddCredentialFieldsToEducations < ActiveRecord::Migration[8.1]
  def change
    add_column :educations, :credential_id, :string
    add_column :educations, :verification_url, :string
  end
end
