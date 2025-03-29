import { main } from "../../../../elements/elements.mjs";

export function Content(children: HTMLElement): HTMLElement {
  return main(
    {
      style: {
        display: "flex",
        width: "100%",
        height: "100%",
        border: "1px solid #000",
        padding: "1rem"
      },
    },
    children
  );
}
