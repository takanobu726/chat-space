class Api::MessagesController < ApplicationController

  # before_action :set_group

  def index
    respond_to do |format|
      format.html
      format.json {@messages = Message.where('id > ?',params[:id]) }
    end
  end

  # def message_params
  # params.require(:message).permit(:content, :image).merge(user_id: current_user.id)
  # end

  # def set_group
  #   @group = Group.find(params[:id])
  # end

end
