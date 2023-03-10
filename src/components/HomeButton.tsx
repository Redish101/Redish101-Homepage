import { Button } from "@fluentui/react-components";
import { ReactElement } from "react";

export function HomePrimaryButton(props: { children: any; link: string }) {
  return (
    <Button
      appearance="primary"
      onClick={() => {
        location.href = props.link;
      }}
    >
      {props.children}
    </Button>
  );
}

export function HomeButton(props: { children: any; link: string }) {
  return (
    <Button
      onClick={() => {
        location.href = props.link;
      }}
    >
      {props.children}
    </Button>
  );
}
