const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Your Company</h2>
            <p className="text-gray-400">Making the web beautiful</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-purple-400 transition duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-purple-400 transition duration-300">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-purple-400 transition duration-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-gray-400">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </footer>
    )
  }
  
  export default Footer