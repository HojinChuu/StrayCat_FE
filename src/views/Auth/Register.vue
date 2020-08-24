<template>
  <div class="card">
    <div class="register p-5">
      <div class="row">
        <div class="col-md-4 mt-5 text-center text-white">
          <img src="https://image.ibb.co/n7oTvU/logo_white.png" />
          <h1 class="mt-5">Welcome</h1>
          <p>You are 30 seconds away from e</p>
        </div>
        <div class="col-md-8 register-right">
          <div class="row register-form ">
            <div class="form col-md-12">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="First Name *" value="" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Last Name *" value="" />
              </div>
              <div class="form-group">
                <input type="email" class="form-control" placeholder="Email *" value="" />
              </div>
              <div class="form-group">
                <input type="text" maxlength="10" minlength="10" class="form-control" placeholder="Phone *" value="" />
              </div>    
              <div class="form-group">
                <input type="password" class="form-control" placeholder="Password *" value="" />
              </div>
              <div class="form-group">
                <input type="password" class="form-control" placeholder="Confirm Password *" value="" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="`Answer *" value="" />
              </div>
              <input type="submit" class="btn btn-lg btn-primary btn-block mt-5 p-3" value="Register"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>

<style scoped>
.register{
  background: -webkit-linear-gradient(left, #3931af, #00c6ff);
  height:100vh;
}
.form-control {
  padding: 25px;
  margin: 0 auto;
}
.register-right{
  background: #f8f9fa;
  border-top-left-radius: 10% 50%;
  border-bottom-left-radius: 10% 50%;
  padding: 100px;
  margin-top: 100px;
}
img{
  margin-top: 50%;
  width: 20%;
  animation: mover 0.7s infinite alternate;
}
@keyframes mover {
  0% { transform: translateY(0); }
  100% { transform: translateY(-30px); }
}
</style>