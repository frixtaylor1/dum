export type HeaderItemType = {
  path: string;
  title: string;
};

function HeaderItem(path: string, title: string): HeaderItemType {
  return { path: path, title: title };
}

export function getItemsConfig(): Array<HeaderItemType> {
  return [
    HeaderItem("home", "home"),
    HeaderItem("home", "home"),
    HeaderItem("home", "home"),
    HeaderItem("home", "home"),
  ]
}