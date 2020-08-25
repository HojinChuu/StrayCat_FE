<template>
  <div class="register">
    <div class="row align-items-center">
      <div class="col col-5 text-center text-white">
        <img src="https://image.ibb.co/n7oTvU/logo_white.png" />
        <h1>Welcome</h1>
        <p style="font-weight:lighter">고양이를 위한 dfnaiodn</p>
      </div>
      <div class="col col-7 bg-light right">
        <!-- alert -->
        <div v-if="Object.keys(errors).length !== 0" class="alert alert-danger alert-dismissible fade show">
          <ul>
            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
          </ul>
          <button type="button" @click="alertDismiss" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit="onSubmit">
          <div class="form-group">
            <label for="firstName">First Name <span class="text-danger">*</span></label>
            <input type="text" v-model="userData.firstName" class="form-control" id="firstName" name="firstName" />
          </div>
          <div class="form-group">
            <label for="lastName">Last Name <span class="text-danger">*</span></label>
            <input type="text" v-model="userData.lastName" class="form-control" id="lastName" name="lastName" />
          </div>
          <div class="form-group">
            <label for="email">Email <span class="text-danger">*</span></label>
            <input type="email" v-model="userData.email" class="form-control" id="email" name="email" />
          </div>
          <div class="form-group">
            <label for="nickName">Nick Name <span class="text-danger">*</span></label>
            <input type="text" v-model="userData.nickName" class="form-control" id="nickName" name="nickName" />
          </div>    
          <div class="form-group">
            <label for="password">Password <span class="text-danger">*</span></label>
            <input type="password" v-model="userData.password" class="form-control" id="password" name="password" />
          </div>
          <div class="form-group">
            <label for="confirm_password">Confirm Password <span class="text-danger">*</span></label>
            <input type="password" v-model="userData.confirm_password" class="form-control" id="confirm_password" />
          </div>
          <button type="submit" class="btn btn-lg btn-primary btn-block mt-5 p-3">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import showAlert from '@/alert';

export default {
  name: 'Register',
  data() {
    return {
      userData: {
        firstName: '',
        lastName: '',
        email: '',
        nickName: '',
        password: '',
        confirm_password: ''
      },
      errors: {}
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      axios.post('http://localhost/straycat_server/register', this.userData)
      .then(res => {
        this.$router.push({name: 'Home'})
        showAlert.success('Great', 'Register success')
      })
      .catch(err => {
        if (err.response) {
          this.errors = err.response.data.messages[0];
        }
      })
    },
    alertDismiss() {
      this.errors = {}
    }
  }
}
</script>

<style scoped>
.register {
  background: -webkit-linear-gradient(left, #3931af, #00c6ff);
  padding: 7%;
}
.right {
  border-top-left-radius: 10% 50%;
  border-bottom-left-radius: 10% 50%;
  padding: 100px;
}
img {
  animation: mover 0.7s infinite alternate;
}
@keyframes mover {
  0% { transform: translateY(0); }
  100% { transform: translateY(-30px); }
}
</style>