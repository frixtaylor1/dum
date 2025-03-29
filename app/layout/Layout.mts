import { div } from "../../elements/elements.mjs";
import Aside from "./components/Aside/Aside.mjs";
import { Content } from "./components/Content/Content.mjs";
import Header from "./components/Header/Header.mjs";

export default function Layout(children: HTMLElement): HTMLElement {
  return div(
    {
      style: {
        backgroundColor: "#333333FF",
        width: "100%",
        height: "98%",
        display: "flex",
        flexDirection: "column",
        marginLeft: "0",
        marginTop: "0",
        color: "whitesmoke",
      },
    },
    Header(),
    div(
      { style: { width: "100%", height: "100%", display: "flex" } },
      Aside(),
      Content(children)
    )
  );
}
