const userService = require("../models/user");
const smsService = require("../services/smsService");
const emailService = require("../services/emailService");

exports.sendVerification = (req, res, next) => {
  const { userChoice, phoneNumber, email } = req.body;

  const verificationCode = userService.generateVerificationCode();

  if (userChoice === "phone") {
    if (!userService.validatePhoneNumber(phoneNumber)) {
      return res.status(400).send("Invalid phone number format.");
    }

    smsService
      .sendSMS(phoneNumber, verificationCode)
      .then(() => res.status(200).send("SMS sent successfully."))
      .catch((err) => res.status(500).send("Failed to send SMS."));
  } else if (userChoice === "email") {
    if (!userService.validateEmail(email)) {
      return res.status(400).send("Invalid email format.");
    }

    emailService
      .sendEmail(email, verificationCode)
      .then(() => res.status(200).send("Email sent successfully."))
      .catch((err) => res.status(500).send("Failed to send email."));
  } else {
    res.status(400).send("Invalid choice.");
  }
};
