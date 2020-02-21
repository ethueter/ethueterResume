import Header from './Header';
import Nav from './Nav'

const layoutStyle = {
    margin: 10,
    padding: 10,
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