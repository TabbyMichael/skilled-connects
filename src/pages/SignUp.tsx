import { SignUpForm } from "@/components/auth/SignUpForm";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <SignUpForm />
      <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-medium text-primary hover:text-primary-hover"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;