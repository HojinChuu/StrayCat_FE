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
                  <i class="fas fa-address-card fa-10x"></i>
                </div>
                <h3 class="text-center p-3">Login</h3>
                <form>
                  <div class="form-group">
                    <input type="text" class="form-control" name="username" placeholder="Username">
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" name="password" placeholder="Password">
                  </div>
                  <div class="form-group">
                    <button type="button" class="btn btn-primary btn-lg btn-block">LOGIN</button>
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
export default {
  name: "Login"
}
</script>