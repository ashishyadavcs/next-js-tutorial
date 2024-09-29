import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Header = () => {
    const navList = [
        {
            link: "/",
            text: "Home",
        },
        {
            link: "/",
            text: "About",
        },
        {
            link: "/",
            text: "Contact",
        },
        {
            link: "/",
            text: "Portfolio",
        },
        {
            link: "/",
            text: "Services",
        },
    ];
    return (
        <StyledHeader>
            <Link href="/">Frontendzone</Link>
            <ul className="links">
                {navList.map((nav, i) => (
                    <li key={i}>
                        <Link href={nav.link}>{nav.text}</Link>
                    </li>
                ))}
            </ul>
            <button
                onClick={(e) =>
                    e.currentTarget.parentElement.classList.toggle("active")
                }
                className="menu-btn"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </StyledHeader>
    );
};

export default Header;
const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 20px 50px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    position: sticky;
    background: #fff;
    z-index: 2;
    top: 0;
    a {
        font-weight: 600;
        color: #000;
    }
    .links {
        display: flex;
        list-style: none;
        gap: 40px;
    }
    .menu-btn {
        display: none;
    }
    @media (max-width: 767px) {
        padding: 20px 30px;
        .links {
            flex-direction: column;
            gap: 10px;
            position: absolute;
            left: -100%;
            top: 100%;
            background: #000;
            width: 250px;
            min-height: 92vh;
            transition: all 0.3s;
            li {
                position: relative;
                &::before {
                    position: absolute;
                    content: "";
                    top: 100%;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: linear-gradient(to right, #ddd, transparent);
                }
            }
            a {
                color: #fff;
                display: block;
                padding: 10px 30px;
            }
        }
        .menu-btn {
            display: inline-block;
            width: 30px;
            background: transparent;
            span {
                display: block;
                height: 2px;
                background: #000;
                margin-bottom: 5px;
            }
        }

        &.active {
            .links {
                left: 0;
            }
        }
    }
`;
