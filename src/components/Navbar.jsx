import logo from "../../public/images/logo.jpg";

export default function Navbar() {
  return (
    <header>
      <nav>
        <img src={logo} alt="reactLogo" />
        <span>ReactFacts</span>
      </nav>
    </header>
  );
}
