import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans antialiased">
      {/* Global Top Bar */}
      <header className="bg-gray-800 text-white flex items-center justify-between h-12 px-4">
        <div className="flex items-center">
          {/* Asana Logo (Placeholder) */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
            <path d="M12 2L2 7L2 17L12 22L22 17L22 7L12 2Z" fill="currentColor"/>
          </svg>
          <span className="font-bold">asana</span>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4">
          <input type="search" placeholder="Search" className="w-full bg-gray-700 text-white rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        {/* Help and User Icons (Placeholders) */}
        <div className="flex items-center">
          <button className="mx-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 hover:text-gray-300">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM1 12C1 5.925 5.925 1 12 1C18.075 1 23 5.925 23 12C23 18.075 18.075 23 12 23C5.925 23 1 18.075 1 12ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z" fill="currentColor"/>
            </svg>
          </button>
          <button className="rounded-full bg-gray-600 w-8 h-8 flex items-center justify-center text-sm">?</button>
        </div>
      </header>

      <div className="flex h-screen">
        {/* Left Sidebar */}
        <aside className="bg-gray-900 text-gray-400 w-64 py-4 px-3 space-y-2">
          {/* Navigation Items */}
          <nav>
            <a href="#" className="flex items-center py-2 px-4 rounded-md hover:bg-gray-800 hover:text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M12 2L2 7L2 17L12 22L22 17L22 7L12 2Z" fill="currentColor"/>
              </svg>
              Home
            </a>
            <a href="#" className="flex items-center py-2 px-4 rounded-md hover:bg-gray-800 hover:text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path fillRule="evenodd" clipRule="evenodd" d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="currentColor"/>
              </svg>
              Inbox
            </a>
            <a href="#" className="flex items-center py-2 px-4 rounded-md hover:bg-gray-800 hover:text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M12 2L2 7L2 17L12 22L22 17L22 7L12 2Z" fill="currentColor"/>
              </svg>
              My tasks
            </a>
            <a href="#" className="flex items-center py-2 px-4 rounded-md hover:bg-gray-800 hover:text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M12 2L2 7L2 17L12 22L22 17L22 7L12 2Z" fill="currentColor"/>
              </svg>
              Projects
            </a>
            <a href="#" className="flex items-center py-2 px-4 rounded-md hover:bg-gray-800 hover:text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M12 2L2 7L2 17L12 22L22 17L22 7L12 2Z" fill="currentColor"/>
              </svg>
              Portfolios
            </a>
          </nav>

          {/* Work Section */}
          <div className="mt-4">
            <div className="flex items-center justify-between px-4">
              <span className="text-sm font-medium">Work</span>
              <button className="hover:text-white">+</button>
            </div>
            <a href="#" className="flex items-center py-2 px-4 rounded-md hover:bg-gray-800 hover:text-white">Cross-functional project</a>
          </div>

          {/* Advanced Free Trial */}
          <div className="bg-gray-800 rounded-md p-3 mt-4">
            <span className="text-green-500 text-xs">Advanced free trial</span>
            <p className="text-xs">8 days left</p>
            <button className="bg-green-500 hover:bg-green-600 text-white rounded-md py-1 px-2 text-sm mt-2 w-full">Add billing info</button>
          </div>

            {/* Navigation Redesign */}
          <div className="bg-gray-800 rounded-md p-3 mt-4">
            <span className="text-gray-500 text-xs">Navigation Redesign</span>
            <a href="#" className="text-gray-500 text-xs">Send feedback</a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
          {/* Date and Greeting */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-600">Saturday, November 22</p>
              <h1 className="text-2xl font-semibold">Good evening, Gaurav</h1>
            </div>

            {/* My Week dropdown */}
            <div>
              <button className="bg-white border border-gray-300 rounded-md py-1 px-3 text-sm hover:bg-gray-200">My week &#9662;</button>
            </div>
          </div>

          {/* My Tasks Section */}
          <section className="bg-white rounded-md shadow-sm p-4 mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className="rounded-full bg-yellow-200 w-8 h-8 flex items-center justify-center mr-2 text-yellow-800">GS</div>
                <h2 className="text-lg font-medium">My tasks</h2>
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 mx-1">
                   <path d="M4 4H20V6H4V4ZM4 11H20V13H4V11ZM4 18H20V20H4V18Z" fill="currentColor"/>
                 </svg>
              </div>

                {/* Task completion info */}
              <div className="flex items-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mx-1">
                  <path d="M12 2L2 7L2 17L12 22L22 17L22 7L12 2Z" fill="currentColor"/>
                </svg>
                <span className="text-sm">0 tasks completed</span>
                <span className="mx-2">·</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500 mx-1">
                  <path d="M4 4H20V6H4V4ZM4 11H20V13H4V11ZM4 18H20V20H4V18Z" fill="currentColor"/>
                </svg>
                <span className="text-sm">0 collaborators</span>
                <button className="bg-white border border-gray-300 rounded-md py-1 px-2 text-sm ml-3 hover:bg-gray-200">Customize</button>
              </div>
            </div>

            {/* Task Tabs */}
            <div className="flex items-center mb-3">
              <button className="text-blue-500 font-medium mr-4">Upcoming</button>
              <button className="text-gray-600 mr-4">Overdue (2)</button>
              <button className="text-gray-600">Completed</button>
            </div>

            {/* Create Task Button */}
            <button className="text-blue-500">+ Create task</button>

            {/* Three Dots Icon */}
            <div className="absolute top-4 right-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                  <path d="M5 12C3.9 12 3 12.9 3 14C3 15.1 3.9 16 5 16C6.1 16 7 15.1 7 14C7 12.9 6.1 12 5 12ZM12 12C10.9 12 10 12.9 10 14C10 15.1 10.9 16 12 16C13.1 16 14 15.1 14 14C14 12.9 13.1 12 12 12ZM19 12C17.9 12 17 12.9 17 14C17 15.1 17.9 16 19 16C20.1 16 21 15.1 21 14C21 12.9 20.1 12 19 12Z" fill="currentColor"/>
                </svg>
              </div>

          </section>

          {/* Learn Asana Section */}
          <section className="bg-white rounded-md shadow-sm p-4 mb-6">
            <h2 className="text-lg font-medium mb-4">Learn Asana</h2>
            <div className="flex overflow-x-auto space-x-4">
              {/* Learn Asana Cards (Placeholder) */}
              <div className="bg-red-50 rounded-md p-4 w-64 flex-shrink-0">
                <div className="relative">
                  <img src="https://placehold.co/240x120/ffcccc/000000" alt="Learn Asana" className="mb-2 rounded-md" />
                    <span className="absolute bottom-3 left-3 bg-black text-white text-xs py-1 px-2 rounded-full">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline mr-1">
                        <path d="M12 2L2 7L2 17L12 22L22 17L22 7L12 2Z" fill="currentColor"/>
                      </svg>
                      3 min
                    </span>
                </div>
                <h3 className="font-medium">Getting started</h3>
                <p className="text-sm text-gray-600">Learn the basics and see how Asana helps you get work done.</p>
              </div>

                <div className="bg-red-50 rounded-md p-4 w-64 flex-shrink-0">
                  <div className="relative">
                    <img src="https://placehold.co/240x120/ffcccc/000000" alt="Learn Asana" className="mb-2 rounded-md" />
                    <span className="absolute bottom-3 left-3 bg-black text-white text-xs py-1 px-2 rounded-full">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline mr-1">
                        <path d="M12 2L2 7L2 17L12 22L22 17L22 7L12 2Z" fill="currentColor"/>
                      </svg>
                      5 min read
                    </span>
                  </div>
                  <h3 className="font-medium">Manage student organizations</h3>
                  <p className="text-sm text-gray-600">Learn how to organize meetings, events, and projects in Asana.</p>
                </div>

              <div className="bg-red-50 rounded-md p-4 w-64 flex-shrink-0">
                <div className="relative">
                  <img src="https://placehold.co/240x120/ffcccc/000000" alt="Learn Asana" className="mb-2 rounded-md" />
                  <span className="absolute bottom-3 left-3 bg-black text-white text-xs py-1 px-2 rounded-full">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline mr-1">
                     <path d="M12 2L2 7L2 17L12 22L22 17L22 7L12 2Z" fill="currentColor"/>
                    </svg>
                    15 min
                  </span>
                </div>
                <h3 className="font-medium">Manage projects in Asana</h3>
                <p className="text-sm text-gray-600">Plan, organize, and manage your projects effectively.</p>
              </div>

              <div className="bg-red-50 rounded-md p-4 w-64 flex-shrink-0">
                <div className="relative">
                  <img src="https://placehold.co/240x120/ffcccc/000000" alt="Learn Asana" className="mb-2 rounded-md" />
                  <span className="absolute bottom-3 left-3 bg-black text-white text-xs py-1 px-2 rounded-full">
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline mr-1">
                     <path d="M12 2L2 7L2 17L12 22L22 17L22 7L12 2Z" fill="currentColor"/>
                     </svg>
                    5 min read
                  </span>
                </div>
                <h3 className="font-medium">Avoid silos with...</h3>
                <p className="text-sm text-gray-600">Learn how to add for better visibility</p>
              </div>
            </div>
            {/* Three Dots Icon */}
            <div className="absolute top-4 right-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                <path d="M5 12C3.9 12 3 12.9 3 14C3 15.1 3.9 16 5 16C6.1 16 7 15.1 7 14C7 12.9 6.1 12 5 12ZM12 12C10.9 12 10 12.9 10 14C10 15.1 10.9 16 12 16C13.1 16 14 15.1 14 14C14 12.9 13.1 12 12 12ZM19 12C17.9 12 17 12.9 17 14C17 15.1 17.9 16 19 16C20.1 16 21 15.1 21 14C21 12.9 20.1 12 19 12Z" fill="currentColor"/>
              </svg>
            </div>

          </section>

            {/* Projects and People sections */}
            <div className="flex space-x-4">
              {/* Projects Section */}
              <section className="bg-white rounded-md shadow-sm p-4 mb-6 w-1/2">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-lg font-medium">Projects</h2>
                  <button className="bg-white border border-gray-300 rounded-md py-1 px-2 text-sm hover:bg-gray-200">Recents &#9662;</button>
                </div>
              </section>

              {/* People Section */}
              <section className="bg-white rounded-md shadow-sm p-4 mb-6 w-1/2">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-lg font-medium">People</h2>
                  <button className="bg-white border border-gray-300 rounded-md py-1 px-2 text-sm hover:bg-gray-200">Frequent collaborators &#9662;</button>
                </div>
                {/* Three Dots Icon */}
                <div className="absolute top-4 right-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                    <path d="M5 12C3.9 12 3 12.9 3 14C3 15.1 3.9 16 5 16C6.1 16 7 15.1 7 14C7 12.9 6.1 12 5 12ZM12 12C10.9 12 10 12.9 10 14C10 15.1 10.9 16 12 16C13.1 16 14 15.1 14 14C14 12.9 13.1 12 12 12ZM19 12C17.9 12 17 12.9 17 14C17 15.1 17.9 16 19 16C20.1 16 21 15.1 21 14C21 12.9 20.1 12 19 12Z" fill="currentColor"/>
                  </svg>
                </div>
              </section>
            </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;