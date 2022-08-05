import { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import Social from "./social";
import { ReactComponent as CalculatorIcon } from "../../../assets/icons/calculator.svg";
import { ReactComponent as AccountIcon } from "../../../assets/icons/account.svg";
import SafLibIcon from "../../../assets/icons/favicon.png";
import { ReactComponent as SwapIcon } from "../../../assets/icons/swap.svg";
import { ReactComponent as DashboardIcon } from "../../../assets/icons/dashboard.svg";
import { trim, shorten } from "../../../helpers";
import { useAddress } from "../../../hooks";
import { Link, SvgIcon } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import "./drawer-content.scss";
import { ReactComponent as DocsIcon } from "../../../assets/icons/docs.svg";
import classnames from "classnames";

function NavContent() {
    const [isActive] = useState();
    const address = useAddress();

    const checkPage = useCallback((location: any, page: string): boolean => {
        const currentPath = location.pathname.replace("/", "");
        if (currentPath.indexOf("dashboard") >= 0 && page === "dashboard") {
            return true;
        }
        if (currentPath.indexOf("account") >= 0 && page === "account") {
            return true;
        }

        if (currentPath.indexOf("calculator") >= 0 && page === "calculator") {
            return true;
        }
        return false;
    }, []);

    return (
        <div className="dapp-sidebar">
            <div className="dapp-sidebar-top" style={{background:"linear-gradient(#0a369a, #093495, #042a81)"}}>
                <div className="branding-header">
                    <Link href="https://safulibero.com/" target="_blank">
                        <img alt="logo" className="logo"  src={SafLibIcon} />
                    </Link>

                    {address && (
                        <div className="wallet-link">
                            <Link href={`https://bscscan.com/address/${address}`} target="_blank">
                                <p>{shorten(address)}</p>
                            </Link>
                        </div>
                    )}
                </div>
                <div className="dapp-menu-links">
                    <div className="dapp-nav">
                        <Link
                            component={NavLink}
                            to="/dashboard"
                            isActive={(match: any, location: any) => {
                                return checkPage(location, "dashboard");
                            }}
                            className={classnames("button-dapp-menu", { active: isActive })}
                        >
                            <div className="dapp-menu-item">
                                <SvgIcon viewBox="0 0 18 18"  component={DashboardIcon} />
                                <p>Dashboard</p>
                            </div>
                        </Link>
                        <Link
                            component={NavLink}
                            to="/account"
                            isActive={(match: any, location: any) => {
                                return checkPage(location, "account");
                            }}
                            className={classnames("button-dapp-menu", { active: isActive })}
                        >
                            <div className="dapp-menu-item">
                                <SvgIcon viewBox="0 0 18 18"  component={AccountIcon} />
                                <p>Account</p>
                            </div>
                        </Link>
                        <Link
                            component={NavLink}
                            to="/calculator"
                            isActive={(match: any, location: any) => {
                                return checkPage(location, "calculator");
                            }}
                            className={classnames("button-dapp-menu", { active: isActive })}
                        >
                            <div className="dapp-menu-item">
                                <SvgIcon viewBox="0 0 18 18"  component={CalculatorIcon} />
                                <p>Calculator</p>
                            </div>
                        </Link>
                        <Link
                            href="https://app.bogged.finance/bsc/swap?tokenIn=BNB&tokenOut=0xE5bA47fD94CB645ba4119222e34fB33F59C7CD90"
                            target="_blank"
                            className={classnames("button-dapp-menu", { active: isActive })}
                        >
                            <div className="dapp-menu-item">
                                <SvgIcon viewBox="0 0 18 18"  component={SwapIcon} />
                                <p>Swap</p>
                            </div>
                        </Link>
                        <Link
                            href="https://safuliberoprotocol.gitbook.io/safuliberoprotocol/"
                            target="_blank"
                            className={classnames("button-dapp-menu", { active: isActive })}
                        >
                            <div className="dapp-menu-item">
                                <SvgIcon viewBox="0 0 18 18"  component={DocsIcon} />
                                <p>Docs</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <Social />
            </div>
          
        </div>
    );
}

export default NavContent;
