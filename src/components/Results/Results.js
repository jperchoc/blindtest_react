import { Button, Table } from 'antd';
export default function Results(props) {
    const data =
    props.songs.map(
        (s, i) => ({
            key: i+1,
            title: s.title,
            artist: s.artist,
        }));
    const columns = [
        {
            title:'N°',
            dataIndex: 'key',
            key: 'key'
        },
        {
            title:'Title',
            dataIndex: 'title',
            key: 'title',
            render: text => text? <b>{text}</b> : <i>-</i>,
        },
        {
            title:'Artist',
            dataIndex: 'artist',
            key: 'artist',
            render: text => text? <b>{text}</b> : <i>-</i>,
        }
    ];
    return (
    <div>
        <p>This is the end of the blind test !</p>
        <p>Please click on the "copy to clipboard" button and send them to me</p>
        <Table columns={columns} dataSource={data} />
        <Button onClick={() => {navigator.clipboard.writeText(JSON.stringify(data, null, 4))}}>Copy to clipboard</Button>
    </div>
    );
}