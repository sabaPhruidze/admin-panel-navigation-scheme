import { useUsers } from "../hooks/useUsers";
//using && operator  and  table element as well,animate-pulse
const Users = () => {
  const { users, loading, active, error } = useUsers();

  return (
    <section className="bg-white p-8 rounded-lg shadow-md min-h-96">
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
    </section>
  );
};

export default Users;
