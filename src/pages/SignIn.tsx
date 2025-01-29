import { SignInForm } from "@/components/auth/SignInForm";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <SignInForm />
      <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="font-medium text-primary hover:text-primary-hover"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;