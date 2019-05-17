json.(@message, :content, :image)
json.id        @message.id
json.user_name @message.user.name
json.time      @message.created_at.strftime('%Y/%m/%d %R')
