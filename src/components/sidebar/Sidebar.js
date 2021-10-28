import { Menu, Layout } from 'antd';
import React from 'react';
const { Sider } = Layout;
export default class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, song) {
        this.props.onSelect(e, song);
    }

    render() {
        return (
            <Sider>
                <Menu selectedKeys={[`${this.props.selectedSong.file}`]}>
                {
                    this.props.songs.map((song, i) =>
                         (
                            <Menu.Item  disabled={song.inactive} key={song.file} onClick={() => !song.inactive && this.handleChange(song)}>
                                <span>Audio n°{i+1}</span>
                            </Menu.Item >
                        )
                    )
                }
                </Menu>
            </Sider>
        );
    }
}