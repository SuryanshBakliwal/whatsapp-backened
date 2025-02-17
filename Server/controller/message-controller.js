import Message from "../model/message.js";
import Conversation from "../model/conversation.js";

export const newMessage = async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    await Conversation.findByIdAndUpdate(req.body.conversationId, {
      message: req.body.text,
    });
    return res
      .status(200)
      .json({ message: "Message has been set successfully" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
export const getMessage = async (req, res) => {
  try {
    const messages = await Message.find({ conversationId: req.params.id });
    return res.status(200).json(messages);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
