class RenameGroupColumnToMessages < ActiveRecord::Migration[5.0]
  def change
    rename_column :messages, :group, :group_id
    rename_column :messages, :user, :user_id
  end
end
