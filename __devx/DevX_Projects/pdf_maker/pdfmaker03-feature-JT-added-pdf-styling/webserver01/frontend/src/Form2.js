import React from "react";
import pdfMake from "./build/pdfmake/pdfmake";
import pdfFonts from "./build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
export default function Form() {
	const [formData, setFormData] = React.useState({
		recipientFirstName: "",
		recipientLastName: "",
		giftName: null,
		giftDescription: "",
		amount: "",
		giftType: "",
		message: "",
		initials: "",
		voucher: "",
		costCode: "",
		buyerFirstName: "",
		recipientEmail: "",
		buyerEmail: "",
	});
	const [submitted, setSubmitted] = React.useState(false);
	function handleChange(e) {
		setFormData((prevData) => {
			return { ...prevData, [e.target.name]: e.target.value };
		});
	}
	function handleSubmit(e) {
		e.preventDefault();
		setSubmitted(true);
		generatePDF();
	}
	const [imageDataUrl, setImageDataUrl] = React.useState(null);
	React.useEffect(() => {
		// Load the image file and convert it to a data URL
		fetchImage();
	}, []);
	async function fetchImage() {
		try {
			const response = await fetch(
				"/Butter Day Spa Gift Certificate - Final - .png"
			);
			const blob = await response.blob();
			const reader = new FileReader();
			reader.onloadend = function () {
				setImageDataUrl(reader.result);
			};
			reader.readAsDataURL(blob);
		} catch (error) {
			console.error("Error fetching image:", error);
		}
	}
	function generatePDF() {
		if (!imageDataUrl) {
			console.error("Image data URL not available");
			return;
		}
		// Create a document definition
		const docDefinition = {
			pageSize: "LETTER",
			background: [
				{
					image: imageDataUrl,
					width: 612,
				},
			],
			content: [
				{
					text: `${formData.recipientFirstName} ${formData.recipientLastName}`,
					fontSize: 14,
					bold: false,
					margin: [0, 0, 0, 0], // Add margin at the bottom of the line
					alignment: "left",
					absolutePosition: { x: 115, y: 396 },
				},

				{
					text: `${formData.buyerFirstName}`,
					fontSize: 14,
					bold: false,
					margin: [0, 0, 0, 0], // Add margin at the bottom of the line
					alignment: "left",
					absolutePosition: { x: 115, y: 418 },
				},

				{
					text: `${formData.giftName}`,
					fontSize: 14,
					bold: false,
					margin: [0, 0, 0, 0], // Add margin at the bottom of the line
					alignment: "left",
					absolutePosition: { x: 115, y: 440 },
				},

				{
					text: `${formData.initials}-${formData.voucher}-${formData.costCode}`,
					fontSize: 16,
					bold: false,
					margin: [0, 0, 0, 0], // Add margin at the bottom of the line
					alignment: "left",
					absolutePosition: { x: 435, y: 460 },
				},

				// {
				// 	text: `Message`,
				// 	fontSize: 14,
				// 	bold: true,
				// 	margin: [0, 0, 0, 15], // Add margin at the bottom of the line
				// 	alignment: "left",
				// 	absolutePosition: { x: 35, y: 550 },
				// },

				{
					text: `( ${formData.message} )`,
					fontSize: 8,
					bold: false,
					margin: [0, 0, 0, 15], // Add margin at the bottom of the line
					alignment: "left",
					absolutePosition: { x: 130, y: 460 },
				},

				// 		{
				// 			text: `Recipient Email address:`,
				// 			fontSize: 14,
				// 			bold: true,
				// 			margin: [0, 0, 0, 15], // Add margin at the bottom of the line
				// 			alignment: "left",
				// 			absolutePosition: { x: 50, y: 50 },
				// 		},

				// 		{
				// 			text: `${formData.recipientEmail}`,
				// 			fontSize: 14,
				// 			bold: false,
				// 			margin: [0, 0, 0, 10], // Add margin at the bottom of the line
				// 			alignment: "left",
				// 			absolutePosition: { x: 115, y: 79 },
				// 		},

				// 		{
				// 			text: `Buyer email address:`,
				// 			fontSize: 14,
				// 			bold: true,
				// 			margin: [0, 0, 0, 10], // Add margin at the bottom of the line
				// 			alignment: "left",
				// 			absolutePosition: { x: 50, y: 145 },
				// 		},

				// 		{
				// 			text: `${formData.buyerEmail}`,
				// 			fontSize: 14,
				// 			bold: false,
				// 			margin: [0, 0, 0, 10], // Add margin at the bottom of the line
				// 			alignment: "left",
				// 			absolutePosition: { x: 115, y: 175 },
				// 		},
			],
		};
		// Generate the PDF
		pdfMake
			.createPdf(docDefinition)
			.download("Butter Spa Gift Certificate.pdf");
	}
	return (
		<main>
			<div className="container">
				<form onSubmit={handleSubmit}>
					<label htmlFor="recipientFirstName">Recipient First Name:</label>
					<input
						type="text"
						placeholder=" "
						name="recipientFirstName"
						value={formData.recipientFirstName}
						onChange={handleChange}
						required
					/>
					<br />
					<br />
					<label htmlFor="RecipientLastName">Recipient Last Name:</label>
					<input
						type="text"
						placeholder=" "
						name="RecipientLastName"
						value={formData.RecipientLastName}
						onChange={handleChange}
						required
					/>
					<br />
					<br />
					<label htmlFor="buyerFirstName">Buyer First Name:</label>
					<input
						type="text"
						placeholder=" "
						name="buyerFirstName"
						value={formData.buyerFirstName}
						onChange={handleChange}
						required
					/>
					<br />
					<br />
					<label htmlFor="giftDescription">Gift Description:</label>
					<input
						type="text"
						placeholder="Gift Description"
						name="giftDescription"
						value={formData.giftDescription}
						onChange={handleChange}
						required
					/>
					<br />
					<br />
					<label htmlFor="amount">Amount:</label>
					<input
						type="text"
						placeholder="$$$"
						name="amount"
						value={formData.amount}
						onChange={handleChange}
						required
					/>
					<br />
					<br />
					<label htmlFor="gift name">Gift Name:</label>
					<select
						name="giftName"
						id="giftname"
						value={formData.giftName}
						onChange={handleChange}
						required
					>
						<option value="Select Option">Please Select an Option</option>
						<option value="Swedish Massage">Swedish Massage</option>
						<option value="Deep Tissue Massage">Deep Tissue Massage</option>
						<option value="Europa Facial">Europa Facial</option>
						<option value="Couples Massage">Couples Massage</option>
						<option value="Twos Company Massage">Twos Company Massage</option>
						<option value="Symphony #5">Symphony #5</option>
						<option value="Never Never Land">Never Never Land</option>
						<option value="Duchess of Windsor">Duchess of Windsor</option>
						<option value="Mother-Daughter Retreat">
							Mother-Daughter Retreat
						</option>
						<option value="Make It a Double">Make It a Double</option>
						<option value="Queen of Hearts">Queen of Hearts</option>
						<option value="Take Two">Take Two</option>
						<option value="Bali Retreat">Bali Retreat</option>
						<option value="Daycation Symphony #5">Daycation Symphony #5</option>
						<option value="Daycation Bali Retreat">
							Daycation Bali Retreat
						</option>
						<option value="Forty Dollars">Forty Dollars ($40.00)</option>
						<option value="Fifty Dollars">Fifty Dollars ($50.00)</option>
						<option value="One Hundred Dollars">
							One Hundred Dollars ($100.00)
						</option>
						<option value="One Hundred-Fifty Dollars">
							One Hundred-Fifty Dollars ($150.00)
						</option>
						<option value="Two Hundred Dollars">
							Two Hundred Dollars ($200.00)
						</option>
						<option value="Spa Chi">Spa Chi</option>
					</select>
					<br />
					<br />
					<label htmlFor="Message">Message:</label>
					<input
						type="text"
						placeholder="Message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						required
					/>
					<br />
					<br />
					<label htmlFor="Initials">Initials #:</label>
					<input
						type="text"
						placeholder="Initials"
						name="initials"
						value={formData.initials}
						onChange={handleChange}
						required
					/>
					<br />
					<br />
					<label htmlFor="Voucher">Voucher #:</label>
					<input
						type="text"
						placeholder="Voucher"
						name="voucher"
						value={formData.voucher}
						onChange={handleChange}
						required
					/>
					<br />
					<br />
					<label htmlFor="Cost Code #">Cost Code #:</label>
					<input
						type="text"
						placeholder="Cost Code"
						name="costCode"
						value={formData.costCode}
						onChange={handleChange}
						required
					/>
					<br />
					<br />
					{/* <label htmlFor="recipientLastName"> Recipient Last Name:</label>
					<input
						type="text"
						placeholder="Recipient Last Name"
						name="recipientLastName"
						value={formData.recipientLastName}
						onChange={handleChange}
						required
					/>
					<br />
					<br /> */}
					<label htmlFor="recipientEmail">Recipient Email:</label>
					<input
						type="email"
						placeholder="Recipient email Address"
						name="recipientEmail"
						value={formData.recipientEmail}
						onChange={handleChange}
						required
					/>
					<br />

					<br />
					<label htmlFor="buyerEmail">Buyer Email:</label>
					<input
						type="email"
						placeholder="Buyer Email Address"
						name="buyerEmail"
						value={formData.buyerEmail}
						onChange={handleChange}
						required
					/>
					<br />

					<br />
					<button type="submit">Generate Gift Certificate</button>
					{submitted && (
						<h3>
							Thank You {formData.buyerFirstName}! For creating a $
							{formData.amount} Gift Certificate for a {formData.giftName}.
						</h3>
					)}
				</form>
			</div>
		</main>
	);
}
