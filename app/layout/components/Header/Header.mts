import { div, li, ul } from "../../../../elements/elements.mjs";
import { getConfig } from "./HeaderController.mjs";
import { HeaderItemType } from "./HeaderModel.mjs";

export default function Header(): HTMLElement {
  return div(
    {
      style: {
        display: "flex",
        width: "100%",
        height: "fit-content",
        border: "1px solid #000",
        flexDirection: "row",
      },
    },
    ul(
      {
        style: {
          width: "100%",
          display: "flex",
          displayDirection: "flex-row",
          justifyContent: "space-around",
        },
      },
      ...getConfig().map((item: { title: string; path: string }) =>
        li({ textContent: item.title })
      )
    )
  );
}
