export default function GoogleFormRedirect() {
    return (
        <div className="container mt-5 text-center">
            <h2>Submit Via Google Form</h2>
            <p>If you prefer, you can submit your cake order using our existing Google Form.</p>

            <a
                href="YOUR_GOOGLE_FORM_URL"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-3"
            >
                Open Google Form
            </a>
        </div>
    );
}
