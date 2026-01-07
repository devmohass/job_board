import {useEffect, useState} from "react";

function CreateJobModal({onClose, onSubmit, editJob}) {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    email: "",
    category: "",
    type: "",
    location: "",
    country: "",
    city: "",
    description: "",
    requirements: "", // ✅ Ensure it's a comma-separated string
    minSalary: "",
    maxSalary: "",
    period: "",
  });

  useEffect(() => {
    if (editJob) {
      setFormData({
        ...editJob,
        requirements: Array.isArray(editJob.requirements)
          ? editJob.requirements.join("\n")
          : "",
      });
    }
  }, [editJob]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = () => {
    // Convert requirements string to array by splitting on new lines
    const updatedData = {
      ...formData,
      requirements: formData.requirements
        ? formData.requirements
            .split("\n")
            .map((r) => r.trim())
            .filter((r) => r.length > 0)
        : [],
    };

    onSubmit(updatedData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-md">
        <h2 className="text-xl font-bold mb-4">
          {editJob ? "Edit Job" : "Create Job"}
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            name="title"
            placeholder="Job Title"
            value={formData.title}
            onChange={handleChange}
            className="border rounded p-2"
          />
          <input
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            className="border rounded p-2"
          />
          <input
            name="email"
            placeholder="Company email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded p-2"
          />
          <input
            name="category"
            placeholder="Job Category"
            value={formData.category}
            onChange={handleChange}
            className="border rounded p-2"
          />
          <input
            name="type"
            placeholder="Job Type"
            value={formData.type}
            onChange={handleChange}
            className="border rounded p-2"
          />
          <input
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="border rounded p-2"
          />
          <input
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className="border rounded p-2"
          />
          <input
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="border rounded p-2"
          />
        </div>

        <textarea
          name="description"
          placeholder="Full Job Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full mt-4 border rounded p-2"
          rows="5"
        />

        <textarea
          name="requirements"
          placeholder="Write each requirement on a new line"
          value={formData.requirements}
          onChange={handleChange}
          className="w-full mt-2 border rounded p-2"
          rows="2"
        />

        <div className="grid grid-cols-3 gap-4 mt-4">
          <input
            name="minSalary"
            placeholder="Min Salary"
            value={formData.minSalary}
            onChange={handleChange}
            className="border rounded p-2"
          />
          <input
            name="maxSalary"
            placeholder="Max Salary"
            value={formData.maxSalary}
            onChange={handleChange}
            className="border rounded p-2"
          />
          <select
            name="period"
            value={formData.period}
            onChange={handleChange}
            className="border rounded p-2">
            <option value="">Select Period</option>
            <option value="Hourly">Hourly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            {editJob ? "Update Job" : "Post Job"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateJobModal;
