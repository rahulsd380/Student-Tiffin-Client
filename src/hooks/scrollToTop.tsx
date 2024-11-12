import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // If using React Router

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop