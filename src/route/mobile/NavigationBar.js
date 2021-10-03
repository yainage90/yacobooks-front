import React, { useState } from "react";

import { Route } from "react-router";

import { TabBar, Icon } from "antd-mobile";
import SearchMobile from "./SearchMobile";
import BookMobile from "./BookMobile";

const NavigationBar = () => {
  const [selectedTab, setSelectedTab] = useState("searchTab");

  return (
    <div
      style={{
        background: "#fff",
        position: "fixed",
        width: "100%",
        top: "3rem",
        bottom: 0,
      }}
    >
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={false}
      >
        <TabBar.Item
          title="검색"
          key="Search"
          icon={<Icon type="search" size="md" />}
          selectedIcon={<Icon type="search" size="md" />}
          selected={selectedTab === "searchTab"}
          badge={1}
          onPress={() => {
            setSelectedTab("searchTab");
          }}
          data-seed="logId"
        >
          <Route path="/" component={SearchMobile} exact />
          <Route path="/book/search" component={SearchMobile} exact />
          <Route path={"/book/product/:id"} component={BookMobile} exact />
        </TabBar.Item>
      </TabBar>
    </div>
  );
};

export default NavigationBar;
