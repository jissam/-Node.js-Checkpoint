const nodemailer = require("nodemailer");

// create a transporter object
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jissam.consulting@gmail.com",
    pass: "juyc bpxn wxfn ejam",
  },
});

// email data
let mailOptions = {
  from: "jissam.consulting@gmail.com",
  to: "jissam.consulting@gmail.com",
  subject: "Hello nodemailer",
  text: "test nodemailer",
};

transporter.sendMail(mailOptions, function (err, data) {
  if (err) console.error(err);
  else console.log("ok sent!");
});
