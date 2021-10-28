import { Image, Row } from 'antd';
import React from 'react';
import classes from './Song.module.css';
export default class Song extends React.Component {
    render() {
        return (
            <>
                <Row justify="center" style={{ marginTop: '10px' }}>
                    <Image className={classes.img} width={400} height={400} src={this.props.song.img} />
                </Row>
                <Row justify="center">
                        <audio autoPlay={true} controls key={this.props.song.file}>
                            <source src={process.env.PUBLIC_URL +'/assets/audio/'+this.props.song.file} />
                        </audio>
                </Row>
                {this.props.children}
            </>
        );
    }
}