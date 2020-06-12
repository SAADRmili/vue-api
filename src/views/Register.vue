<template>
  <div class="login">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2 class="display-4 text-center mt-5">Register Form</h2>
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="name"
              name="name"
              id="name"
              class="form-control"
              v-model="name"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              class="form-control"
              v-model="email"
            />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              class="form-control"
              v-model="password"
            />
            <div style="color:red" v-if="error">
              {{ error }}
            </div>
          </div>

          <div class="form-group">
            <button
              type="submit"
              class="btn  btn-info btn-block"
              @click.prevent="performRegister"
            >
              Register
            </button>
          </div>
        </form>
        <circle-spin v-show="isLoading"></circle-spin>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: "",
      isLoading: false
      // error:""
    };
  },
  methods: {
    performRegister() {
      this.isLoading = true;
      this.$store
        .dispatch("performRegisterAction", {
          name: this.name,
          email: this.email,
          password: this.password
        })
        // eslint-disable-next-line no-unused-vars
        .then(res => {
          this.isLoading = false;
          this.$router.push("/profile");
        })
        .catch(err => {
          this.isLoading = false;
          this.error = "there was error during login process";
          console.log(err.message);
        });
    }
  }
};
</script>

<style></style>
