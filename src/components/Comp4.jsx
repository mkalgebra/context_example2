import { NameContext } from "../App";
import { useContext } from "react";

export default function Comp4() {
  const name = useContext(NameContext);

  return <span>Ja sam {name}.</span>;
}
