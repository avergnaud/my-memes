import Link from 'next/link'

export default function Header() {
  return(
    <header className="store-header py-3">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-12 text-center">
          <Link href="/">
            <a className="store-header-logo text-dark">Home</a>
          </Link>
        </div>
      </div>
    </header>
  )
}