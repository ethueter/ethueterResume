import Header from './Header';
import Nav from './Nav'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const Layout = (props) => {

    return (
        <div style={layoutStyle}>
            <Nav />
            {props.children}
        </div>
    );
};

export default Layout;