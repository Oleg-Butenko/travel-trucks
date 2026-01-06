"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./Header.module.css";

const Header = () => {
	const pathname = usePathname();

	return (
		<header className={css.header}>
			<div className="container">
				<div className={css.headerWrapper}>
					<Link href="/" className={`${css.logo} ${css.navLink}`}>
						<svg width="136" height="16" className={css.logoIcon}>
							<use href="/icons.svg#icon-logo" />
						</svg>
					</Link>

					<nav aria-label="Main Navigation">
						<ul className={css.mainNavigationList}>
							<li>
								<Link
									href="/"
									className={`${css.navLink} ${pathname === "/" ? css.active : ""}`}
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/catalog"
									className={`${css.navLink} ${pathname.startsWith("/catalog") ? css.active : ""}`}
								>
									Catalog
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
