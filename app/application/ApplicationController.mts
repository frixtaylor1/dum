import { getApplicationConfigModel, PATH_NOT_FOUND } from "./ApplicationModel.mjs";

function getApplicationConfig(): Record<string, HTMLElement> {
  return getApplicationConfigModel();
}

export function getApplicationView(pathName: string): HTMLElement {
  if (getApplicationConfig()[pathName]) {
    return getApplicationConfig()[pathName];
  }
  return getApplicationConfig()[PATH_NOT_FOUND];
}
