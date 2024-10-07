// // ComplaintForm.js
// import React, { useState } from 'react';

// const ComplaintForm = ({title, depart}) => {
//     const [email, setEmail] = useState('');
//     const [description, setDescription] = useState('');
//     const [image, setImage] = useState(null);
//     const [error, setError] = useState('');
    
//     console.log(title,depart);


//     const handleSubmit = async (e) => {
//         e.preventDefault();

        
//         //debugger;
        
//         const formData = new FormData();
//         formData.append('email', email);
//         formData.append('description', description);
//         if (image) {
//             formData.append('image', image);
//         }

        
//         const response = await fetch('http://localhost:3000/api/complaint', {
//             method: 'POST',
//             body: formData,
//         });

//         alert('hello');
//         console.log(response);
//         const result = await response.json();

//         if (result.success) {
//             //window.location.href = '/success';  // Redirect to success page
//         } else {
//             //alert('here');
//             setError(result.message);
//         }
//     };

//     return (
//         <div>
//             <h2>Submit Complaint</h2>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Email (required): </label>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Complaint Description (required): </label>
//                     <textarea
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Upload Image (optional): </label>
//                     <input
//                         type="file"
//                         onChange={(e) => setImage(e.target.files[0])}
//                         accept="image/*"
//                     />
//                 </div>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default ComplaintForm;
import React, { useState } from 'react';
import './ProfessionalPortfolioForm.css';

const ProfessionalPortfolioForm = ({ title, depart }) => {
    // Single useState to hold all form fields
    const [formData, setFormData] = useState({
        name: '',
        titleField: '',
        targetedKeywords: '',
        education: '',
        certification: '',
        contact: '',
    });

    const [error, setError] = useState('');

    console.log(title, depart);

    // Handle input changes for all form fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const profileData = {
            Name: formData.name,
            Title: formData.titleField,
            TargetedKeywords: formData.targetedKeywords,
            Education: formData.education,
            Certification: formData.certification,
            Contact: formData.contact,
        };

        const response = await fetch('http://localhost:3000/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profileData),
        });

        const result = await response.json();

        if (result.success) {
            alert('Profile submitted successfully');
            // Optionally reset the form fields
            setFormData({
                name: '',
                titleField: '',
                targetedKeywords: '',
                education: '',
                certification: '',
                contact: '',
            });
        } else {
            setError(result.message);
        }
    };

    return (
        <div className="form-container">
            <h2>Submit Professional Portfolio</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name (required): </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Title (required): </label>
                    <input
                        type="text"
                        name="titleField"
                        value={formData.titleField}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Targeted Keywords (required): </label>
                    <input
                        type="text"
                        name="targetedKeywords"
                        value={formData.targetedKeywords}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Education (required): </label>
                    <input
                        type="text"
                        name="education"
                        value={formData.education}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Certification (required): </label>
                    <input
                        type="text"
                        name="certification"
                        value={formData.certification}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Contact (required): </label>
                    <input
                        type="text"
                        name="contact"
                        value={formData.contact}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default ProfessionalPortfolioForm;
