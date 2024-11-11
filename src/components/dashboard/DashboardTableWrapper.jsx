/* eslint-disable react/prop-types */

const DashboardTableWrapper = ({ children }) => {
  return (
    <div className="relative max-w-[1000px] m-auto p-5  shadow-md sm:rounded-lg">
      {children}
    </div>
  );
};

export default DashboardTableWrapper;
