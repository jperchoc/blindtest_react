
import classes from './Topbar.module.css';
import { Layout } from 'antd'
const { Header } = Layout;
export default function Topbar(props) {
    return <Header><div className={classes.header}><h1>Blind Test PU DATA</h1></div></Header>
}