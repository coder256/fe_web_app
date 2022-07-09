import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            {/*<nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">ToDo App</Link>
                </div>
            </nav>*/}
            <div className="fixed-top bg-default">
                <h3 className="py-1"><Link className="text-light text-decoration-none" to="/">ToDO App</Link></h3>
            </div>

            <div className="container main-container">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-12 col-md-6 bg-light border-1 rounded-2 p-2">
                        <Outlet />
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>

            <div className="fixed-bottom bg-secondary">
                <a className="text-dark text-decoration-none" href="https://github.com/coder256">&copy; coder256</a>
            </div>
        </div>
    )
};

export default Layout