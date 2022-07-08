import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { Input, Spacer } from "@nextui-org/react";
import useLogin from "../hooks/auth/useLogin";
import useRegister from "../hooks/auth/useRegister";

export default function Home() {
  const login = useLogin();
  const register = useRegister();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    try {
      const response = await login(data);
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <form onSubmit={handleSubmit}>
          <Input clearable bordered labelPlaceholder="Email" id="email" />
          <Spacer y={1.6} />
          <Input.Password
            clearable
            bordered
            labelPlaceholder="Password"
            id="password"
          />
          <Spacer y={1.6} />
          <button>Login</button>
        </form>
      </section>
    </Layout>
  );
}
