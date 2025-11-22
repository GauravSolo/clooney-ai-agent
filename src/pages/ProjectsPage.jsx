import React from 'react';

const ProjectsPage = () => {
  return (
    <div className="flex h-screen bg-white text-gray-800">
      {/* Left Sidebar */}
      <aside className="w-64 bg-[#2E2E30] flex-shrink-0 p-4">
        {/* Asana Logo */}
        <div className="mb-8">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true" className="inline-block align-middle mr-2">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
            <path d="M12 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
            <path d="M12 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
          </svg>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul>
            <li className="mb-2">
              <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700 rounded-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true" className="inline-block align-middle mr-2">
                  <path d="M21 5.97l-5.47 4.76 4.32 5.07-1.51 1.31-4.32-5.07-5.47 4.76V5.97z"></path>
                  <path d="M3 5.97h16V7.97H3z"></path>
                  <path d="M3 17.97h16v2H3z"></path>
                </svg>
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700 rounded-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true" className="inline-block align-middle mr-2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5V9L12 14 2 9v8z"></path>
                </svg>
                Inbox
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700 rounded-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true" className="inline-block align-middle mr-2">
                  <path d="M3 3h18v2H3zM3 9h18v2H3zM3 15h18v2H3zM3 21h18v2H3z"></path>
                </svg>
                My tasks
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block py-2 px-4 bg-[#434547] text-white hover:bg-gray-700 rounded-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true" className="inline-block align-middle mr-2">
                  <path d="M3 3h18v2H3zM3 9h18v2H3zM3 15h18v2H3zM3 21h18v2H3z"></path>
                </svg>
                Projects
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700 rounded-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true" className="inline-block align-middle mr-2">
                  <path d="M3 3h18v2H3zM3 9h18v2H3zM3 15h18v2H3zM3 21h18v2H3z"></path>
                </svg>
                Portfolios
              </a>
            </li>
          </ul>
        </nav>

        {/* Work Section */}
        <div className="mt-8">
          <div className="flex items-center justify-between text-gray-400">
            <span className="text-sm">Work</span>
            <button className="hover:text-white">+</button>
          </div>
          <ul>
            <li className="mt-2">
              <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700 rounded-md">Cross-functional pr...</a>
            </li>
            <li className="mt-2">
              <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700 rounded-md">Cross-functional pr...</a>
            </li>
          </ul>
        </div>

        {/* Footer Section (Advanced Free Trial) */}
        <div className="absolute bottom-0 left-0 w-full p-4">
          <div className="bg-[#434547] rounded-md p-3">
            <p className="text-xs text-white">Advanced free trial</p>
            <p className="text-xs text-white">8 days left</p>
            <button className="mt-2 bg-[#E2B25B] text-black px-3 py-1 rounded-md text-sm w-full">Add billing info</button>
          </div>
          <div className="mt-3 flex items-center">
              <div className="w-6 h-6 rounded-full bg-gray-500">GS</div>
              <p className="text-xs text-white ml-2">Navigation redesign Send feedback</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header Section */}
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Browse projects</h1>
          <div className="flex items-center">
            <input type="text" placeholder="Search" className="bg-gray-100 rounded-md py-2 px-4 mr-4" />
            <button className="bg-[#1A73E8] text-white py-2 px-4 rounded-md">+ Create project</button>
          </div>
        </header>

        {/* Search and Filter */}
        <div className="mb-6">
          <div className="bg-gray-100 rounded-md py-2 px-4 flex items-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mr-2">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16a6.471 6.471 0 004.27-1.12l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
            <input type="text" placeholder="Find a project" className="bg-transparent outline-none w-full" />
          </div>
          <div className="flex mt-2">
            <button className="bg-gray-100 rounded-md py-2 px-4 mr-2">Owner</button>
            <button className="bg-gray-100 rounded-md py-2 px-4 mr-2">Members</button>
            <button className="bg-gray-100 rounded-md py-2 px-4 mr-2">Portfolios</button>
            <button className="bg-gray-100 rounded-md py-2 px-4 mr-2">Status</button>
          </div>
        </div>

        {/* Project List */}
        <div>
          {/* Table Header */}
          <div className="flex justify-between items-center py-2 text-gray-500">
            <div className="w-1/4">Name</div>
            <div className="w-1/4">Members</div>
            <div className="w-1/4">Teams and portfolios</div>
            <div className="w-1/4 text-right">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="inline-block align-middle mr-1">
                <path d="M7 14l5-5 5 5H7z"></path>
                <path d="M7 10l5 5 5-5H7z"></path>
              </svg>
              Last modified
            </div>
          </div>

          {/* Project Item */}
          <div className="flex justify-between items-center py-4 border-t border-gray-200">
            <div className="w-1/4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="inline-block align-middle mr-2">
                <path d="M2 12h20v2H2z"></path>
                <path d="M2 7h20v2H2z"></path>
              </svg>
              Cross-functional project plan
              <p className="text-xs text-green-500">Joined</p>
            </div>
            <div className="w-1/4">
              <div className="w-6 h-6 rounded-full bg-yellow-500 text-center">GS</div>
            </div>
            <div className="w-1/4">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="inline-block align-middle mr-1">
                <path d="M12 4a4 4 0 100 8 4 4 0 000-8zM4 12a8 8 0 1116 0H4z"></path>
              </svg>
              My workspace
            </div>
            <div className="w-1/4 text-right"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;