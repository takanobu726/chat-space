class RenameBodyColumnToMessages < ActiveRecord::Migration[5.0]
  def change
    rename_column :messages, :body, :content
    rename_column :messages, :group_id, :group
    rename_column :messages, :user_id, :user
  end
end
