import React, { useState } from "react";

const Resume = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        professionalSummary: "",
        education: "",
        skills: "",
        careerObjective: "",
        experience: "",
        achievements: "",
    });

    const [submitted, setSubmitted] = useState(false);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-zinc-900 text-white flex flex-col items-center justify-center">

            <hr className="w-2/5 my-10" />

            <h1 className="text-2xl font-bold mb-8 text-white">Resume Builder</h1>

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-2xl bg-white p-8 shadow-lg rounded-lg space-y-6"
            >
                <div>
                    <label className="block text-gray-700 font-medium">Name</label>
                    <textarea
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        name="name"
                        placeholder="Enter your Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Email</label>
                    <textarea
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        name="email"
                        placeholder="Enter Email address"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Phone Number</label>
                    <textarea
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        name="phone"
                        placeholder="Enter Phone number"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Professional Summary</label>
                    <textarea
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        name="professionalSummary"
                        placeholder="Summarize your professional experience"
                        value={formData.professionalSummary}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Education Qualifications</label>
                    <textarea
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        name="education"
                        placeholder="List your education qualifications"
                        value={formData.education}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Academic and Non-Academic Skills</label>
                    <textarea
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        name="skills"
                        placeholder="List your skills"
                        value={formData.skills}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Career Objective</label>
                    <textarea
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        name="careerObjective"
                        placeholder="What is your career objective?"
                        value={formData.careerObjective}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Experience and Internships</label>
                    <textarea
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        name="experience"
                        placeholder="Describe your experience and internships"
                        value={formData.experience}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Skills and Achievements</label>
                    <textarea
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        name="achievements"
                        placeholder="List your skills and achievements"
                        value={formData.achievements}
                        onChange={handleChange}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                    Submit
                </button>
            </form>

            {submitted && (
                <div className="mt-10 w-full max-w-2xl bg-white text-black p-8 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold mb-6 text-center">Resume</h2>

                    <div className="border-b pb-4 mb-4">
                        <h3 className="text-xl font-semibold">Contact Information</h3>
                        <p><strong>Name:</strong> {formData.name}</p>
                        <p><strong>Email:</strong> {formData.email}</p>
                        <p><strong>Phone:</strong> {formData.phone}</p>
                    </div>

                    <div className="border-b pb-4 mb-4">
                        <h3 className="text-xl font-semibold">Professional Summary</h3>
                        <p>{formData.professionalSummary}</p>
                    </div>

                    <div className="border-b pb-4 mb-4">
                        <h3 className="text-xl font-semibold">Education</h3>
                        <p>{formData.education}</p>
                    </div>

                    <div className="border-b pb-4 mb-4">
                        <h3 className="text-xl font-semibold">Skills</h3>
                        <p>{formData.skills}</p>
                    </div>

                    <div className="border-b pb-4 mb-4">
                        <h3 className="text-xl font-semibold">Career Objective</h3>
                        <p>{formData.careerObjective}</p>
                    </div>

                    <div className="border-b pb-4 mb-4">
                        <h3 className="text-xl font-semibold">Experience</h3>
                        <p>{formData.experience}</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">Achievements</h3>
                        <p>{formData.achievements}</p>
                    </div>
                </div>

            )}
        </div>
    );
};

export default Resume;
