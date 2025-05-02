import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";

export default function Navigations() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ width: "120px" }}>logo</div>
      <Menu theme="dark" mode="horizontal" selectedKeys={[currentPath]}>
        <Menu.Item key="/">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="/settings">
          <Link to="/settings">Settings</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
