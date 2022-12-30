import React from 'react'

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-${props.theme} navbar-expand-lg bg-${props.theme}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">LetsGetNews</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/Business">Business</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/Entertainment">Entertainment</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/Health">Health</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/Science">Science</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/Sports">Sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/Technology">Technology</a>
                            </li>

                        </ul>
                        <div className="form-check form-switch nav-item">
                            <label className={`form-check-label nav-item text-${props.theme === "light" ? "dark" : "white"}`} htmlFor="flexSwitchCheckChecked">DarkTheme</label>
                            <input className="form-check-input nav-item" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.changeTheme} />
                        </div>
                    </div>
                </div>


            
            </nav>
        </div>
    )
}
