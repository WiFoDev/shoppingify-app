import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
  <section className="grid w-full place-content-center pt-40">
    <SignUp
      path="/sign-up"
      routing="path"
      signInUrl="/sign-in"
      redirectUrl="/items"
    />
  </section>
);
export default SignUpPage;
