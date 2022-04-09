import react from 'react';
// import '../../css/photographer_navbar.css';

function Photographer_Navbar(){
    return(
        <>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">PHOTOEPIC</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end list" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
      <div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Action
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
    </div>
  </div>
</nav>
<nav>
    <ul>
        <li class="logo"><img src="https://i.imgur.com/E26Pj54.png"/></li>
        <li><a href="#"><i class="fa fa-home"></i>&nbsp; Home</a></li>
        <li><a href="#"><i class="fa fa-book"></i>&nbsp; Book</a></li>
        <li><a href="#"><i class="fa fa-users"></i>&nbsp; Users</a></li>
        <li><a href="#"><i class="fa fa-picture-o"></i>&nbsp; Pictures</a></li>
        <li><a href="#"><i class="fa fa-phone"></i>&nbsp; Contact</a></li>
    </ul>
</nav>
<div class="wrapper">
    <div class="section">
        <div class="box-area">
            <h2>Home</h2>
        </div>
    </div>
</div>
        </>
    )
}
export default Photographer_Navbar();