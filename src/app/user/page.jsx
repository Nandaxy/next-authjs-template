import { auth } from "@/../auth";
import { redirect } from "next/navigation";

const UserPage = async () => {
  const session = await auth();

  if (session?.user?.role !== "admin") {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen px-10 py-6">
      <h1 className="text-2xl">THIS IS USER PAGE. </h1>
      <h2 className="text-lg">PROTECTED ROUTE ONLY FOR ADMIN</h2>
    </div>
  );
};

export default UserPage;
