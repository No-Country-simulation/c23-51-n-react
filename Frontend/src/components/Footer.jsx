import { footerLinks, socialsLinks } from "@/constants";
import { Link } from "react-router";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-coalGrey">
      <div className="container px-8 md:px-24 py-12 md:pt-[100px]">
        <div className="flex flex-col items-center justify-center space-y-12 md:flex-col">
          <Link to="/">
            <h1 className="text-[40px] font-normal font-abel uppercase leading-[50px] tracking-wider">
              Momentum
            </h1>
          </Link>

          <ul className="flex items-center text-lg font-normal gap-7">
            {footerLinks.map((link) => (
              <li
                key={link.id}
                className="transition-colors duration-300 ease-out hover:text-tangerine"
              >
                <Link to={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <Separator className="mt-12 bg-[#262626] w-full" />

        <div className="flex flex-col items-center justify-center gap-4 py-10 md:flex-row">
          <div className="flex flex-row items-center gap-2">
            <Mail color="#FA7E25" />
            <a href="mailto:momentum@fitness.com">momentum@fitness.com</a>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Phone color="#FA7E25" />
            +56 9 1234 5678
          </div>
        </div>

        <Separator className="mb-12 bg-[#262626] w-full" />

        <div className="flex flex-col md:flex-row items-center justify-between bg-[#1A1A1A] border border-[#262626] py-4 px-4 md:px-8 rounded-full">
          <ul className="flex flex-row mb-4 gap-x-3 md:mb-0">
            {socialsLinks.map((social) => (
              <li key={social.id}>
                <Link to={social.url}>
                  <div className="group flex items-center justify-center rounded-full bg-tangerine hover:bg-tangerine/90 size-8 lg:size-[52px]">
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="object-cover transition duration-300 ease-out size-4 lg:size-6 group-hover:scale-110"
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <span className="text-[#B3B3B3] text-center text-sm mb-4 md:mb-0">
            &copy; {currentYear} Momentum.
          </span>

          <div className="flex flex-col items-center lg:flex-row lg:gap-2">
            <Link to="#">
              <span className="text-[#B3B3B3] text-sm">Políticas de privacidad</span>
            </Link>
            <Separator orientation="vertical" className="bg-[#B3B3B3] h-4 w-px hidden lg:block" />
            <Link to="#">
              <span className="text-[#B3B3B3] text-sm">Términos y condiciones</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
