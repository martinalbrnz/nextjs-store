import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <h1>Payment methods</h1>
      <ul>
        <li>
          <Link href="">
            <a>Twitter</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>Instagram</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>Facebook</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
