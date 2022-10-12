import Head from "next/head";
import { Button, Stack } from "@mantine/core";
import styles from "../styles/Home.module.css";
import { Tabs } from "@mantine/core";
import InputEmail from "../componants/InputEmail";
import InputPassword from "../componants/InputPassword";
import Logo from "../componants/Logo";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundImage:
          "linear-gradient(135deg, rgba(186, 186, 186, 0.03) 0%, rgba(186, 186, 186, 0.03) 10%,rgba(133, 133, 133, 0.03) 10%, rgba(133, 133, 133, 0.03) 14%,rgba(38, 38, 38, 0.03) 14%, rgba(38, 38, 38, 0.03) 17%,rgba(93, 93, 93, 0.03) 17%, rgba(93, 93, 93, 0.03) 25%,rgba(80, 80, 80, 0.03) 25%, rgba(80, 80, 80, 0.03) 45%,rgba(239, 239, 239, 0.03) 45%, rgba(239, 239, 239, 0.03) 100%),linear-gradient(135deg, rgba(236, 236, 236, 0.03) 0%, rgba(236, 236, 236, 0.03) 47%,rgba(182, 182, 182, 0.03) 47%, rgba(182, 182, 182, 0.03) 63%,rgba(223, 223, 223, 0.03) 63%, rgba(223, 223, 223, 0.03) 81%,rgba(86, 86, 86, 0.03) 81%, rgba(86, 86, 86, 0.03) 89%,rgba(23, 23, 23, 0.03) 89%, rgba(23, 23, 23, 0.03) 90%,rgba(226, 226, 226, 0.03) 90%, rgba(226, 226, 226, 0.03) 100%),linear-gradient(45deg, rgba(52, 52, 52, 0.03) 0%, rgba(52, 52, 52, 0.03) 31%,rgba(246, 246, 246, 0.03) 31%, rgba(246, 246, 246, 0.03) 63%,rgba(188, 188, 188, 0.03) 63%, rgba(188, 188, 188, 0.03) 71%,rgba(15, 15, 15, 0.03) 71%, rgba(15, 15, 15, 0.03) 87%,rgba(127, 127, 127, 0.03) 87%, rgba(127, 127, 127, 0.03) 93%,rgba(234, 234, 234, 0.03) 93%, rgba(234, 234, 234, 0.03) 100%),linear-gradient(90deg, #ffffff,#ffffff)",
      }}
    >
      <Head>
        <title>Authentication Page</title>
        <meta name="description" content="Present Sir Login Page" />
      </Head>

      <div
        style={{
        // marginTop:"10%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            // marginTop: 10,
            marginBottom: 80,
          }}
        >
          <Logo size={40} weight={800} logoSize={92} />
        </div>
        <Tabs variant="outline" defaultValue="login">
          <Tabs.List position="center">
            <Tabs.Tab value="login">Login</Tabs.Tab>
            <Tabs.Tab value="signup">Signup</Tabs.Tab>
            <Tabs.Tab value="reset">Reset Password</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="login" pt="xs">
            <Stack
              align="center"
              spacing="sm"
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
                height: 300,
              })}
            >
              <InputEmail />
              <InputPassword />
              <Button
                color="cyan"
                radius="xs"
                leftIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-login"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                    <path d="M20 12h-13l3 -3m0 6l-3 -3" />
                  </svg>
                }
                uppercase
              >
                Login
              </Button>
            </Stack>
          </Tabs.Panel>
          <Tabs.Panel value="signup" pt="xs">
            <Stack
              align="center"
              spacing="sm"
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
                height: 300,
              })}
            >
              <InputEmail />
              <InputPassword />
              <Button
                color="cyan"
                radius="xs"
                leftIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-login"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                    <path d="M20 12h-13l3 -3m0 6l-3 -3" />
                  </svg>
                }
                uppercase
              >
                Signup
              </Button>
            </Stack>
          </Tabs.Panel>
          <Tabs.Panel value="reset" pt="xs">
            <Stack
              align="center"
              spacing="sm"
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
                height: 300,
              })}
            >
              <InputEmail />
              <Button
                color="red"
                radius="xs"
                leftIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-rotate-rectangle"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M16.3 5h.7a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h5l-2.82 -2.82m0 5.64l2.82 -2.82"
                      transform="rotate(-45 12 12)"
                    />
                  </svg>
                }
                uppercase
              >
                Reset Password
              </Button>
            </Stack>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
}
