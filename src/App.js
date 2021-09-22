import { Layout } from "antd";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import DesktopAppHeader from "./component/desktop/DesktopAppHeader";

import { useMediaQuery } from "react-responsive";
import SearchMain from "./route/desktop/SearchMain";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop && children;
};

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet && children;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile && children;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile && children;
};

const { Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Desktop>
        <Layout
          className="app_layout"
          style={{
            minHeight: "100vh",
          }}
        >
          <DesktopAppHeader />
          <Content style={contentStyle}>
            <Route path="/book/search" component={SearchMain} exact />
          </Content>
        </Layout>
        <h1>desktop</h1>
      </Desktop>
      <Tablet>
        <h1>tablet</h1>
      </Tablet>
      <Mobile>
        <h1>mobile</h1>
      </Mobile>
      <Default>
        <h1>default</h1>
      </Default>
    </BrowserRouter>
  );
}

const contentStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  background: "#fff",
  width: "100%",
  height: "100%",
};

export default App;
