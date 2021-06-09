import React from 'react'
import {Link} from 'react-router-dom'

const Nabar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light  shadow-lg p-3 mb-5 bg-body rounded mt-3">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">My favorite Videos</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/new-video">Add New Video</Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>

        </div>
    )
}

export default Nabar
