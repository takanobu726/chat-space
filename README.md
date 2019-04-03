# テーブルを作成しました

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|strings|null: false, add_index :users, :name|
|email|strings|null: false|

### Association
- has_many :users_groups
- has_many :groups, through: :users_groups
- has_many :massages


## massagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|無し|
|image|string|無し|
|group_id|integer|無し|
|user_id|integer|無し|

### Association
- belongs_to :user
- belongs_to :group


## groupsテーブル

####追加のカラムなし

### Association
- has_many :users_groups
- has_many :users, through: :users_groups
- has_many :massages


## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|foreign_key: true|
|group_id|references|foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group
