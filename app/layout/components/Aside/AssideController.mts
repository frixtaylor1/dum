import { AsideModelType, AsideModel } from "./AsideModel.mjs";

export function getOptions(): Array<AsideModelType> {
  return AsideModel();
}

export function shouldExportSomething(): void {
  console.log("SHOULD EXPORT SOMETHING USING THE MODEL...");
}
