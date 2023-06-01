import './Nav.css';

function Nav(){
    return (
        <div>
            <nav className="flex">
                <div>
                    <h2>Logo</h2>
                </div>
                <div>
                    <ul className="flex">
                        <li><a href="#" className="active">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Order</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;