import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: 'info@athome-immo.de',
      from: 'moritz.loechner@gmail.com',
      replyTo: req.body.email,
      subject: `Anliegen von ${req.body.name} über AtHome Kontaktformular`,
      html: `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
        <head>
          <meta charset="utf-8">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        </head>
        <body>
          <p>Message:</p>
          <p>${req.body.message}</p>
          <p>Reply to: ${req.body.email}</p>
        </body>
      </html>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}
