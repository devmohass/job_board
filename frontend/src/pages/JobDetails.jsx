import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:2000/api/jobs";

function JobDetails() {
  const {id} = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchJob = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${API_URL}/${id}`);
        setJob(res.data);
      } catch (err) {
        setError("Job not found.");
        console.error(err);
      }
      setLoading(false);
    };

    fetchJob();
  }, [id]);

  if (loading) {
    return (
      <p className="text-center py-10 text-gray-500">Loading job details...</p>
    );
  }

  if (error) {
    return <p className="text-center py-10 text-red-500">{error}</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow rounded-lg p-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h1 className="text-1xl font-bold text-gray-800">{job.company}</h1>
            <p className="text-gray-700 text-md mt-1">{job.title}</p>
          </div>
          <button
            onClick={() => {
              const companyEmail = `${job.email}`; // e.g. hormud@gmail.com
              const toEmail = encodeURIComponent(companyEmail);
              const subject = encodeURIComponent(
                "Job Application for " + job.title
              );

              const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${toEmail}&su=${subject}`;

              window.open(gmailUrl, "_blank");
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Get in touch
          </button>
        </div>

        {/* Job Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm text-gray-500">Category</h3>
              <p className="text-gray-800 font-medium">{job.category}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Job Type</h3>
              <p className="text-gray-800 font-medium">{job.type}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Salary</h3>
              <p className="text-gray-800 font-medium">
                ${job.minSalary} - ${job.maxSalary} / {job.period}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm text-gray-500">Location</h3>
              <p className="text-gray-800 font-medium">
                {job.location}, {job.city}, {job.country}
              </p>
            </div>

            {Array.isArray(job.requirements) && job.requirements.length > 0 && (
              <div>
                <h3 className="text-sm text-gray-500">Requirements</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <div>
          <h3 className="text-sm text-gray-500 mb-2">Description</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            {job.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
