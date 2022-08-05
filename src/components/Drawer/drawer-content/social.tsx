import { SvgIcon, Link } from "@material-ui/core";
import { ReactComponent as GitHub } from "../../../assets/icons/github.svg";
import { ReactComponent as Twitter } from "../../../assets/icons/twitter.svg";
import { ReactComponent as Medium } from "../../../assets/icons/medium.svg";
import { ReactComponent as Discord } from "../../../assets/icons/discord.svg";

export default function Social() {
    return (
        <div className="social-row">
            <Link href="https://github.com/SafLibProtocol/SafLib" target="_blank">
                <SvgIcon htmlColor="#ffffff" component={GitHub} />
            </Link>

            <Link href="https://twitter.com/safuliberoprotocol" target="_blank">
                <SvgIcon htmlColor="#ffffff" component={Twitter} />
            </Link>

            <Link href="https://safulibero.medium.com/" target="_blank">
                <SvgIcon htmlColor="#ffffff" component={Medium} />
            </Link>

            <Link href="https://cutt.ly/bO3G0Sn" target="_blank">
                <SvgIcon htmlColor="#ffffff" component={Discord} />
            </Link>
        </div>
    );
}
