import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar"; // adjust path if needed
import axios from "axios";

const API_URL = "http://localhost:2000/api/jobs"; // backend URL

function NewestJob() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get(API_URL);
      setJobs(res.data);
      setFilteredJobs(res.data); // initialize filtered jobs
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
      alert("Failed to load jobs");
    }
  };

  const handleSearch = (searchTerm, locationTerm) => {
    const filtered = jobs.filter((job) => {
      const matchesTitle = job.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesLocation =
        job.city.toLowerCase().includes(locationTerm.toLowerCase()) ||
        job.country.toLowerCase().includes(locationTerm.toLowerCase());
      return matchesTitle && matchesLocation;
    });

    setFilteredJobs(filtered);
    setVisibleCount(8); // reset pagination when searching
    setShowMore(true);
  };

  const handleToggle = () => {
    setVisibleCount(showMore ? filteredJobs.length : 8);
    setShowMore(!showMore);
  };

  return (
    <div className="bg-gray-50">
      <h1 className="text-4xl md:text-6xl text-center font-semibold pt-10">
        Newest Jobs For You
      </h1>
      <p className="text-center text-xl text-gray-500 pt-4">
        Get the fastest application so that your name is above others
      </p>

      {/* Search Bar Component */}
      <SearchBar onSearch={handleSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-12">
        {filteredJobs.length > 0 ? (
          filteredJobs.slice(0, visibleCount).map((job) => (
            <section key={job.id}>
              <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      {job.company}
                    </p>
                    <h2 className="text-sm text-gray-500">{job.title}</h2>
                  </div>
                </div>
                <div className="flex gap-2 mb-2">
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {job.type}
                  </span>
                  <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded">
                    {job.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  📍 {job.city}, {job.country}
                </p>
                <p className="text-blue-700 font-semibold text-sm my-2">
                  ${job.minSalary} - ${job.maxSalary} / {job.period}
                </p>
                <button
                  onClick={() => navigate(`/jobs/${job.id}`)}
                  className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  View Details
                </button>
              </div>
            </section>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No jobs found.
          </p>
        )}
      </div>

      <div className="text-center pb-12">
        {filteredJobs.length > 8 && (
          <button
            onClick={handleToggle}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
          >
            {showMore ? "Show More" : "Show Less"}
          </button>
        )}
      </div>
    </div>
  );
}

export default NewestJob;
