import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="lg:mt-24 md:mt-20 mt-16 rounded-2xl pb-6 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-gray-300 py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo and About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Asha Foundation</h2>
          <p className="text-sm leading-relaxed">
            A non-profit organization committed to bringing hope, support, and opportunity to underprivileged communities. Join us and make a difference.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:underline hover:text-white">About Us</a></li>
            <li><a href="#donate" className="hover:underline hover:text-white">Donate</a></li>
            <li><a href="#impact" className="hover:underline hover:text-white">Impact</a></li>
            <li><a href="#contact" className="hover:underline hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm">Email: info@ashafoundation.org</p>
          <p className="text-sm">Phone: +880 1234 567890</p>
          <p className="text-sm">Address:  Pakisthan</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex items-center gap-4 text-xl">
            <a href="" className="hover:text-white"><FaFacebook /></a>
            <a href="https://www.instagram.com/worldbrkr/" className="hover:text-white"><FaInstagram /></a>
            <a href="https://web.telegram.org/k/#@ashaaindustries" className="hover:text-white"><FaTelegram /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Asha Foundation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
