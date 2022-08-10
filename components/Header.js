import {
  HeaderContainer,
  MenuHeader,
  MenuResponsiveContainer,
} from "../styles/estilo";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const showMenu = () => {
    setShow((show) => !show);
  };

  return (
    <HeaderContainer show={show}>
      <h1>Gabriel Jaccoud</h1>
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
      <MenuResponsiveContainer show={show}>
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
      </MenuResponsiveContainer>
      {show ? (
        <FaTimes size={30} onClick={showMenu} />
      ) : (
        <FaBars size={30} onClick={showMenu} />
      )}
    </HeaderContainer>
  );
}

export default Header;
