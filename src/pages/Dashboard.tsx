import FileNode from "../components/FileNode";
import { data } from "../data/FileSystem";

const Dashboard = () => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md min-h-96">
      <h2 className="text-3xl font-bold mb-6">File Explorer (Recursion)</h2>
      <div className="border p-4 rounded bg-gray-50">
        <FileNode item={data} />
      </div>
    </section>
  );
};

export default Dashboard;
