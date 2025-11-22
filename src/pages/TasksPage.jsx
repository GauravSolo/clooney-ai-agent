import React from 'react';

const TasksPage = () => {
  // Placeholder data for tasks
  const tasks = [
    {
      name: 'Schedule kickoff meeting',
      dueDate: 'Nov 17 - 19',
      project: 'Cross-functional project...',
      visibility: 'My workspace',
    },
    {
      name: 'Draft project brief',
      dueDate: 'Nov 16 - 18',
      project: 'Cross-functional project...',
      visibility: 'My workspace',
    },
  ];

  return (
    <div className="flex h-screen bg-white text-gray-800">
      {/* Left Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex-shrink-0">
        {/* Logo and Navigation */}
        <div className="p-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Asana_logo.svg/2560px-Asana_logo.svg.png" alt="Asana Logo" className="h-6" />
        </div>
        <nav className="mt-6">
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">Home</a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">Inbox</a>
          <a href="#" className="block py-2 px-4 bg-gray-700">My tasks</a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">Projects</a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">Portfolios</a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">Work</a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">Company</a>
        </nav>

          {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 w-full bg-gray-800 p-4">
            <div className="flex items-center justify-between mb-2">
                <div>
                    <p className="text-xs text-gray-400">Advanced free trial</p>
                    <p className="text-xs text-gray-400">8 days left</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-green-500"></div>
            </div>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white text-xs font-semibold py-2 rounded">Add billing info</button>

             <div className="mt-4">
              <p className="text-xs text-gray-400">Navigation redesign</p>
              <a href="#" className="text-xs text-blue-500">Send feedback</a>
          </div>
          </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto p-4">
        {/* Top Navigation */}
        <header className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="text-xl font-semibold mr-2">My Tasks</span>
            <div className="relative inline-block text-left">
              <button type="button" className="inline-flex justify-center w-full rounded-sm border border-gray-300 shadow-sm px-2 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false" aria-haspopup="true">
                List
                <svg className="-mr-1 ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <a href="#" className="ml-2 text-gray-500">Board</a>
            <a href="#" className="ml-2 text-gray-500">Calendar</a>
            <a href="#" className="ml-2 text-gray-500">Dashboard</a>
            <a href="#" className="ml-2 text-gray-500">Files</a>
             <button className="ml-2 text-gray-500">+</button>
          </div>

          <div className="flex items-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              + Add task
            </button>
              <button className="bg-white text-gray-800 font-bold py-2 px-4 rounded mr-2 border border-gray-300 shadow-sm">Share</button>
            <button className="bg-white text-gray-800 font-bold py-2 px-4 rounded border border-gray-300 shadow-sm">Customize</button>
          </div>
        </header>

        {/* Task List */}
        <div className="overflow-hidden shadow rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Due date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Collaborators
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Projects
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Task visibility
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">

                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                  <details>
                      <summary className="font-semibold">Recently assigned</summary>

                        {tasks.map((task, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div>
                                    {task.name}
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-500">{task.dueDate}</div>
                              </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-500"></div>
                                </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-500">{task.project}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-500">{task.visibility}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-500"></div>
                              </td>
                            </tr>
                          ))}
                        <div>Add task...</div>

                    </details>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <details>
                      <summary className="font-semibold">Do today</summary>
                      <div>Add task...</div>
                    </details>
                  </td>
                </tr>
                 <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <details>
                      <summary className="font-semibold">Do next week</summary>
                      <div>Add task...</div>
                    </details>
                  </td>
                </tr>
                 <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <details>
                      <summary className="font-semibold">Do later</summary>
                      <div>Add task...</div>
                    </details>
                  </td>
                </tr>

                 <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                     <div>+ Add section</div>
                  </td>
                </tr>

            </tbody>
          </table>
        </div>

          {/* Bottom Navigation */}
          <footer className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <button className="text-gray-500 mr-4">Filter</button>
            <button className="text-gray-500 mr-4">Sort</button>
            <button className="text-gray-500 mr-4">Group</button>
            <button className="text-gray-500 mr-4">Options</button>
          </div>
          <div>
            <input type="text" placeholder="Search" className="border border-gray-300 rounded-md px-2 py-1" />
          </div>
        </footer>
      </main>
    </div>
  );
};

export default TasksPage;