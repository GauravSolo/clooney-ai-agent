import React from 'react';

function GoogleHomepage() {
  return (
    <div className="flex flex-col h-screen">
      {/* Top Navigation Bar */}
      <div className="flex justify-end items-center p-4">
        <a href="#" className="mr-4 hover:underline">Gmail</a>
        <a href="#" className="mr-4 hover:underline">Images</a>
        <button className="rounded-full bg-blue-500 text-white px-4 py-2 ml-4 hover:bg-blue-700">Sign in</button>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col items-center justify-center flex-grow">
        {/* Google Logo */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-blue-500">Google</h1>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-2xl">
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 hover:shadow-md focus-within:shadow-md">
            <svg className="h-6 w-6 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input
              type="text"
              className="flex-grow outline-none"
              placeholder="Search Google or type a URL"
            />
            <svg className="h-6 w-6 text-gray-400 ml-2 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0-4v-4"></path>
            </svg>
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-700 font-medium rounded px-4 py-2 mx-2">Google Search</button>
            <button className="bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-700 font-medium rounded px-4 py-2 mx-2">I'm Feeling Lucky</button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-100 border-t border-gray-300 py-4">
        <div className="flex justify-between items-center px-8">
          <div className="text-gray-700">India</div>
          <div className="flex items-center">
            <a href="#" className="text-gray-700 mr-4 hover:underline">Advertising</a>
            <a href="#" className="text-gray-700 mr-4 hover:underline">Business</a>
            <a href="#" className="text-gray-700 hover:underline">How Search works</a>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-gray-700 mr-4 hover:underline">Privacy</a>
            <a href="#" className="text-gray-700 mr-4 hover:underline">Terms</a>
            <a href="#" className="text-gray-700 hover:underline">Settings</a>
          </div>
        </div>
      </div>
      {/* Chrome Promotion */}
      <div className="absolute bottom-20 right-10 bg-white rounded-lg shadow-md w-96 p-4">
        <div className="flex items-start">
          <div className="mr-4">
            <img
              src="https://www.google.com/chrome/static/images/chrome-logo.svg"
              alt="Chrome Logo"
              className="h-10 w-10"
            />
          </div>
          <div>
            <h3 className="font-semibold">Choose Chrome, the browser built by Google</h3>
            <p className="text-sm text-gray-600">Try a fast, secure browser with automatic updates</p>
            <div className="mt-4 flex justify-end">
              <button className="bg-white border border-blue-500 text-blue-500 rounded-md px-4 py-2 text-sm mr-2 hover:bg-gray-100">Not interested</button>
              <button className="bg-blue-500 text-white rounded-md px-4 py-2 text-sm hover:bg-blue-700">Try it</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoogleHomepage;
