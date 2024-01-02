import React from "react";

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-white bg-dark">
        <ul class="navbar-nav">
          <li class="nav-item active">
            {/* <Link to="./" class="nav-link link-light">
              Home
            </Link>{" "} */}
            &nbsp;&nbsp;
          </li>
          <li class="nav-item">
            {/* <Link to="./faculties" class="nav-link link-light">
              All Items
            </Link>{" "} */}
            &nbsp;&nbsp;
          </li>
          <li class="nav-item">
            {/* <Link to="./faculty/5" class="nav-link link-light">
              CheckOut Here
            </Link>{" "} */}
            &nbsp;
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
