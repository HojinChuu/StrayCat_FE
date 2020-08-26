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
            <router-link class="nav-link" to="/about">Map</router-link>
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
        <ul class="navbar-nav ml-auto" v-if="this.$store.getters.accessToken == null">
          <li class="nav-item">
            <button type="button" class="btn" data-toggle="modal" data-target="#LoginModal">Login</button>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto" v-else>
          <li class="nav-item">
          </li>
          <li class="nav-item dropleft">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Hello {{ this.$store.getters.userInfo.nickName }} 
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <span class="dropdown-item disabled">{{ this.$store.getters.userInfo.email }}</span>
              <a class="dropdown-item" href="#">MyPage</a>
              <div class="dropdown-divider"></div>
              <button @click="logout" type="button" class="btn dropdown-item">Logout</button>
            </div>
          </li>
          <li class="nav-item" v-show="this.$store.getters.userInfo.userType == 'admin'">
            <router-link class="nav-link bg-secondary text-white rounded-circle" to="/admin">Admin</router-link>
          </li>
        </ul>
      </div>
    </nav>  
    <Login />
  </div>
</template>

<script>
import Login from '@/views/Auth/Login';
import { mapActions, mapGetters } from "vuex"
import showAlert from '@/alert';

export default {
  name: 'HelloWorld',
  components: { Login },
  computed: {
    ...mapGetters([ 'accessToken', 'userId' ])
  },
  methods: {
    ...mapActions([ 'LOGOUT' ]),
    logout() {
      const user_id = this.userId
      const headers = { "Authorization": this.accessToken }

      this.LOGOUT({user_id, headers})
      .then(() => {
        if (this.$router.currentRoute.name !== 'Home') {
          this.$router.push({ name: 'Home' })
        }
        showAlert.success('Bye', 'Logout', 'success')
      })
    }
  }
}
</script>
