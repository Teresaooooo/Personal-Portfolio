import { useEffect } from "react";
import { FiAlignJustify } from "react-icons/fi";

// 畫面縮小時 有圖片<FiAlignJustify />
export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className=" flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            {" "}
            Teresa<span className="text-blue-500">.Personal Portfolio</span>
          </a>
          {/* 圖示 */}
          <div
            className="flex w-7 h-5 relative cursor-pointer z-40 md:hidden items-center"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <FiAlignJustify color="#fff" size={30} />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hovor:text-white transition-colors"
            >
              {" "}
              Home{" "}
            </a>
            <a
              href="#about"
              className="text-gray-300 hovor:text-white transition-colors"
            >
              {" "}
              About{" "}
            </a>
            <a
              href="#project"
              className="text-gray-300 hovor:text-white transition-colors"
            >
              {" "}
              Project{" "}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hovor:text-white transition-colors"
            >
              {" "}
              Contact{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
