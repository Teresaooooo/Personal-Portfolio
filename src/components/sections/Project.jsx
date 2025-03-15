import { FaReact } from "react-icons/fa";
import { RevealOnScroll } from "./RevealOnScroll";

export const Project = () => {
  return (
    <section
      id="project"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:borser-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">React</h3>
              <p className="text-gray-400 mb-4">I'm learning now.</p>
              <div>
                {["React", "Node.js", "Docker"].map((item, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    {" "}
                    {/* 圖示 */}
                    View Project 👉{" "}
                    <FaReact className="ml-4" color="pink" size={25} />
                  </a>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:borser-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">React</h3>
              <p className="text-gray-400 mb-4">I'm learning now.</p>
              <div>
                {["React", "Node.js", "Docker"].map((item, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    {" "}
                    {/* 圖示 */}
                    View Project 👉{" "}
                    <FaReact className="ml-4" color="pink" size={25} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
