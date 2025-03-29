import Layout from "../layout/Layout.mjs";
import Home from "../pages/Home/Home.mjs";
import About from "../pages/About/About.mjs";
import License from "../pages/License/License.mjs";
import NotFound from "../pages/NotFound/NotFound.mjs";

export const PATH_ROOT: string = '/';
export const PATH_HOME: string = '/home';
export const PATH_ABOUT: string = '/about';
export const PATH_LICENSE: string = '/license';
export const PATH_NOT_FOUND: string = '/not-found';

export function getApplicationConfigModel(): Record<string, HTMLElement> {
  return {
    [PATH_ROOT]: Layout(Home()),
    [PATH_HOME]: Layout(Home()),
    [PATH_ABOUT]: Layout(About()),
    [PATH_LICENSE]: Layout(License()),
    [PATH_NOT_FOUND]: NotFound()
  };
}
