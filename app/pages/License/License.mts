import { div } from "../../../elements/elements.mjs";

export default function License(): HTMLElement {
  function Content(): HTMLElement {
    return div({ textContent: "Hello From License" });
  }
  return Content();
}
