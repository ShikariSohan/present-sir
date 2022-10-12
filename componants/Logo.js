import { Text } from "@mantine/core";
import Router from "next/router";

export default function Logo(props) {
  const navigateToHome = () => {
    Router.push("/");
  };
  return (
    <>
      <div
        style={{ display: "flex", cursor: "pointer" }}
        onClick={navigateToHome}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-hand-rock"
          width={props.logoSize}
          height={props.logoSize}
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#00abfb"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M11 11.5v-1a1.5 1.5 0 0 1 3 0v1.5" />
          <path d="M17 12v-6.5a1.5 1.5 0 0 1 3 0v10.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" />
          <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" />
          <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" />
        </svg>
        <Text
          color="black"
          size={props.size}
          weight={props.weight}
          sx={{ margin: "auto 0" }}
        >
          Present Sir
        </Text>
      </div>
    </>
  );
}
