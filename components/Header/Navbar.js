/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../../lib/authContext';
import { NavbarContainer, NavItem, NavImg } from './NavbarStyles';

const Navbar = () => {
    const { user, username } = useContext(UserContext);

    return (  
        <nav className="navbar">
            <NavbarContainer>
                <NavItem>
                    <Link href="/" passHref>
                        <a>HOME</a>
                    </Link>
                </NavItem>

                {/* if the user has a username */}
                {username && (
                    <>
                        <NavItem>
                            <Link href="/admin" passHref>
                                <a>Write Post</a>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href={`/${username}`} passHref><NavImg className="profileImg" src={user.photoURL} alt="User Image"/>
                            </Link>
                        </NavItem>
                    </>
                )}

                {!username && (
                    <NavItem>
                        <Link href="/enter" passHref>
                            <a>Log In</a>
                        </Link>
                    </NavItem>
                )}
            </NavbarContainer>
        </nav>
    );
}
 
export default Navbar;