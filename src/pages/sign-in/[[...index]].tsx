import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <section className="grid w-full place-content-center pt-40">
    <SignIn
      path="/sign-in"
      routing="path"
      signUpUrl="/sign-up"
      redirectUrl="/items"
    />
  </section>
);
export default SignInPage;
