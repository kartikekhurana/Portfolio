import { gmail } from "../utils/gmail.js";

const handleContactForm = async (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !email || !message || !phone) {
    return res.status(400).json({
      sucess: false,
      message: "every field is reqired",
    });
  }
  try {
    await gmail({ name, email, message, phone });
    return res.status(200).json({
      success: true,
      message: "message sent successfullya",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "something went wrong while sending the form",
    });
  }
};

export { handleContactForm };
