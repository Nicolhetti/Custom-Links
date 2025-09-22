import Image from "next/image";
import links from "../data/links";

export default function LinkList() {
  return (
    <div className="link-container">
      {links.map((link, index) => (
        <a
          key={index}
          className="button button-default"
          href={link.url}
          target="_blank"
          rel="noopener"
        >
          <Image
            className="icon"
            aria-hidden="true"
            src={link.icon}
            alt={link.alt}
            width={20}
            height={20}
          />
          {link.label}
        </a>
      ))}
    </div>
  );
}
