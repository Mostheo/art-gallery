import React from 'react';
import '../styles/Footer.css';

function Footer() { 
    return ( 
        <div className='CustomFooter'>
            <footer className="ph3 ph4-ns pv6 bt b--black-10 black-70">
                <a href="mailto:" className="link b f3 f2-ns dim black-70 lh-solid">
                    theo_pierre@hotmail.com
                </a>
                <p className="f6 db b lh-solid">© 2023 Théo Pierre.</p>
                <div className="mt5">
                    <a href="/project/" title="My project" className="f6 dib pr2 mid-gray dim">
                        My project
                    </a>
                    <a href="/sources/" title="Sources" className="f6 dib ph2 mid-gray dim">
                      Sources
                    </a>
                    <a href="https://theopierre.dev" title="Portfolio" className="f6 dib pl2 mid-gray dim">
                      Portfolio
                    </a>
                </div>
            </footer>
        </div>

    );
};

export default Footer;