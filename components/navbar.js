import Link from 'next/link';

const Navbar = () => {
    return(
        <header>
            <Link href="/">
                <a>HOME</a>
            </Link>
            <Link href="/products">
                <a>PRODUCTS</a>
            </Link>
            <Link href="/about">
                <a>ABOUT</a>
            </Link>
            <Link href="/user">
                <a>USER</a>
            </Link>
        </header>
    );
}

export default Navbar;