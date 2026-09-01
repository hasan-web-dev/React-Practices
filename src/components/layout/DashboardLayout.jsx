import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const DashboardLayout = () => {
    return (
        <div className="min-h-screen bg-slate-100">
            <div className="flex min-h-screen">

                {/* Sidebar */}
                <aside className="hidden w-64 shrink-0 bg-slate-900 text-white md:block">
                    <div className="border-b border-slate-800 p-6">
                        <h1 className="text-2xl font-bold">
                            TaskFlow
                        </h1>
                    </div>

                    <nav className="p-4">
                        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                            Menu
                        </p>

                        <div className="space-y-1">

                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    `block rounded-lg px-3 py-2.5 text-sm font-medium transition ${isActive
                                        ? "bg-white text-slate-900"
                                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                    }`
                                }
                            >
                                Dashboard
                            </NavLink>

                            <NavLink
                                to="/dashboard/tasks"
                                className={({ isActive }) =>
                                    `block rounded-lg px-3 py-2.5 text-sm font-medium transition ${isActive
                                        ? "bg-white text-slate-900"
                                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                    }`
                                }
                            >
                                Tasks
                            </NavLink>

                            <NavLink
                                to="/dashboard/profile"
                                className={({ isActive }) =>
                                    `block rounded-lg px-3 py-2.5 text-sm font-medium transition ${isActive
                                        ? "bg-white text-slate-900"
                                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                    }`
                                }
                            >
                                Profile
                            </NavLink>

                            <NavLink
                                to="/dashboard/settings"
                                className={({ isActive }) =>
                                    `block rounded-lg px-3 py-2.5 text-sm font-medium transition ${isActive
                                        ? "bg-white text-slate-900"
                                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                    }`
                                }
                            >
                                Settings
                            </NavLink>

                        </div>
                    </nav>
                </aside>

                {/* Main Content */}
                <div className="flex min-w-0 flex-1 flex-col">

                    {/* Navbar */}
                    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
                        <h2 className="text-xl font-semibold text-slate-800">
                            Task Management
                        </h2>

                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                            H
                        </div>
                    </header>

                    {/* Page Content */}
                    <main className="flex-1 p-6">
                        <Outlet />
                    </main>

                </div>

            </div>
        </div>
    )
}

export default DashboardLayout
