import AboutTech from "./AboutTech";
import CustomerService from "./CustomerService";
import QuickLinks from "./QuickLinks";
import Social from "./Social";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-200 mt-12">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <AboutTech />
                    <QuickLinks />
                    <CustomerService />
                    <Social />
                </div>
                <div
                    className="border-t border-slate-200 pt-8 text-center text-slate-600 text-sm"
                >
                    <p>&copy; 2025 Learn with sumit. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;