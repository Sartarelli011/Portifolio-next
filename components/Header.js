import { HeaderContainer, MenuHeader } from "../styles/styles";
import Link from "next/link";
import { useRouter } from "next/router";
function Header() {
  const router = useRouter();
  return (
    <HeaderContainer>
      <h1>Gabriel S. Jaccoud</h1>
      <MenuHeader>
        <ul>
          <li>
            <Link href="/home">
              <a
                className={router.pathname === "/home" ? "active" : "inactive"}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a
                className={router.pathname === "/about" ? "active" : "inactive"}
              >
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a
                className={
                  router.pathname === "/projects" ? "active" : "inactive"
                }
              >
                projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a
                className={
                  router.pathname === "/contact" ? "active" : "inactive"
                }
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </MenuHeader>
    </HeaderContainer>
  );
}

export default Header;
