import { Outlet, useLocation, Link } from "react-router-dom";

const MasterData = () => {
  const location = useLocation();

  const getBreadcrumbs = () => {
    const paths = location.pathname.split("/").filter(Boolean);
    const breadcrumbPath = [
      <Link
        key="dashboard"
        to="/"
        className="ml-4 text-custom-blue fa-solid fa-calculator"
      />,
    ];

    paths.forEach((path, index) => {
      const to = `/${paths.slice(0, index + 1).join("/")}`;
      breadcrumbPath.push(
        <span key={to}>
          {" > "}
          <Link
            to={to}
            className={`text-custom-blue ${
              location.pathname === to ? "font-bold" : "text-gray-500"
            }`}
          >
            {path.charAt(0).toUpperCase() + path.slice(1)}
          </Link>
        </span>
      );
    });

    return breadcrumbPath;
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="text-black">
        <h1 className="text-2xl font-bold text-custom-blue ml-3 mt-4">
          MASTER DATA
        </h1>
        <div className="text-sm">{getBreadcrumbs()}</div>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default MasterData;
