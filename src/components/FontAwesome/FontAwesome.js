import { library } from "@fortawesome/fontawesome-svg-core";
import {fab, faFacebookSquare, faInstagramSquare, faLinkedin, faLinkedinIn, faTwitter, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";

function FontAwesome() {
    library.add(fab, faFacebookSquare, faInstagramSquare, faLinkedin, faLinkedinIn, faTwitter, faTwitterSquare);
}

export default FontAwesome;