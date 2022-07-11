import Link from "next/link";

const Navbar = () => {
  // TODO: User link is not shown unless user is authenticated
  const userIsAuthenticated = true;

  return (
    <header className="topnav">
      <Link href="/">
        <a>HOME</a>
      </Link>
      <Link href="/products">
        <a>PRODUCTS</a>
      </Link>
      <Link href="/about">
        <a>ABOUT</a>
      </Link>
      {userIsAuthenticated 
        ? (
          <Link href="/user">
            <a>USER</a>
          </Link>
        ) 
        : (
          <></>
        )
      }

      <Link href="">
        <a>CART</a>
      </Link>
    </header>
  );
};

export default Navbar;
