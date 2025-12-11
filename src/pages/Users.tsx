import React, { useState, useEffect } from "react";
//using Promise ,&& operator and forEach, table element as well,animate-pulse
const Users = () => {
  interface Users {
    id: number;
    name: string;
    role: string;
    status: string;
  }

  const [users, setUsers] = useState<Users[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [active, setActiveCount] = useState<number>(0);
  const [error, setError] = useState<String | null>(null);

  useEffect(() => {
    const mockApiCall = new Promise<Users[]>((resolve, reject) => {
      setTimeout(() => {
        // only in order to test reject as well and.catch I am writing this
        const isSuccess = Math.random() > 0.2;
        if (isSuccess) {
          resolve([
            { id: 1, name: "George", role: "Admin", status: "Active" },
            { id: 2, name: "Ana", role: "Editor", status: "Inactive" },
            { id: 3, name: "Anderson", role: "Viewer", status: "Active" },
            { id: 4, name: "Elene", role: "Editor", status: "Active" },
          ]);
        } else {
          reject("No connection with server");
        }
      }, 2000);
    });
    //Promise chain
    mockApiCall
      .then((data) => {
        setUsers(data);
        //counting people who are active
        let count = 0;
        data.forEach((user) => {
          if (user.status === "Active") {
            count++;
          }
        });
        setActiveCount(count);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-white p-8 rounded-lg shadow-md min-h-[25rem]">
      <h2 className="text-3xl font-bold mb-6">Users</h2>
      {/* when loading */}
      {loading && <p className="text-blue-600 animate-pulse">Loading...</p>}
      {/*when Error  */}
      {error && (
        <p className="text-red-600 font-bold border border-red-500 p-2 rounded">
          ❌ {error}
        </p>
      )}
      {/* when succed */}
      {!loading && !error && (
        <>
          <h3 className="mb-4 flex items-center gap-2 text-green-700 font-bold leading-none">
            <span className="inline-block w-2 h-2 rounded-full bg-green-700 animate-pulse" />
            <span>Active Users: {active}</span>
          </h3>

          <table className="min-w-full border text-left">
            <thead>
              <tr>
                <th className="p-2 border">ID</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Role</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-2">{item.id}</td>
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">{item.role}</td>
                  <td
                    className={`${
                      Object.is(item.status, "Active")
                        ? "text-green-700"
                        : "text-red-500"
                    } `}
                  >
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Users;
