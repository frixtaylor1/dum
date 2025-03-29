type CustomEventListener = {
  name: string;
  callback: EventListener;
};

interface ElementParams {
  style?: Record<string, string>;
  innerText?: string;
  textContent?: string;
  innerHTML?: string;
  href?: string;
  customEvent?: CustomEventListener;
  dataset?: Record<string, any>;
  disabled?: boolean;
  [key: string]: any;
}

export function createElement<T extends keyof HTMLElementTagNameMap>(
  tagName: T,
  params: ElementParams = {},
  ...children: (HTMLElement | string)[]
): HTMLElementTagNameMap[T] {
  const {
    style,
    innerText,
    textContent,
    innerHTML,
    href,
    customEvent,
    dataset,
    disabled,
    ...attributes
  } = params;

  const element = document.createElement(tagName) as HTMLElementTagNameMap[T];
  _setTextContent(element, textContent, innerText, innerHTML);
  _setHref(element, href);
  _setCustomEvent(element, customEvent);
  _appendChildren(element, children);
  _setAttributes(element, attributes);
  _setDataset(element, dataset);
  _setStyle(element, style);
  _setDisabled(element, disabled);
  _setEvent(element, attributes);
  return element;
}

function _setTextContent(
  element: HTMLElement,
  textContent?: string,
  innerText?: string,
  innerHTML?: string
) {
  if (innerText) {
    element.innerText = innerText;
  }
  if (textContent) {
    element.textContent = textContent;
  }
  if (innerHTML) {
    element.innerHTML = innerHTML;
  }
}

function _setHref(element: HTMLElement, href?: string) {
  if (
    href &&
    (element instanceof HTMLAnchorElement || element instanceof HTMLLinkElement)
  ) {
    element.href = href;
  }
}

function _setCustomEvent(
  element: HTMLElement,
  customEventListener?: CustomEventListener
) {
  if (customEventListener) {
    element.addEventListener(
      customEventListener.name,
      customEventListener.callback
    );
  }
}

function _appendChildren(
  element: HTMLElement,
  children: (HTMLElement | string)[]
) {
  if (!children || children.length === 0) {
    return;
  }
  children.forEach((child) => {
    if (typeof child === "string") {
      element.appendChild(document.createTextNode(child));
    } else if (child instanceof HTMLElement) {
      element.appendChild(child);
    } else if (Array.isArray(child)) {
      _appendChildren(element, child);
    }
  });
}
function _setAttributes(
  element: HTMLElement,
  attributes: Record<string, any> = {}
) {
  if (!attributes) return;
  for (const key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      element.setAttribute(key, attributes[key]);
    }
  }
}

function _setEvent(
  element: HTMLElement,
  event: Record<string, EventListener> = {}
) {
  if (event) {
    for (const key in event) {
      if (event.hasOwnProperty(key) && key.toString().startsWith("on")) {
        const eventName = key.slice(2);
        element.addEventListener(eventName, event[key] as EventListener);
      }
    }
  }
}

function _setDataset(element: HTMLElement, dataset: Record<string, any> = {}) {
  for (const [key, value] of Object.entries(dataset)) {
    const datasetKey = key.replace(/-([a-z])/g, (match, letter) =>
      letter.toUpperCase()
    );
    element.dataset[datasetKey] = JSON.stringify(value);
  }
}

function _setStyle(element: HTMLElement, styleProp?: Record<string, string>) {
  if (!styleProp) return;
  for (const [key, value] of Object.entries(styleProp)) {
    element.style[key as any] = value;
  }
}

function _setDisabled(element: any, disabled?: boolean) {
  if (disabled !== undefined) {
    element.disabled = disabled;
  }
}

function _proxyCreateElement<T extends keyof HTMLElementTagNameMap>(
  tagElement: T,
  paramsOrChild?: ElementParams | HTMLElement | string,
  ...children: (HTMLElement | string)[]
): HTMLElementTagNameMap[T] {
  if (
    typeof paramsOrChild !== "object" ||
    Array.isArray(paramsOrChild) ||
    paramsOrChild instanceof HTMLElement
  ) {
    return createElement(
      tagElement,
      {},
      paramsOrChild as HTMLElement | string,
      ...children
    );
  } else {
    return createElement(tagElement, paramsOrChild, ...children);
  }
}

const WE = _proxyCreateElement;

const _createElementFunction = (tag: keyof HTMLElementTagNameMap) => {
  return (
    params: ElementParams | Object = {},
    ...children: (HTMLElement| string)[]
  ) => {
    return WE(tag, params, ...children);
  };
};

export const div = _createElementFunction("div");
export const a = _createElementFunction("a");
export const section = _createElementFunction("section");
export const button = _createElementFunction("button");
export const span = _createElementFunction("span");
export const p = _createElementFunction("p");
export const h1 = _createElementFunction("h1");
export const h2 = _createElementFunction("h2");
export const h3 = _createElementFunction("h3");
export const h4 = _createElementFunction("h4");
export const h5 = _createElementFunction("h5");
export const ul = _createElementFunction("ul");
export const ol = _createElementFunction("ol");
export const li = _createElementFunction("li");
export const dl = _createElementFunction("dl");
export const dt = _createElementFunction("dt");
export const dd = _createElementFunction("dd");
export const table = _createElementFunction("table");
export const tr = _createElementFunction("tr");
export const th = _createElementFunction("th");
export const td = _createElementFunction("td");
export const fieldset = _createElementFunction("fieldset");
export const legend = _createElementFunction("legend");
export const label = _createElementFunction("label");
export const form = _createElementFunction("form");
export const input = _createElementFunction("input");
export const img = _createElementFunction("img");
export const dialog = _createElementFunction("dialog");
export const hr = _createElementFunction("hr");
export const br = _createElementFunction("br");
export const select = _createElementFunction("select");
export const option = _createElementFunction("option");
export const menu = _createElementFunction("menu");
export const nav = _createElementFunction("nav");
export const details = _createElementFunction("details");
export const aside = _createElementFunction("aside");
export const main = _createElementFunction("main");
