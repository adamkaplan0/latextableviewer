import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Footer = () => {
  return (
    <footer className="mt-4 mb-4">
      <p className="text-right align-middle">Made with <FontAwesomeIcon icon={faHeart} className="text-red-500" /> by <a href="https://github.com/adamkaplan0" className="hover:underline decoration-dotted">Adam</a></p>
    </footer>
  )
}