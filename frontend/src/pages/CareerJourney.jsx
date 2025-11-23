import React from "react";

function CareerJourney() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-20">
      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
        Career Journey
      </h1>

      {/* Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        {/* 🔹 Left: Steps */}
        <div className="flex flex-col justify-between">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Steps to Your Dream Job
          </h2>

          {/* Step 1 */}
          <div className="flex gap-6 items-start mb-8">
            <div className="w-28 h-28 rounded-xl bg-blue-100 text-blue-500 flex items-center justify-center font-semibold">
              IMG 1
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full font-semibold text-sm shadow">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Create an Account
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Start your journey with a profile to unlock job matches.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-6 items-start mb-8">
            <div className="w-28 h-28 rounded-xl bg-blue-100 text-blue-500 flex items-center justify-center font-semibold">
              IMG 2
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full font-semibold text-sm shadow">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Upload Your CV
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Let recruiters notice you with a well-crafted CV upload.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-6 items-start">
            <div className="w-28 h-28 rounded-xl bg-blue-100 text-blue-500 flex items-center justify-center font-semibold">
              IMG 3
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full font-semibold text-sm shadow">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Apply for Jobs
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Explore roles and apply to those that fit your goals.
              </p>
            </div>
          </div>
        </div>

        {/* 🔸 Right: Achievements */}
        <div className="flex flex-col justify-between h-full bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Our Hiring Achievements
            </h2>
            <p className="text-gray-600 text-md  leading-relaxed">
              Whether you're an employer looking for talent or a job seeker on
              the move, Joblin has helped thousands achieve success. Be the next
              one to win.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 ">
            {/* Card 1 */}
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl flex gap-3 items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.121 17.804A10.968 10.968 0 0112 15c2.5 0 4.847.857 6.879 2.304M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900">300+</div>
                <div className="text-gray-600 text-sm">Profile Boosts</div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl flex gap-3 items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.121 17.804A10.968 10.968 0 0112 15c2.5 0 4.847.857 6.879 2.304M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900">999+</div>
                <div className="text-gray-600 text-sm">Easy Applications</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl flex gap-3 items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.121 17.804A10.968 10.968 0 0112 15c2.5 0 4.847.857 6.879 2.304M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900">400+</div>
                <div className="text-gray-600 text-sm">Interviews</div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl flex gap-3 items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.121 17.804A10.968 10.968 0 0112 15c2.5 0 4.847.857 6.879 2.304M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900">600+</div>
                <div className="text-gray-600 text-sm">Successful Hires</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerJourney;
