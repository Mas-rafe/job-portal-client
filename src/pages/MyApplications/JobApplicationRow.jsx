import { Link } from "react-router";


const JobApplicationRow = ({ application, index }) => {
  const { _id, company, title, company_logo, status } = application;

  return (
    <>
      {/* ✅ Desktop & Tablet View (Table Row) */}
      <tr className="hidden md:table-row">
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={company_logo} alt={company} />
              </div>
            </div>
            <div>
              <div className="font-bold">{company}</div>
              <div className="text-sm opacity-50">{title}</div>
            </div>
          </div>
        </td>
        <td>
          <span className="badge badge-outline">{status || "Pending"}</span>
        </td>
        <td>
          <Link to={`/applications/${_id}`}>
            <button className="btn btn-sm btn-primary">Details</button>
          </Link>
        </td>
      </tr>

      {/* ✅ Mobile View (Card) */}
      <div className="md:hidden border rounded-lg shadow-sm p-4 bg-white mb-3">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={company_logo} alt={company} />
            </div>
          </div>
          <div>
            <h4 className="font-bold">{company}</h4>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
        </div>

        <div className="mt-2">
          <p className="text-sm">
            <span className="font-medium">Status:</span>{" "}
            {status || "Pending"}
          </p>
        </div>

        <div className="mt-3">
          <Link to={`/applications/${_id}`}>
            <button className="btn btn-sm btn-primary w-full">View Details</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default JobApplicationRow;
