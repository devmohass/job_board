import React from "react";

function BlogSection() {
  return (
    <div className="px-4 py-10 pb-44 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          Our Blog: Your Path to Career Success
        </h2>
        <p className="text-gray-500 mt-2">
          Stay updated with the latest trends in hiring and career success
        </p>
      </div>

      <div className="grid md:grid-cols-3 mt-12 gap-20">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-500 cursor-pointer hover:scale-90 transition-all duration-500 ease-out transition">
          <img
            src="/3.jpg"
            alt="Job Change"
            className="h-48 w-full object-cover"
          />
          <div className="p-5">
            <div className="flex gap-2 text-sm text-gray-500 mb-2">
              <span className="bg-gray-200 px-2 py-1 rounded">Job Market</span>
              <span className="bg-gray-200 px-2 py-1 rounded">Career</span>
            </div>
            <h3 className="font-semibold text-lg mb-1">
              When Should You Change Your Job?
            </h3>
            <p className="text-gray-600 text-sm mb-2">
              By Mona Amiri • 13 Mar 2025
            </p>
            <p className="text-gray-500 text-sm">
              A professional resume increases your chances of getting hired...
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-500 cursor-pointer hover:scale-90 transition-all duration-500 ease-out transition">
          <img
            src="/2.jpg"
            alt="Stand Out"
            className="h-48 w-full object-cover"
          />
          <div className="p-5">
            <div className="flex gap-2 text-sm text-gray-500 mb-2">
              <span className="bg-gray-200 px-2 py-1 rounded">Freelancing</span>
              <span className="bg-gray-200 px-2 py-1 rounded">Skills</span>
            </div>
            <h3 className="font-semibold text-lg mb-1">
              Standing Out in Job Market
            </h3>
            <p className="text-gray-600 text-sm mb-2">
              By Fateme Moradi • 16 Feb 2025
            </p>
            <p className="text-gray-500 text-sm">
              In a competitive job market, showcasing unique skills...
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-500 cursor-pointer hover:scale-90 transition-all duration-500 ease-out transition">
          <img src="/1.jpg" alt="Skills" className="h-48 w-full object-cover" />
          <div className="p-5">
            <div className="flex gap-2 text-sm text-gray-500 mb-2">
              <span className="bg-gray-200 px-2 py-1 rounded">Career</span>
              <span className="bg-gray-200 px-2 py-1 rounded">Interview</span>
            </div>
            <h3 className="font-semibold text-lg mb-1">
              Skills Employers Seek
            </h3>
            <p className="text-gray-600 text-sm mb-2">
              By Ali Amiri • 12 May 2025
            </p>
            <p className="text-gray-500 text-sm">
              Employers value a combination of technical expertise...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
