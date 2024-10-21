import { useState, useEffect } from "react";

const FormComponent = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        rollNo: "",
        password: "",
        confirmPassword: "",
        contactNumber: "",
    });

    const [students, setStudents] = useState([]); // New state for storing all students


    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle form submit for registration (create)
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simple password confirmation check
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await fetch("http://localhost:5001/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                console.log(data.message); // Success
            } else {
                console.error("Failed:", data.error); // Error
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    // Handle update student info
    const handleUpdate = async () => {
        try {
            const response = await fetch(`http://localhost:5001/api/update/${formData.rollNo}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                console.log(data.message); // Success
            } else {
                console.error("Failed to update:", data.error); // Error
            }
        } catch (error) {
            console.error("An error occurred while updating:", error);
        }
    };

    // Handle delete student record
    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:5001/api/delete/${formData.rollNo}`, {
                method: "DELETE",
            });

            const data = await response.json();
            if (response.ok) {
                console.log(data.message); // Success
            } else {
                console.error("Failed to delete:", data.error); // Error
            }
        } catch (error) {
            console.error("An error occurred while deleting:", error);
        }
    };

    const fetchStudents = async () => {
        try {
            const response = await fetch("http://localhost:5001/api/students");
            const data = await response.json();
            if (response.ok) {
                setStudents(data); // Set the fetched data to state
            } else {
                console.error("Failed to fetch students:", data.error);
            }
        } catch (error) {
            console.error("Error fetching students:", error);
        }
    };

    useEffect(() => {
        fetchStudents(); // Fetch students when component mounts
    }, []);


    return (


        <div className="w-full flex flex-col space-y-10">
            <div className="w-full flex items-start justify-between space-x-3">
                <form onSubmit={handleSubmit} className="w-fit flex flex-col space-y-3">
                    <h3 className="font-medium text-2xl tracking-tight">Student Registration</h3>

                    <input
                        className="px-5 py-2 rounded-md bg-transparent outline-none border border-zinc-500"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="px-5 py-2 rounded-md bg-transparent outline-none border border-zinc-500"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="px-5 py-2 rounded-md bg-transparent outline-none border border-zinc-500"
                        type="text"
                        name="rollNo"
                        placeholder="Roll No"
                        value={formData.rollNo}
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="px-5 py-2 rounded-md bg-transparent outline-none border border-zinc-500"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="px-5 py-2 rounded-md bg-transparent outline-none border border-zinc-500"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="px-5 py-2 rounded-md bg-transparent outline-none border border-zinc-500"
                        type="text"
                        name="contactNumber"
                        placeholder="Contact Number"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" className="px-5 py-2 rounded-md bg-blue-600 font-medium hover:bg-blue-800">
                        Register
                    </button>
                </form>

                <form onSubmit={handleSubmit} className="w-fit flex flex-col space-y-3">
                    <h3 className="font-medium text-2xl tracking-tight">Update Details</h3>

                    <input
                        className="px-5 py-2 rounded-md bg-transparent outline-none border-2 border-green-300"
                        type="text"
                        name="rollNo"
                        placeholder="Roll No"
                        value={formData.rollNo}
                        onChange={handleChange}
                        required
                    />
                    
                    <input
                        className="px-5 py-2 rounded-md bg-transparent outline-none border border-zinc-500"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="px-5 py-2 rounded-md bg-transparent outline-none border border-zinc-500"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />

                    

                    <input
                        className="px-5 py-2 rounded-md bg-transparent outline-none border border-zinc-500"
                        type="text"
                        name="contactNumber"
                        placeholder="Contact Number"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                    />

                    <button type="button" onClick={handleUpdate} className="px-5 py-2 rounded-md bg-green-600 font-medium hover:bg-green-800">
                        Update
                    </button>
                </form>

                <form onSubmit={handleSubmit} className="w-fit flex flex-col space-y-3">
                    <h3 className="font-medium text-2xl tracking-tight">Delete Details</h3>

                    <input
                        className="px-5 py-2 rounded-md bg-transparent outline-none border border-zinc-500"
                        type="text"
                        name="rollNo"
                        placeholder="Roll No"
                        value={formData.rollNo}
                        onChange={handleChange}
                        required
                    />

                    <button type="button" onClick={handleDelete} className="px-5 py-2 rounded-md bg-red-600 font-medium hover:bg-red-800">
                        Delete
                    </button>
                </form>

            </div>

            <hr />

            <div>
                <h3 className="font-medium text-2xl tracking-tight">Displaying all Details</h3>
                <ul>
                    {students.map((student) => (
                        <li key={student.rollNo} className="my-2 p-2 border-b border-zinc-400">
                            <p><strong>Name:</strong> {student.firstName} {student.lastName}</p>
                            <p><strong>Roll No:</strong> {student.rollNo}</p>
                            <p><strong>Contact Number:</strong> {student.contactNumber}</p>
                            <p><strong>Password:</strong> {student.password}</p> {/* Displaying password */}
                        </li>

                    ))}
                </ul>
            </div>


        </div>

    );
};

export default FormComponent;
