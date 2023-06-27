import React from "react";
import pdfMake from "./build/pdfmake/pdfmake";
import pdfFonts from "./build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default function Form() {
	const [formData, setFormData] = React.useState({
		buyerEmail: "",
		recipientEmail: "",
		recipientLastName: "",
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
					text: ` Recipient Last Name: ${formData.recipientLastName} 
          Recipient Email address: ${formData.recipientEmail} 
           Buyer email address: ${formData.buyerEmail}`,

					fontSize: 20,
					bold: true,
					margin: [0, 10, 0, 0],
				},
			],
		};

		// Generate the PDF
		pdfMake.createPdf(docDefinition).download("generated.pdf");
	}

	return (
		<main>
			<form onSubmit={handleSubmit}>
				<label htmlFor="recipientLastName"> Recipient Last Name:</label>
				<input
					type="text"
					placeholder="Recipient Last Name"
					name="recipientLastName"
					value={formData.recipientLastName}
					onChange={handleChange}
				/>
				<br />
				<br />
				<label htmlFor="recipientEmail">Recipient Email:</label>
				<input
					type="email"
					placeholder="recipient email Address"
					name="recipientEmail"
					value={formData.recipientEmail}
					onChange={handleChange}
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
				/>
				<br />

				<br />
				<button type="submit">Create Gift Cerfticate</button>
				{submitted && (
					<h3>
						Thank You {formData.from} ! For creating a {formData.amount} gift
						card with the description of {formData.gift}
					</h3>
				)}
			</form>
		</main>
	);
}
