import { div } from "../../../elements/elements.mjs";

export default function About(): HTMLElement {
  function Content(): HTMLElement {
    return div({
      textContent: "Hello From About",
    });
  }
  return Content();
}
