import React, { useState, useEffect } from "react";
import "./Contact.css";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  timestamp: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [showSubmissions, setShowSubmissions] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Load submissions from localStorage on component mount
  useEffect(() => {
    const storedSubmissions = localStorage.getItem("contactSubmissions");
    if (storedSubmissions) {
      setSubmissions(JSON.parse(storedSubmissions));
    }
  }, []);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (!formData.name || !formData.email || !formData.phone || !formData.message) {
  //     alert("Please fill in all fields");
  //     return;
  //   }

  //   // Create submission object
  //   const newSubmission: ContactSubmission = {
  //     id: Date.now().toString(),
  //     name: formData.name,
  //     email: formData.email,
  //     phone: formData.phone,
  //     message: formData.message,
  //     timestamp: new Date().toLocaleString(),
  //   };

  //   // Add to submissions list using functional update
  //   setSubmissions((prevSubmissions) => {
  //     const updatedSubmissions = [newSubmission, ...prevSubmissions];
  //     // Save to localStorage
  //     localStorage.setItem("contactSubmissions", JSON.stringify(updatedSubmissions));
  //     return updatedSubmissions;
  //   });

  //   // Show success message
  //   alert("Thank you for your message! We'll get back to you soon.");
  //   setFormData({ name: "", email: "", phone: "", message: "" });
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      alert("Please fill in all fields");
      return;
    }
    alert("Thank you for your message! We'll get back to you soon.");
    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbyDI-j3ueGP2Qrzdndcn-hCArRGve9NADTVIKNeBaYpCwgWmaoHTmkJt11uVif3gN0/exec",
        {
          method: "POST",
          mode: "no-cors", // important for Apps Script
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    }
  };

  const deleteSubmission = (id: string) => {
    if (window.confirm("Are you sure you want to delete this submission?")) {
      const updatedSubmissions = submissions.filter((sub) => sub.id !== id);
      setSubmissions(updatedSubmissions);
      localStorage.setItem(
        "contactSubmissions",
        JSON.stringify(updatedSubmissions)
      );
    }
  };

  const clearAllSubmissions = () => {
    if (window.confirm("Are you sure you want to delete all submissions?")) {
      setSubmissions([]);
      localStorage.removeItem("contactSubmissions");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>We'd love to hear from you</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Address</h4>
                <p>
                  Powerventures
                  <br />
                  43/539, Nettayikodath Road
                  <br /> Palarivattom PO
                  <br /> Ernakulam 682025
                </p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p>(555) 123-4567</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>powerventureskochi@gmail.com</p>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>

        {/* Submissions List */}
        <div className="submissions-section">
          <button
            className="btn btn-secondary"
            onClick={() => setShowSubmissions(!showSubmissions)}
            style={{ marginTop: "2rem" }}
          >
            {showSubmissions ? "Hide" : "View"} Submissions (
            {submissions.length})
          </button>

          {showSubmissions && submissions.length > 0 && (
            <div className="submissions-list">
              <div className="submissions-header">
                <h3>Contact Form Submissions</h3>
                <button
                  className="btn btn-small btn-danger"
                  onClick={clearAllSubmissions}
                >
                  Clear All
                </button>
              </div>
              <div className="submissions-grid">
                {submissions.map((submission) => (
                  <div key={submission.id} className="submission-card">
                    <div className="submission-header">
                      <h4>{submission.name}</h4>
                      <button
                        className="delete-btn"
                        onClick={() => deleteSubmission(submission.id)}
                        aria-label="Delete submission"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                    <div className="submission-details">
                      <p>
                        <i className="fas fa-envelope"></i> {submission.email}
                      </p>
                      <p>
                        <i className="fas fa-phone"></i>{" "}
                        <a href={`tel:${submission.phone}`}>
                          {submission.phone}
                        </a>
                      </p>
                      <p className="submission-message">{submission.message}</p>
                      <p className="submission-time">
                        <i className="fas fa-clock"></i> {submission.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {showSubmissions && submissions.length === 0 && (
            <p className="no-submissions">No submissions yet.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
