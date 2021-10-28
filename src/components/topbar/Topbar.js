
import classes from './Topbar.module.css';
import { Layout } from 'antd'
const { Header } = Layout;
export default function Topbar(props) {
    return <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}><div className={classes.header}><h1>Blind Test PU DATA</h1></div></Header>
}