class AddimageTomasseges < ActiveRecord::Migration[5.0]
  def change

    add_column :massages, :image, :string
    add_column :massages, :group_id, :integer
    add_column :massages, :user_id, :integer

  end
end
