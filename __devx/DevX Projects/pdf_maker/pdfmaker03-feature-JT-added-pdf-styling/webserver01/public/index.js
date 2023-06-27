function generatePDF() {
    // Create a new XMLHttpRequest
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'page.png', true);
    xhr.responseType = 'blob';

    xhr.onload = function () {
        if (xhr.status === 200) {
            var blob = xhr.response;

            // Read the image blob and convert it to a data URL
            var reader = new FileReader();
            reader.onloadend = function () {
                var imageUrl = reader.result;

                // Create a document definition
                var docDefinition = {
                    pageSize: 'LETTER',
                    background: [
                        {
                            image: imageUrl,
                            width: 612
                        }
                    ],
                    content: [
                        {
                            text: 'Hello new user',
                            fontSize: 40,
                            bold: true,
                            margin: [0, 10, 0, 0]
                        }
                    ]
                };

                // Generate the PDF
                pdfMake.createPdf(docDefinition).download('generated.pdf');
            };

            reader.readAsDataURL(blob);
        }
    };

    xhr.send();
}
