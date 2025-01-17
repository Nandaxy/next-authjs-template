import { IoLogoGithub, IoLogoGoogle } from "react-icons/io5";
import { signIn } from "@/../auth";

export const GoogleButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google" , {redirectTo: "/dashboard"});
      }}
    >
      <button
        type="submit"
        className="flex items-center justify-center gap-1 py-2.5 rounded-lg uppercase text-white bg-blue-500 w-full"
      >
        <IoLogoGoogle />
        Login with Google
      </button>
    </form>
  );
};

export const GithubButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github" , {redirectTo: "/dashboard"});
      }}
    >
      <button
        type="submit"
        className="flex items-center justify-center gap-1 py-2.5 rounded-lg uppercase text-white bg-gray-800 w-full"
      >
        <IoLogoGithub />
        Login with Github
      </button>
    </form>
  );
};
