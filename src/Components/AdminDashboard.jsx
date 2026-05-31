import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { FaUserFriends, FaMobileAlt, FaDesktop, FaSignOutAlt } from "react-icons/fa";

const AdminDashboard = () => {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchAnalytics = async () => {
      const token = localStorage.getItem("admin_token");
      if (!token) {
        navigate("/admin");
        return;
      }

      try {
        const response = await axios.get("http://localhost:8000/admin/analytics", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAnalytics(response.data);
      } catch (error) {
        enqueueSnackbar("Session expired. Please login again.", { variant: "error" });
        localStorage.removeItem("admin_token");
        navigate("/admin");
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, [navigate, enqueueSnackbar]);

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    navigate("/admin");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">Analytics Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-blue-500 flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full text-blue-500 text-2xl">
              <FaUserFriends />
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase font-semibold">Total Visits</p>
              <p className="text-2xl font-bold">{analytics?.total_visits}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-green-500 flex items-center space-x-4">
            <div className="bg-green-100 p-3 rounded-full text-green-500 text-2xl">
              <FaDesktop />
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase font-semibold">Desktop Visits</p>
              <p className="text-2xl font-bold">
                {analytics?.visits.filter((v) => v.device === "desktop").length}
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-purple-500 flex items-center space-x-4">
            <div className="bg-purple-100 p-3 rounded-full text-purple-500 text-2xl">
              <FaMobileAlt />
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase font-semibold">Mobile Visits</p>
              <p className="text-2xl font-bold">
                {analytics?.visits.filter((v) => v.device === "mobile").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Section</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Device</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">IP Address</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {analytics?.visits.map((visit) => (
                  <tr key={visit.id} className="hover:bg-gray-50 transition duration-150">
                    <td className="px-6 py-4">
                      <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-medium">
                        {visit.section}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600 flex items-center space-x-2">
                      {visit.device === "desktop" ? <FaDesktop /> : <FaMobileAlt />}
                      <span>{visit.device}</span>
                    </td>
                    <td className="px-6 py-4 text-gray-600 font-mono text-sm">{visit.ip_address}</td>
                    <td className="px-6 py-4 text-gray-500 text-sm">
                      {new Date(visit.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
