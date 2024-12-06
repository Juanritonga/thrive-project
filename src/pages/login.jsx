import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes

const Login = ({ setIsAuthenticated }) => {
  const images = [
    "https://s3-alpha-sig.figma.com/img/4b63/af82/0420c6f4f669edd06fa7686e00d7ccbf?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GlRggYrooYBzbpVgEajcLhYXCYQgWrMZKL-1kBryEENvstqJiB~xgPWLWUzVz1IyqL2pv8xoc~Q~NZGbfmtM9yvaIuU2T8DU2Ec19QMoSvNdNpXW7g7KVSDt0PhKhvtRhX3XYj0FE1L5XqHd3MmtJeXpJ3-gKNjbBuqmGWWop4k8ekiDtnMzp~bbXs3dXkzZQUvnTx88Zk9Pp9uA9aT42zeEVPv6UsqZxAyOKJSTOhxhGYObxTHqtTHSCGrG~xut8AWVfgqBbaCpvjw~iXBIPa-TUqWCVJc0cBqEmfOuWv0JeGInXy62h9Gc8pjE9EmzXSCqJTx1zT4iL4XccFc9Ig__",
    "https://png.pngtree.com/background/20230526/original/pngtree-white-desk-with-a-laptop-and-a-monitor-picture-image_2751387.jpg",
    "https://s3-alpha-sig.figma.com/img/4b63/af82/0420c6f4f669edd06fa7686e00d7ccbf?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GlRggYrooYBzbpVgEajcLhYXCYQgWrMZKL-1kBryEENvstqJiB~xgPWLWUzVz1IyqL2pv8xoc~Q~NZGbfmtM9yvaIuU2T8DU2Ec19QMoSvNdNpXW7g7KVSDt0PhKhvtRhX3XYj0FE1L5XqHd3MmtJeXpJ3-gKNjbBuqmGWWop4k8ekiDtnMzp~bbXs3dXkzZQUvnTx88Zk9Pp9uA9aT42zeEVPv6UsqZxAyOKJSTOhxhGYObxTHqtTHSCGrG~xut8AWVfgqBbaCpvjw~iXBIPa-TUqWCVJc0cBqEmfOuWv0JeGInXy62h9Gc8pjE9EmzXSCqJTx1zT4iL4XccFc9Ig__",
    "https://png.pngtree.com/background/20230526/original/pngtree-white-desk-with-a-laptop-and-a-monitor-picture-image_2751387.jpg",
    "https://s3-alpha-sig.figma.com/img/4b63/af82/0420c6f4f669edd06fa7686e00d7ccbf?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GlRggYrooYBzbpVgEajcLhYXCYQgWrMZKL-1kBryEENvstqJiB~xgPWLWUzVz1IyqL2pv8xoc~Q~NZGbfmtM9yvaIuU2T8DU2Ec19QMoSvNdNpXW7g7KVSDt0PhKhvtRhX3XYj0FE1L5XqHd3MmtJeXpJ3-gKNjbBuqmGWWop4k8ekiDtnMzp~bbXs3dXkzZQUvnTx88Zk9Pp9uA9aT42zeEVPv6UsqZxAyOKJSTOhxhGYObxTHqtTHSCGrG~xut8AWVfgqBbaCpvjw~iXBIPa-TUqWCVJc0cBqEmfOuWv0JeGInXy62h9Gc8pjE9EmzXSCqJTx1zT4iL4XccFc9Ig__",
    "https://png.pngtree.com/background/20230526/original/pngtree-white-desk-with-a-laptop-and-a-monitor-picture-image_2751387.jpg",
    "https://s3-alpha-sig.figma.com/img/4b63/af82/0420c6f4f669edd06fa7686e00d7ccbf?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GlRggYrooYBzbpVgEajcLhYXCYQgWrMZKL-1kBryEENvstqJiB~xgPWLWUzVz1IyqL2pv8xoc~Q~NZGbfmtM9yvaIuU2T8DU2Ec19QMoSvNdNpXW7g7KVSDt0PhKhvtRhX3XYj0FE1L5XqHd3MmtJeXpJ3-gKNjbBuqmGWWop4k8ekiDtnMzp~bbXs3dXkzZQUvnTx88Zk9Pp9uA9aT42zeEVPv6UsqZxAyOKJSTOhxhGYObxTHqtTHSCGrG~xut8AWVfgqBbaCpvjw~iXBIPa-TUqWCVJc0cBqEmfOuWv0JeGInXy62h9Gc8pjE9EmzXSCqJTx1zT4iL4XccFc9Ig__",
    "https://png.pngtree.com/background/20230526/original/pngtree-white-desk-with-a-laptop-and-a-monitor-picture-image_2751387.jpg",
    "https://s3-alpha-sig.figma.com/img/4b63/af82/0420c6f4f669edd06fa7686e00d7ccbf?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GlRggYrooYBzbpVgEajcLhYXCYQgWrMZKL-1kBryEENvstqJiB~xgPWLWUzVz1IyqL2pv8xoc~Q~NZGbfmtM9yvaIuU2T8DU2Ec19QMoSvNdNpXW7g7KVSDt0PhKhvtRhX3XYj0FE1L5XqHd3MmtJeXpJ3-gKNjbBuqmGWWop4k8ekiDtnMzp~bbXs3dXkzZQUvnTx88Zk9Pp9uA9aT42zeEVPv6UsqZxAyOKJSTOhxhGYObxTHqtTHSCGrG~xut8AWVfgqBbaCpvjw~iXBIPa-TUqWCVJc0cBqEmfOuWv0JeGInXy62h9Gc8pjE9EmzXSCqJTx1zT4iL4XccFc9Ig__",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const userData = {
    username: "admin@admin.com",
    password: "12345",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleLogin = () => {
    if (username === userData.username && password === userData.password) {
      setError("");
      setIsAuthenticated(true);
      localStorage.setItem("user", username);
      navigate("/");
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="lg:w-2/3 w-full h-1/2 lg:h-full bg-cover bg-center flex justify-center items-center relative">
        <div
          className="absolute w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        ></div>

        <div className="absolute bottom-6 lg:bottom-12 flex justify-center items-center space-x-2 bg-white p-2 rounded-lg">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentImageIndex === index ? "bg-custom-blue" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>

      <div className="lg:w-1/3 w-full h-1/2 lg:h-full">
        <div className="w-full bg-custom-blue">
          <div className="flex justify-center py-4 lg:py-8">
            <div className="text-center">
              <img
                src="./thrive.png"
                alt="Company Logo"
                className="max-w-[80px] lg:max-w-[100px] w-auto h-auto mb-2 lg:mb-4"
              />
            </div>
          </div>
        </div>

        <div className="w-full bg-white">
          <div className="container bg-white mx-auto mt-4 lg:mt-10 px-4 sm:px-6 md:px-8 lg:px-10">
            <div className="w-full bg-white py-6">
              <h2 className="text-lg lg:text-xl font-semibold text-custom-blue mb-4 lg:mb-6">
                Login
              </h2>

              {error && <p className="text-red-500 mb-4 lg:mb-6">{error}</p>}

              <div className="mb-4 lg:mb-6">
                <div className="flex items-center border border-gray-300 rounded-lg p-2">
                  <i className="fa-solid fa-user bg-gray-200 text-gray-400 mr-2 p-2 lg:p-4 rounded-lg"></i>
                  <input
                    type="text"
                    placeholder="Email / Whatsapp"
                    className="w-full outline-none text-sm lg:text-base"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-4 lg:mb-6">
                <div className="flex items-center border border-gray-300 rounded-lg p-2">
                  <i className="fa-solid fa-lock bg-gray-200 text-gray-400 mr-2 p-2 lg:p-4 rounded-lg"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full outline-none text-sm lg:text-base"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="text-center mb-4 lg:mb-6">
                <a href="#" className="text-custom-blue text-sm lg:text-base">
                  Forgot password?
                </a>
              </div>

              <button
                className="w-full lg:w-2/3 font-bold bg-custom-blue text-white py-3 lg:py-4 rounded-lg mb-4 lg:mb-6 mx-auto block hover:bg-blue-900"
                onClick={handleLogin}
              >
                Log in
              </button>

              <button className="w-full lg:w-2/3 font-bold border border-gray-300 text-custom-blue py-3 lg:py-4 rounded-lg mx-auto block hover:bg-gray-200">
                Request Access
              </button>

              <div className="text-center text-gray-400 mt-10 lg:mt-16 text-sm lg:text-base">
                Powered by Altru
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  setIsAuthenticated: PropTypes.func.isRequired,
};

export default Login;
