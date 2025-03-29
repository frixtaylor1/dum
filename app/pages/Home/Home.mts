import { div } from "../../../elements/elements.mjs";

export default function Home(): HTMLElement {
  function Content(): HTMLElement {
    return div({ textContent: "Hello from Home"});
  }
  return Content();
}
