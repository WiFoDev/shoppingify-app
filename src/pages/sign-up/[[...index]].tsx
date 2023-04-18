import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
  <section className="fixed inset-0 z-10 grid h-screen w-full place-content-center bg-white">
    <SignUp
      path="/sign-up"
      routing="path"
      signInUrl="/sign-in"
      redirectUrl="/items"
    />
  </section>
);
export default SignUpPage;
