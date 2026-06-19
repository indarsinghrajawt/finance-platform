export default function Settings() {
    return (
        <div className="flex-1 p-8 bg-[#020817] min-h-screen">

            <h1 className="text-4xl font-bold text-white mb-8">
                Settings
            </h1>

            <div className="grid grid-cols-2 gap-6">

                {/* Appearance */}
                <div className="bg-[#0e1729] rounded-2xl p-6">
                    <h2 className="text-white text-2xl font-bold mb-4">
                        Appearance
                    </h2>

                    <div className="space-y-4">

                        <div className="flex justify-between items-center">
                            <span className="text-slate-300">
                                Theme
                            </span>

                            <select className="bg-[#111c33] text-white px-4 py-2 rounded-lg">
                                <option>Dark</option>
                                <option>Light</option>
                            </select>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="text-slate-300">
                                Accent Color
                            </span>

                            <select className="bg-[#111c33] text-white px-4 py-2 rounded-lg">
                                <option>Blue</option>
                                <option>Green</option>
                                <option>Purple</option>
                            </select>
                        </div>

                    </div>
                </div>

                {/* Preferences */}
                <div className="bg-[#0e1729] rounded-2xl p-6">
                    <h2 className="text-white text-2xl font-bold mb-4">
                        Preferences
                    </h2>

                    <div className="space-y-4">

                        <div className="flex justify-between">
                            <span className="text-slate-300">
                                Currency
                            </span>

                            <span className="text-white">
                                INR (₹)
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-slate-300">
                                Market Region
                            </span>

                            <span className="text-white">
                                India
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-slate-300">
                                Notifications
                            </span>

                            <span className="text-green-500">
                                Enabled
                            </span>
                        </div>

                    </div>
                </div>

            </div>

            <div className="bg-[#0e1729] rounded-2xl p-6 mt-6">
                <h2 className="text-white text-2xl font-bold mb-4">
                    Dashboard Preferences
                </h2>

                <p className="text-slate-400">
                    Customize charts, watchlists, alerts and
                    dashboard widgets according to your needs.
                </p>
            </div>

        </div>
    );
}