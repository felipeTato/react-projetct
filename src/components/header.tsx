import User from "./user";
import LuckyNumbers from "./luckynumber";

function Header () {

  return (
  <div>
    <header>
      <h1 id="title">
        Olá, <User />
      </h1>
      <LuckyNumbers />
    </header>
  </div>
  );
}

export default Header;