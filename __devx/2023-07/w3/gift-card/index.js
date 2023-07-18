const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

function generatePDF(formData, imageDataUrl,) {
  return new Promise((resolve, reject) => {
    if (!imageDataUrl) {
      console.error('Image data URL not available');
      reject(new Error('Image data URL not available'));
      return;
    }

    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream('booking.pdf'));
   

    // Load and embed the image
    const imagePath = path.join(__dirname, 'Butter Day Spa Gift Certificate - Final - .png');
    doc.image(imagePath, 0, 0, { width: 612 });

    // Add content to the PDF document
    doc.fontSize(14).text(`${formData.recipientFirstName} ${formData.recipientLastName}`, 115, 396);
    doc.fontSize(14).text(`${formData.buyerFirstName}`, 115, 418);
    doc.fontSize(14).text(formData.giftName, 115, 440);
    doc.fontSize(14.8).text(`${formData.initials}-${formData.voucher}-${formData.costCode}`, 427, 460);
    doc.fontSize(10).text(`${formData.message}`, 105, 470);
    

    // Finalize the PDF document
    doc.end();

    // Wait for the PDF to be saved
    doc.on('end', () => {
      resolve('booking.pdf');
    });
  });
}

async function fetchImage() {
  try {
    const data = await fs.promises.readFile('./Butter Day Spa Gift Certificate - Final - .png');
    const imageDataUrl = Buffer.from(data).toString('base64');
    return imageDataUrl;
  } catch (err) {
    console.error('Error reading image file:', err);
    throw err;
  }
}

app.post('/api/form', async (req, res) => {
  try {
    const imageDataUrl = await fetchImage();
    const pdfFileName = await generatePDF(req.body, imageDataUrl);

    nodemailer.createTestAccount((error, account) => {
      const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
          <li>Name: ${req.body.buyerFirstName}</li>
          <li>Email: ${req.body.buyerEmail}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
      `;

      const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: 'celine48@ethereal.email',
          pass: '64D6YZzZk6BQC37w5f',
        },
      });

      const mailOptions = {
        from: 'test@testaccount.com',
        to: 'celine48@ethereal.email',
        replyTo: 'test@testaccount.com',
        subject: 'Thank You For Booking',
        text: req.body.Message,
        html: htmlEmail,
        attachments: [
          {
            filename: 'booking.pdf',
            path: path.join(__dirname, pdfFileName),
            contentType: 'application/pdf',
          },
        ],
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          res.status(500).send('Error sending email');
        } else {
          console.log('Email sent:', info.response);

          // Set the appropriate headers for the download
          res.setHeader('Content-Disposition', 'attachment; filename="booking.pdf"');
          res.setHeader('Content-Type', 'application/pdf');

          // Send the PDF file as a download attachment
          res.sendFile(path.join(__dirname, pdfFileName));
        }
      });
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).send('Error generating PDF');
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});





app.post('/api/form', async (req, res) => {
  try {
    const imageDataUrl = await fetchImage();
    const pdfFileName = await generatePDF(req.body, imageDataUrl);

    nodemailer.createTestAccount((error, account) => {
      const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
          <li>Name: ${req.body.buyerFirstName}</li>
          <li>Email: ${req.body.buyerEmail}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
      `;

      const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: 'celine48@ethereal.email',
          pass: '64D6YZzZk6BQC37w5f',
        },
      });

      const mailOptions = {
        from: 'test@testaccount.com',
        to: 'celine48@ethereal.email',
        replyTo: 'test@testaccount.com',
        subject: 'Thank You For Booking',
        text: req.body.Message,
        html: htmlEmail,
        attachments: [
          {
            filename: 'booking.pdf',
            path: path.join(__dirname, pdfFileName),
            contentType: 'application/pdf',
          },
        ],
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          res.status(500).send('Error sending email');
        } else {
          console.log('Email sent:', info.response);

          // Set the appropriate headers for the download
          res.setHeader('Content-Disposition', 'attachment; filename="booking.pdf"');
          res.setHeader('Content-Type', 'application/pdf');

          // Send the PDF file as a download attachment
          res.sendFile(path.join(__dirname, pdfFileName));
        }
      });
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).send('Error generating PDF');
  }
});
