import { Col, Input, Row } from "antd";
import React from "react";

export default function SongForm(props) {

    const inputRef = React.useRef(null);
    return (
    <Row>
        <Col>
            <Input autoFocus ref={inputRef} type="text" placeholder="Title" value={props.song.title} onChange={props.onTitleChange} onPressEnter={console.log('focus')}/>
        </Col>
        <Col>
            <Input type="text" placeholder="Artist" value={props.song.artist} onChange={props.onArtistChange} onPressEnter={() => {
                inputRef.current.focus({
                    cursor: 'all',
                  });
                  props.onPressEnter()
            }}/>
        </Col>
    </Row>
    );
}