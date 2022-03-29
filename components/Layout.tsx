import Header from './Header';

export default function Layout(props) {
  return(
    <div>
      <div className="container">
        <Header/>
          {props.children}
      </div>
    </div>

  )
}
