import { useEffect, useState } from "react";

export default function useNavigation() {
  const [currentPath, setCurrentPath] = useState(
    () => window.location.pathname,
  );
  const [routeVersion, setRouteVersion] = useState(0);
  useEffect(() => {
    const syncPage = () => {
      setCurrentPath(window.location.pathname);
      setRouteVersion((value) => value + 1);
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("popstate", syncPage);
    return () => window.removeEventListener("popstate", syncPage);
  }, []);
  const navigate = (target) => {
    const url = new URL(target, window.location.origin);
    window.history.pushState({}, "", url.pathname + url.search + url.hash);
    setCurrentPath(url.pathname);
    setRouteVersion((value) => value + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (url.hash)
      requestAnimationFrame(() =>
        document
          .querySelector(url.hash)
          ?.scrollIntoView({ behavior: "smooth" }),
      );
  };
  const scroll = (id) => {
    if (id === "#film-details") return navigate("/film-details");
    if (currentPath !== "/") return navigate("/" + id);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return { currentPath, routeVersion, navigate, scroll };
}
