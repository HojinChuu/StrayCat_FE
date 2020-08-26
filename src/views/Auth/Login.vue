<template>
  <div class="modal fade" id="LoginModal" role="dialog" data-keyboard="false" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="LoginModalLabel">Welcome</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <!-- alert -->
        <div 
          v-if="Object.keys(errors).length !== 0" 
          class="alert alert-danger alert-dismissible fade show"
        >
          <ul>
            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
          </ul>
          <button type="button" @click="alertDismiss" class="close" data-dismiss="alert" aria-label="Close">
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
import { mapActions, mapGetters } from "vuex";
import showAlert from '@/alert';

export default {
  name: "Login",
  data() {
    return {
      userData: {
        email: '',
        password: ''
      },
      errors: {}
    }
  },
  computed: {
    ...mapGetters([ 'accessToken', 'userId' ])
  },
  methods: {
    ...mapActions([ 'LOGIN', 'FETCH_USERINFO' ]),
    
    onSubmit(e) {
      e.preventDefault();
      const data = this.userData
      const headers = { "Content-Type": "application/json" };
      
      this.LOGIN({ data, headers })
      .then(res => {
        $('#LoginModal').modal('hide');
        showAlert.success('Great', 'Login success')
        if (this.$router.currentRoute.name !== 'Home') {
          this.$router.push({ name: 'Home' })
        }
      })
      .catch(err => {
        console.log(err)
        this.errors = err.response.data.messages[0]
      })
      .finally(() => {
        if (this.accessToken === undefined) {} else {
          const user_id = this.userId;
          const headers = { "Authorization": this.accessToken };
          this.FETCH_USERINFO({user_id, headers});
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
img {
  animation: mover 0.7s infinite alternate;
  width: 100px;
}
@keyframes mover {
  0% { transform: translateY(0); }
  100% { transform: translateY(-20px); }
}
</style>