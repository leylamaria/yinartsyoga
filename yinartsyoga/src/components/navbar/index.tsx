import Logo from "../../assets/Logo.png";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav>
      <div className="bg-[#191919] ">
        {" "}
        <img className="w-44" alt="logo" src={Logo} />
      </div>
    </nav>
  );
};

export default Navbar;
