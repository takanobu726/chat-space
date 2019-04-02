class CreateMassages < ActiveRecord::Migration[5.0]

  def change

    create_table :massages do |t|
      t.text :body
      t.timestamps
    end

  end
end
