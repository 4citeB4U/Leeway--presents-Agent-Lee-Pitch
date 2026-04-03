export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-white font-bold text-lg mb-2">
              <span className="text-cyan-400">Agent</span> Lee
            </div>
            <p className="text-gray-400 text-sm">Software as a Civilization</p>
            <p className="text-gray-500 text-xs mt-2">A LeeWay Industries Product</p>
          </div>
          <div>
            <div className="text-gray-300 font-semibold text-sm mb-2">LeeWay Industries</div>
            <p className="text-gray-500 text-xs">Creative Branch: LeeWay Innovations</p>
            <p className="text-gray-500 text-xs mt-1">Founded by Leonard J Lee</p>
          </div>
          <div>
            <div className="text-gray-300 font-semibold text-sm mb-2">Core Law</div>
            <p className="text-gray-400 text-xs italic">
              "Many agents exist. Few execute. One system runs."
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} LeeWay Industries. All rights reserved. Agent Lee is a governed agentic operating system by LeeWay Innovations.
        </div>
      </div>
    </footer>
  )
}
