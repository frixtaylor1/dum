import { getApplicationView } from "./ApplicationController.mjs";

export default function Application(): void {
  _initializeConfig();
  _setViewToDocument(getApplicationView(window.location.pathname));
}

function _initializeConfig() {
  window.document.body.style.width = "100%";
  window.document.body.style.height = "100%";
  window.document.body.style.margin = "0";
  window.document.body.style.backgroundColor = "#333333FF";
  window.document.body.style.overflow = "hidden";
}

function _setViewToDocument(view: HTMLElement) {
  window.document.body.appendChild(view);
}
