/* eslint-disable react/prop-types */
const DashboradTable = ({ headers, data }) => {
  return (
    <div className="overflow-x-auto ">
      <table className="w-full text-sm text-left rtl:text-right   ">
        <thead className="text-xs text-white  bg-primary ">
          <tr className=" text-center">
            {headers?.map((e, i) => {
              return (
                <th key={i} scope="col" className="px-6 py-3">
                  {e}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((ob, i) => {
            return (
              <tr
                key={i}
                className="odd:bg-white  text-center odd:text-black even:text-black even:bg-[#4022c633] border-b "
              >
                {Object.keys(ob).map((prop, propIndex) => {
                  if (prop != "id")
                    return (
                      <td key={propIndex} className="px-6 py-4  ">
                        {prop == "url" ? (
                          <img className="max-w-24 " src={ob[prop]} />
                        ) : (
                          <p className={prop == "description" ? `w-96` : ""}>
                            {ob[prop]}
                          </p>
                        )}
                      </td>
                    );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DashboradTable;
