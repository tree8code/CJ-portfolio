import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import AnimatedCursor from "../hooks/AnimatedCursor";
import BackgroundMusic from "../components/BackgroundMusic";
import "./App.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  const basename = process.env.PUBLIC_URL || '';
  
  return (
    <Router basename={basename}>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={8}
          outerSize={24}
          color="0, 0, 0"
          outerAlpha={1}
          innerScale={1}
          outerScale={1.5}
          outerStyle={{ border: '2px solid #ffffff', background: 'transparent' }}
          innerStyle={{ background: '#000000' }}
          trailingSpeed={1}
        />
      </div>
      <ScrollToTop>
        <Headermain />
        <AppRoutes />
        <BackgroundMusic />
      </ScrollToTop>
    </Router>
  );
}
