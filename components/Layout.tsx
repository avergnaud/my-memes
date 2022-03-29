import Header from './Header';
import Nav from './Nav';

export default function Layout(props) {
  return(
    <div>
      <div className="container">
        <Header/>
        <Nav/>
          {props.children}
      </div>
    </div>

  )
}
