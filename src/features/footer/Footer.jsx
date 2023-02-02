import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Footer = () => {
  return (
    <footer className="mt-4 mb-4">
      <p className="align-middle text-center md:text-right">Made with <FontAwesomeIcon icon={faHeart} className="text-red-500" /> by <a href="https://adamkaplan.org">Adam</a></p>
    </footer>
  )
}