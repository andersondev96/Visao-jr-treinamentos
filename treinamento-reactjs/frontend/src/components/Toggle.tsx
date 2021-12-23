import React from "react";

import { DragSwitch } from "react-dragswitch";
import "react-dragswitch/dist/index.css";

import { Container, Label } from "../styles/components/Toggle";

export default function Toggle({ checked, onChange }) {
  return (
    <Container>
      <Label>Valor fixo</Label>
      <DragSwitch
        onColor="#1263E6"
        className="toogle"
        checked={checked}
        onChange={onChange}
      />
    </Container>
  );
}
