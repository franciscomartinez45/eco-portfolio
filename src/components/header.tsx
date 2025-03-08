import { NavLink } from "react-router";
interface Links {
  link: string;
  linkName: string;
}

export default function Header() {
  return (
    <div className="flex  justify-center">
      <nav className="">
        {links.map((link) => (
          <NavLink to={link.link} key={link.link} className="mr-6">
            {link.linkName}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
const links: Links[] = [
  { link: "/", linkName: "Home" },
  /** FOLLOW THIS TEMPLATE BELOW TO ADD PAGES TO THE MENU BAR ON TOP OF PAGE**/
  { link: "about.tsx", linkName: "About" },
  { link: "contact.tsx", linkName: "Contact" },
];
