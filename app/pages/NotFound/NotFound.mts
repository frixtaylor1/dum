import { a, div, p } from "../../../elements/elements.mjs";
import { PATH_HOME } from "../../application/ApplicationModel.mjs";

export default function NotFound(): HTMLElement {
  function Content(): HTMLElement {
    const goHome: CallableFunction = () => {
      window.location.href = PATH_HOME;
    };

    return div(
      {
        style: {
          width: "100%",
          height: "100%",
          color: "whitesmoke",
          fontSize: "2rem",
          padding: "1rem",
        },
      },
      p(
        { style: { fontSize: "1.5rem" }, textContent: "Go to " },
        a({
          textContent: "home",
          onclick: goHome,
          style: {
            textDecoration: "underline",
            cursor: "pointer",
          },
        })
      ),
      div({
        style: {
          justifyContent: "space-between",
          textAlign: "center",
        },
        textContent: "404 Status code. Page not found!",
      })
    );
  }
  return Content();
}
