import { a, aside, div, li, ul } from "../../../../elements/elements.mjs";
import { getOptions, shouldExportSomething } from "./AssideController.mjs";

export default function Aside(): HTMLElement {
  return aside(
    {
      style: {
        display: "flex",
        width: "20%",
        height: "100%",
        border: "1px solid #000",
        flexDirection: "column",
        justifyContent: "space-between",
      },
    },
    div(
      getOptions().map((item: { title: string; path: string }) => {
        return a(
          {
            href: item.path,
            onclick: shouldExportSomething,
            onmouseover: (e: any) => {
              e.target.style.backgroundColor = "#555555ff";
              console.log("change color ");
            },
            onmouseout: (e: any) => {
              e.target.style.backgroundColor = "";
            },
            style: {
              textDecoration: "none",
              color: "white",
            },
          },
          li({
            style: { padding: "1rem", listStyleType: "none" },
            textContent: item.title,
          })
        );
      })
    ),
    ul(
      getOptions().map((item: { title: string; path: string }) => {
        return a(
          {
            href: item.path,
            onclick: shouldExportSomething,
            style: {
              textDecoration: "underline",
              color: "white",
            },
          },
          li({ textContent: item.title })
        );
      })
    )
  );
}
