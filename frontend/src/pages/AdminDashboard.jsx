import { useEffect, useState } from "react";
import axios from "axios";
import CreateJobModal from "../components/CreateJobModal";
import { Pencil, Trash2, Plus } from "lucide-react";

const API_URL = "http://localhost:2000/api/jobs";

function AdminDashboard() {
  const [showModal, setShowModal] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [editJob, setEditJob] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      setJobs(res.data);
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
      alert("Failed to load jobs from server");
    }
    setLoading(false);
  };

  const createJob = async (jobData) => {
    try {
      const res = await axios.post(API_URL, jobData);
      setJobs((prev) => [...prev, res.data]);
      alert("Job created successfully");
    } catch (error) {
      console.error("Failed to create job:", error);
      alert("Failed to create job");
    }
  };

  const updateJob = async (jobData) => {
    try {
      const res = await axios.put(`${API_URL}/${jobData.id}`, jobData);
      setJobs((prev) =>
        prev.map((job) => (job.id === jobData.id ? res.data : job))
      );
      alert("Job updated successfully");
    } catch (error) {
      console.error("Failed to update job:", error);
      alert("Failed to update job");
    }
  };

  const deleteJob = async (jobId) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;
    try {
      await axios.delete(`${API_URL}/${jobId}`);
      setJobs((prev) => prev.filter((job) => job.id !== jobId));
      alert("Job deleted successfully");
    } catch (error) {
      console.error("Failed to delete job:", error);
      alert("Failed to delete job");
    }
  };

  const handleSubmit = (jobData) => {
    if (editJob) {
      updateJob(jobData);
    } else {
      createJob(jobData);
    }
    setShowModal(false);
    setEditJob(null);
  };

  const handleCreateClick = () => {
    setEditJob(null);
    setShowModal(true);
  };

  const handleEdit = (job) => {
    setEditJob(job);
    setShowModal(true);
  };

  return (
    <div className="p-6">
      <div className="border rounded-lg p-4 relative shadow-sm bg-white">
        <button
          onClick={handleCreateClick}
          className="absolute top-4 right-4 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          <Plus size={18} />
          Create Job
        </button>

        <h2 className="text-xl font-semibold mb-4">All Jobs</h2>

        {loading ? (
          <p>Loading jobs...</p>
        ) : jobs.length === 0 ? (
          <p className="text-gray-500">No jobs added yet.</p>
        ) : (
          <div className="space-y-3">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                    <div>
                      <p className="text-gray-500 text-sm">Title</p>
                      <p className="font-semibold">{job.title}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Company</p>
                      <p>{job.company}</p>
                    </div>
                  <div>
                      <p className="text-gray-500 text-sm">Email</p>
                      <p>{job.email}</p>
                    </div>  
                    <div>
                      <p className="text-gray-500 text-sm">Category</p>
                      <p>{job.category}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Type</p>
                      <p>{job.type}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Location</p>
                      <p>
                        {job.location}, {job.city}, {job.country}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Salary</p>
                      <p>
                        ${job.minSalary} - ${job.maxSalary} / {job.period}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-gray-500 text-sm">Requirements</p>
                      <ul className="list-disc list-inside text-gray-700 text-sm">
                        {job.requirements?.map((req, index) => (
                          <li key={index}>{req.trim()}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-2 items-start md:items-center">
                    <button
                      onClick={() => handleEdit(job)}
                      className="text-blue-600 hover:text-blue-800"
                      title="Edit"
                    >
                      <Pencil size={20} />
                    </button>
                    <button
                      onClick={() => deleteJob(job.id)}
                      className="text-red-600 hover:text-red-800"
                      title="Delete"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-gray-500 text-sm mb-1">Description</p>
                  <p className="text-sm text-gray-800">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showModal && (
        <CreateJobModal
          onClose={() => {
            setShowModal(false);
            setEditJob(null);
          }}
          onSubmit={handleSubmit}
          editJob={editJob}
        />
      )}
    </div>
  );
}

export default AdminDashboard;
