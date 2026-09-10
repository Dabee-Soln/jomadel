import { Link } from "react-router";

const ExploreComplan = () => {
    return (
        <section className="py-14 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-10">
                    <p className="text-green-700 font-semibold uppercase tracking-wider mb-2">
                        Health. Wealth. Legacy.
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4">
                        A Wellness and Entrepreneurship Opportunity
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Jomadel combines wellness with an entrepreneurial platform designed
                        to help individuals build sustainable income streams, grow strong
                        networks, develop leaders, and work toward greater financial freedom.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-10">
                    {[
                        ["Build Your Network", "Grow through a straightforward replication model designed to cultivate accomplished leaders."],
                        ["Create Income Streams", "Access immediate, daily, monthly and annual earning opportunities through Jomadel's compensation structure."],
                        ["Grow Your Legacy", "Pursue recognition, travel opportunities, time freedom and a legacy that can benefit future generations."],
                    ].map(([title, text]) => (
                        <div key={title} className="border border-gray-200 rounded-xl p-6 shadow-sm">
                            <h3 className="text-xl font-semibold text-green-700 mb-3">{title}</h3>
                            <p className="text-gray-600 leading-relaxed">{text}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        to="/compensation"
                        className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-3 px-7 rounded-lg transition"
                    >
                        Explore the Compensation Plan
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ExploreComplan;