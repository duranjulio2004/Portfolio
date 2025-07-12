export default function Navbar() {
return (
    <nav className="flex items-center justify-left px-6 py-8  shadow-sm">
        {/* Center links */}
        <ul className="flex space-x-8">
            <li>
                <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                    Home
                </a>
            </li>
            <li>
                <a
                    href="#projects"
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                    Projects
                </a>
            </li>
            <li>
                <a
                    href="#blog"
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                    Blog
                </a>
            </li>
            <li>
                <a
                    href="#contact"
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                    Contact
                </a>
            </li>
        </ul>
    </nav>
);
}
