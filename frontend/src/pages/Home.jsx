import React, { useState } from "react";
import AuthModal from "../components/AuthModal"; // Path correct?

function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-[#EFF5FF] shadow-md relative">
      {/* MAIN Section */}
      <div className="block md:flex justify-between px-8 md:px-24 py-12">
        {/* LEFT SECTION */}
        <section>
          <div className="block px-4 pt-6">
            <h1 className="text-black text-6xl font-bold md:text-8xl pt-6 leading-tight">
              Your Future <br />
              Starts with <br />
              <span className="text-blue-500">Joblin!</span>
            </h1>
            <p className="text-gray-700 md:text-xl pt-4">
              Discover jobs that match your skills and passion. Type and
              explore!
            </p>

            {/* Sign In / Up Button */}
            <button
              onClick={() => setModalOpen(true)}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Sign In / Sign Up
            </button>

            {/* Testimonials Avatars */}
            <div className="flex items-center gap-4 mt-6">
              <div className="flex -space-x-4">
                <img
                  src="/avatar1.jpg"
                  alt="user1"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="/avatar2.jpg"
                  alt="user2"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="/avatar3.jpg"
                  alt="user3"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="/avatar4.jpg"
                  alt="user4"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
              <h1 className="text-gray-700">
                Over <span className="text-blue-700">999+ </span>
                jobseekers are successfully hired
              </h1>
            </div>
          </div>
        </section>

        {/* RIGHT SECTION IMAGE */}
        <section className="hidden md:flex items-center">
          <img src="/woman.png" alt="woman" className="max-w-md" />
        </section>
      </div>

      {/* AUTH MODAL */}
      <AuthModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default Home;
