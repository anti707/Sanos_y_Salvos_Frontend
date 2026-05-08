import Image from "../atoms/Image";
import Text from "../atoms/Text";
import "../Foother.css";

function Footer({
  logo,
  title,
  description,
  links = [],
}) {
  return (
    <footer className="footer">

      <div className="footer-top">
        {logo && <Image src={logo} alt={title} />}

        <div>
          <Text variant="h3">{title}</Text>
          <Text>{description}</Text>
        </div>
      </div>

      <div className="footer-links">
        {links.map((link, index) => (
          <Text key={index}>{link}</Text>
        ))}
      </div>

      <Text className="footer-copy">
        © 2026 {title}
      </Text>

    </footer>
  );
}

export default Footer;