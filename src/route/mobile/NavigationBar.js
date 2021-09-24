import React, { useState } from "react";

import { TabBar, Icon } from "antd-mobile";
import SearchMobile from "./SearchMobile";

const NavigationBar = () => {
  const [selectedTab, setSelectedTab] = useState("searchTab");

  return (
    <div style={{ position: "fixed", width: "100%", top: "3rem", bottom: 0 }}>
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
          <SearchMobile />
        </TabBar.Item>
      </TabBar>
    </div>
  );
};

export default NavigationBar;
