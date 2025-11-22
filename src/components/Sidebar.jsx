import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
    const location = useLocation();

    // Helper to check if route is active
    const isActive = (path) => location.pathname === path;

    return (
        <aside className="w-64 bg-gray-50 border-r border-gray-200 h-screen flex flex-col">
            {/* Logo/Header */}
            <div className="p-4 border-b border-gray-200">
                <h1 className="text-xl font-bold text-gray-800">Asana Clone</h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1">
                <Link
                    to="/home"
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/home')
                            ? 'bg-white text-gray-900 shadow-sm'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Home
                </Link>

                <Link
                    to="/projects"
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/projects')
                            ? 'bg-white text-gray-900 shadow-sm'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    Projects
                </Link>

                <Link
                    to="/tasks"
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/tasks')
                            ? 'bg-white text-gray-900 shadow-sm'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                    Tasks
                </Link>
            </nav>

            {/* Footer/User section */}
            <div className="p-4 border-t border-gray-200">
                <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                        U
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">User</p>
                        <p className="text-xs text-gray-500">user@example.com</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
