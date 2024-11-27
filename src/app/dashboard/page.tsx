import { auth } from "@/../auth";
const Dasboard = async () => {
  const session = await auth();
  return (
    <div className="max-w-screen-xl mx-auto py-6 p4">
      <h1 className="text-2xl">Dasboard</h1>
      <h2 className="text-xl">
        Welcome Back : <span className="font-bold">{session?.user?.name}</span>
      </h2>
      <pre>{JSON.stringify(session)}</pre>
    </div>
  );
};

export default Dasboard;
