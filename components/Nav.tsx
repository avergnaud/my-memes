import Link from "next/link";

export default function Nav() {
  return (
    <div className="nav-scroller py-1 mb-2">
      <nav className="nav d-flex">
        <Link href="/about">
          <a className="p-2 text-muted">About us</a>
        </Link>
        <Link href="/scooby-doo-unmasking">
          <a className="p-2 text-muted">Scooby-Doo unmasking</a>
        </Link>
        <Link href="/he-man-skeleton-advice">
          <a className="p-2 text-muted">He man skeleton advice</a>
        </Link>
        <Link href="/captain-america-elevator-fight">
          <a className="p-2 text-muted">Captain america elevator fight</a>
        </Link>
      </nav>
    </div>
  );
}
