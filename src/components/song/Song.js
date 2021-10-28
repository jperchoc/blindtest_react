import { Image, Row } from 'antd';
import React from 'react';
import classes from './Song.module.css';
export default class Song extends React.Component {
    render() {
        return (
            <>
                <Row justify="center" style={{ marginTop: '10px' }}>
                    <div className={classes.imgcontainter}>
                        <Image className={classes.img} src={this.props.song.img} />
                    </div>
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