import Sidebar from './Sidebar';

function Layout({ children }) {
    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-y-auto bg-white">
                {children}
            </main>
        </div>
    );
}

export default Layout;
