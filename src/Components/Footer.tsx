import React from "react";
import Socials from "./Socials";

const Footer = (): React.ReactElement => {
    return (
        <footer className="border-t border-border pt-10 pb-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                    <p className="font-display font-medium text-text">
                        Divyesh Patel
                    </p>
                    <p className="text-xs text-muted mt-1">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
                <Socials />
            </div>
        </footer>
    );
};

export default Footer;
