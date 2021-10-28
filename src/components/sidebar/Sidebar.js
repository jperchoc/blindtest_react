import { Menu, Layout } from 'antd';
import classes from './Sidebar.module.css';
import React from 'react';
import {
    LeftOutlined,
    RightOutlined,
  } from '@ant-design/icons';
const { Sider } = Layout;
export default class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            collapsed: false
        }
    }

    handleChange(e, song) {
        this.props.onSelect(e, song);
    }

    render() {
        return (
            <Sider collapsed={this.state.collapsed} style={{
                overflow: 'auto',
                height: 'calc(100vh - 64px)',
                position: 'sticky',
                left: 0,
                top: 64,
                zIndex:10,
              }}>
                <div 
                    className={classes.collapse} 
                    onClick={() => this.setState({
                        collapsed: !this.state.collapsed
                    })}
                >
                    { this.state.collapsed ? <RightOutlined /> : <LeftOutlined /> }
                </div>
                <Menu theme="dark" selectedKeys={[`${this.props.selectedSong.file}`]}>
                    
                    {
                        this.props.songs.map((song, i) =>
                            (
                                <Menu.Item  disabled={song.inactive} key={song.file} onClick={() => !song.inactive && this.handleChange(song)}>
                                    <span>{this.state.collapsed ? '': 'Audio n°'} {i+1}</span>
                                </Menu.Item >
                            )
                        )
                    }
                </Menu>
            </Sider>
        );
    }
}