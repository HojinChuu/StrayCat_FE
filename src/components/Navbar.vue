<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">LOGO</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Map</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Market</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Community</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Notice</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <button type="button" class="btn" data-toggle="modal" data-target="#exampleModal">Login</button>
          </li>
        </ul>
      </div>
    </nav>  
    <Login />
  </div>
</template>

<script>
import Login from '@/views/Auth/Login';

export default {
  name: 'HelloWorld',
  components: { Login }
}
</script>
