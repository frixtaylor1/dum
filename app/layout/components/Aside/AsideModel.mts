export type AsideModelType = {
  path: string;
  title: string;
};

export function AsideModel(): Array<{ path: string; title: string }> {
  return [
    { title: "Home", path: "home" },
    { title: "About", path: "about" },
    { title: "License", path: "license" },
  ];
}
