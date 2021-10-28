import { Button, Col, Row } from 'antd';
export default function SongChangeButton(props) {
    return (
        <Row justify="center">
            <Col>
                <Button 
                    type="primary"
                    disabled={props.previousDisabled}
                    onClick={props.onPrevious}
                >
                    Previous
                </Button>
            </Col>
            <Col>
                {props.children}
            </Col>
            <Col>
                <Button
                    danger={props.isLast}
                    type="primary"
                    onClick={props.onNext}
                >
                    {props.isLast ? 'Finish' : 'Next'}
                </Button>
            </Col>
        </Row>
    );
}