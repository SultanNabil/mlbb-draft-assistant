'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Navbar.module.css"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className={styles.header}>
            {/* Logo and Name */}
            <div className={styles.logoContainer}>
                <Image
                    src="/images/icon.png"
                    alt="Legends Hub Icon"
                    width={24}
                    height={24}
                    className={styles.logoIcon}
                />
                <Link href="/" className={styles.siteName}>MLBB Draft Assistant</Link>
            </div>

            {/* Hamburger */}
            <button
                className={styles.hamburger}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                {isOpen ? "✖" : "☰"}
            </button>

            {/* Navbar */}
            <nav className={`${styles.navLinks} ${isOpen ? styles.showMenu : ""}`}>
                <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link href="/draft" onClick={() => setIsOpen(false)}>Draft</Link>
                <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            </nav>

        </header>
    );
}