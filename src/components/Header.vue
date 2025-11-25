<template>
  <header>
    <div class="links">
      <a href="/"><router-link to="/">Home</router-link></a>
      <a href="/addPost"><router-link to="/addPost">addPost</router-link></a>
    </div>
    <div class="dropdown">
      <a href="/login">
          <router-link to="/login"><img id="userLogo" src="../assets/img/userLogo.png" alt="User"></router-link>
      </a>
      <div class="dropdown-content" id="dropdownMenu">
        <a href="/login"><router-link to="/login"><p class="userName">Username</p></router-link></a>
        <p class="userEmail">Username@server.ee</p>
        <a href="/login">Logout</a>
      </div>
    </div>
  </header>
</template>

<script type="text/javascript" src="../assets/js/headerHandler.js"></script>
