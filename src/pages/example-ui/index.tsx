import React, { useEffect, useState } from "react";
import { SignIn } from "@portkey/did-ui-react";
import { Button } from "antd";

export default function ExampleUI() {
  const [open, setOpen] = useState<boolean>();
  return (
    <>
      <SignIn open={open} chainId="AELF" />
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        BUtton
      </Button>
    </>
  );
}
