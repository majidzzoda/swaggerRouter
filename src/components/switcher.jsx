import React from 'react';
import { Switch } from 'antd';

const AppMode = ({ toggleTheme }) => <Switch defaultChecked onChange={toggleTheme} />;
export default AppMode;