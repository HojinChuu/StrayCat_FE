<template>
  <div class="modal fade" id="exampleModal" role="dialog" data-keyboard="false" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Welcome</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row">
              <div class="col-md-12 login-form p-4">
                <div class="text-center">
                  <img src="https://i.ibb.co/59GT0Mq/pngegg.png">     
                </div>
                <h3 class="text-center p-3">Login</h3>
                <form @submit="onSubmit">
                  <div class="form-group">
                    <input type="email" v-model="userData.email" class="form-control" name="email" placeholder="Email">
                  </div>
                  <div class="form-group">
                    <input type="password" v-model="userData.password" class="form-control" name="password" placeholder="Password">
                  </div>
                  <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-lg btn-block">LOGIN</button>
                  </div>
                  <div class="form-group text-center" data-dismiss="modal" aria-label="Close">
                      <router-link to="Register">have a account</router-link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
import axios from 'axios';

export default {
  name: "Login",
  data() {
    return {
      userData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      axios.post('http://localhost/straycat_server/login', this.userData)
      .then(res => {
        // 받은 session token 저장 
        // 성공 alert
        $('#exampleModal').modal('hide'); 
      })
      .catch(err => {
        // error 처리 validation
      })
    }
  }
}
</script>

<style scoped>
img {
  animation: mover 0.7s infinite alternate;
  width: 100px;
}
@keyframes mover {
  0% { transform: translateY(0); }
  100% { transform: translateY(-20px); }
}
</style>