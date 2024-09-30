import { Link } from "@inertiajs/react";

export default function Layout({children}) {
    return(
        <>
            <header>
                <nav>
                    <div className="">
                        <Link className="nav-link" href="/">Home</Link>
                        <Link className="nav-link" href="/create">Create</Link>
                    </div>
                    <Link className="nav-link" href="/login">Login</Link>
                </nav>
            </header>

            <main>
                {children}
            </main>
        </>
    );
}