"use client"

import { useState } from "react";

const SearchCollege = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // Example college data for the cards
  const colleges = [
    {
      name: "Harvard University",
      photo: "/assets/placeholder-1-1.webp",
      location: "Cambridge, MA",
    },
    {
      name: "Stanford University",
      photo: "/assets/placeholder-1-1.webp",
      location: "Stanford, CA",
    },
    {
      name: "MIT",
      photo: "/assets/placeholder-1-1.webp",
      location: "Cambridge, MA",
    },
    {
      name: "University of Oxford",
      photo: "/assets/placeholder-1-1.webp",
      location: "Oxford, UK",
    },
    {
      name: "California Institute of Technology",
      photo: "/assets/placeholder-1-1.webp",
      location: "Pasadena, CA",
    },
  ];

  // Filter colleges based on search query
  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <nav className="bg-blue-600 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-2xl font-semibold">
              College Booking
            </div>
            <input
              type="text"
              placeholder="Search for a college..."
              className="px-4 py-2 rounded-md shadow-md"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </nav>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredColleges.map((college, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={college.photo}
                  alt="College"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-800">
                    {college.name}
                  </h2>
                  <p className="text-gray-500">{college.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchCollege;
