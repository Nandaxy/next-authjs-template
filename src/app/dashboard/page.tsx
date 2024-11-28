import { auth } from "@/../auth";

const Dashboard = async () => {
  const session = await auth();
  const formattedSession = JSON.stringify(session, null, 2);

  return (
    <div className="max-w-screen-xl mx-auto py-6 px-4">
      <h1 className="text-2xl">Dashboard</h1>
      <h2 className="text-xl">
        Welcome Back: <span className="font-bold">{session?.user?.name}</span>
      </h2>
      <pre className="mt-4 p-4 bg-gray-100 rounded-md text-sm text-gray-800 overflow-x-auto">
        {formattedSession}
      </pre>
    </div>
  );
};

export default Dashboard;
