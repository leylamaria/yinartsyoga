import Logo from "../../assets/Logo.png";

type Props = {
  isTopOfPage: boolean;
};

const Navbar = ({ isTopOfPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const navbarBackground = isTopOfPage ? "" : "bg-[#ae8cbc] drop-shadow";
  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className="bg-[#191919] ">
          {" "}
          <img className="w-44" alt="logo" src={Logo} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
