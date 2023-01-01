import { lazy } from "react";

const LazyLoad = (path, namedExport) => {
  return lazy(() => {
    const promise = import(path);
    if (namedExport == null) {
      return promise;
    } else {
      return promise.then((module) => ({ default: module[namedExport] }));
    }
  });
};

export default LazyLoad;
