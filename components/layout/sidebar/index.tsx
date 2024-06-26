/* eslint-disable @next/next/no-img-element */
import { Affix, Layout, Menu, theme } from "antd";
import { NextRouter, useRouter } from "next/router";
import React, { createElement, ReactElement, useState } from "react";
import { Roles } from "utils/enums";
import { getDefaultOpenKeys } from "utils/helpers";
import urls from "../../../configs/urls";
import DropdownMenu from "../dropdown-menu";
import { MenuOutlined } from "@ant-design/icons";
import { LoginHeading } from "styles/authCSS";
const { Header, Content, Sider } = Layout;

type Props = {
  role: string | null | undefined;
  children: React.ReactNode;
};

type routeItemProp = {
  title: string;
  path?: string | undefined;
  icon?: any;
  key?: string;
  children?: routeItemProp[];
};

type MenuItem = {
  label: string;
  key: string;
  icon?: ReactElement;
  children?: MenuItem[];
  path?: string;
  onClick?: any;
};

const items: (
  router: NextRouter,
  navItems: routeItemProp[],
  isChild?: boolean
) => MenuItem[] = (router, navItems, isChild = false) =>
  navItems.map((ni, _idx) => {
    const key = ni.title;
    const isSelected = ni.path === router.pathname;
    const hasChildren = !!ni?.children;
    const className = isChild ? "navbar-child-item" : "navbar-parent-item";
    return {
      label: ni.title,
      ...(ni.path && { onClick: () => ni.path && router.push(ni.path) }),
      icon:
        ni.icon &&
        createElement(ni.icon, {
          style: { width: 25, fontSize: 18 },
        }),
      key,
      className: `${className} ${
        isSelected
          ? isChild
            ? "navbar-item-selected-child"
            : "navbar-item-selected"
          : ""
      }`,
      ...(hasChildren && {
        children: ni.children && items(router, ni?.children, true),
      }),
    };
  });

const SidebarLayout = ({ role, children }: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const router = useRouter();

  const navItems: routeItemProp[] = role
    ? [
        ...(urls?.commonNavItems || []).filter(
          (item) => item.title !== "Holiday"
        ), // filter out Holiday item
        ...(role === Roles.ADMIN || role === Roles.SUPERADMIN
          ? urls.adminNavitems
          : role === Roles.ADMINISTRATOR
          ? urls.administrationNavitems
          : urls.adminNavitems),
      ]
    : [];

  const defaultOpenKeys = getDefaultOpenKeys(router.pathname);

  return (
    <Layout hasSider style={{ display: "flex", height: "100vh" }}>
      <Sider
        className="sider"
        width={246}
        breakpoint="md"
        trigger={null}
        collapsible
        collapsed={collapsed}
        onBreakpoint={(broken) => {
          setCollapsed(broken);
        }}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          transition: "all 0.2s",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            padding: "14px 20px 0px 28px",
            marginBottom: "10px",
          }}
        >
          <LoginHeading style={{ color: "white" }}>AEIRC</LoginHeading>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          style={
            collapsed ? { paddingRight: "10px" } : { paddingRight: "24px" }
          }
          selectedKeys={navItems
            .filter(
              (it) =>
                it.path === router.pathname ||
                (router.pathname.includes("holiday") &&
                  it.path?.includes("holiday") ===
                    router.pathname.includes("holiday"))
            )
            .map((it) => it.title)}
          items={items(router, navItems)}
          defaultOpenKeys={defaultOpenKeys}
        />
      </Sider>
      <Layout
        className="site-layout"
        style={
          collapsed
            ? { marginLeft: 80, transition: "margin 0.2s" }
            : { marginLeft: 246, transition: "margin 0.2s" }
        }
      >
        <Affix offsetTop={0}>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              top: 0,
              paddingRight: "25px",
              paddingLeft: "25px",
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              boxShadow: " 0px 0px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            {React.createElement(MenuOutlined, {
              className: "trigger",
              style: { cursor: "pointer" },
              onClick: () =>
                window.innerWidth > 768
                  ? setCollapsed(!collapsed)
                  : setCollapsed(true),
            })}

            <div style={{ right: 0, textAlign: "right" }}>
              <span
                style={{
                  marginRight: "20px",
                  fontSize: 16,
                  fontWeight: 600,
                }}
              ></span>
              {/* <Space size="middle">
                <Badge
                  dot={true}
                  style={{
                    width: '10px',
                    height: '10px',
                    background: Colors.GREEN,
                    position: 'absolute',
                    top: '5px',
                    left: '22px'
                  }}
                >
                  <Avatar
                    shape="circle"
                    size="large"
                    style={{
                      backgroundColor: '#FFFFFF',
                      color: '#000000',
                      boxShadow:
                        '0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)',
                      fontWeight: '600',
                      fontSize: '18px'
                    }}
                    icon={<BellOutlined />}
                  />
                </Badge>
              </Space> */}

              <DropdownMenu />
            </div>
          </Header>
        </Affix>
        <Content style={{ minHeight: "100vh" }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default SidebarLayout;
