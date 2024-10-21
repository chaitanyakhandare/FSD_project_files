import React, { useState } from "react";

const SimpleForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        email: "",
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Simple email validation
    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email); // Basic email format validation
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        // Check for empty fields
        if (!formData.name) newErrors.name = "Please enter your name.";
        if (!formData.address) newErrors.address = "Please enter your address.";
        if (!formData.email) {
            newErrors.email = "Please enter your email.";
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = "Please enter a valid email.";
        }

        // If there are errors, show them
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setSuccessMessage(""); // Clear success message if errors
        } else {
            setErrors({});
            setSuccessMessage("Form submitted successfully!");
            // Optionally, reset form fields
            setFormData({
                name: "",
                address: "",
                email: "",
            });
        }
    };

    return (
        <form className="simple-form w-fit flex flex-col space-x-3 px-16 text-while" onSubmit={handleSubmit}>
            <h2 className="text-white font-semibold text-xl mb-4">Simple User Form</h2>

            {/* Name input */}
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "error" : ""}
                />
                {errors.name && <p className="error-message">{errors.name}</p>}
            </div>

            {/* Address input */}
            <div>
                <input
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    value={formData.address}
                    onChange={handleChange}
                    className={errors.address ? "error" : ""}
                />
                {errors.address && <p className="error-message">{errors.address}</p>}
            </div>

            {/* Email input */}
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "error" : ""}
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            {/* Submit button */}
            <button type="submit" className="px-5 py-2 rounded-md bg-blue-600 font-medium hover:bg-blue-800">Submit</button>

            {/* Success message */}
            {successMessage && <p className="success-message">{successMessage}</p>}
        </form>
    );
};

export default SimpleForm;
