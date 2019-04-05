# テーブルを作成しました

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|strings|null: false, add_index :users, :name|
|email|strings|null: false|

### Association
- has_many :users_groups
- has_many :groups, through: :users_groups
- has_many :messages


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|無し|
|group_id|references|foreign_key: true, null: false|
|user_id|references|foreign_key: true, null: false|

### Association
- belongs_to :user
- belongs_to :group


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :users_groups
- has_many :users, through: :users_groups
- has_many :messages


## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|foreign_key: true|
|group_id|references|foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group
