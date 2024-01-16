import './header.css'


function Header(props) {

    return (
        <header>
            <nav>
                <ul>
                    {
                        props.links.map((link)=>{
                            return <li>{link}</li>
                        })
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Header;