<template>
  <div class="login">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2 class="display-4 text-center mt-5">Login Form</h2>

        <form>
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
              @click.prevent="performLogin"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    performLogin() {
      axios
        .post("http://localhost:8000/api/auth/login", {
          email: this.email,
          password: this.password
        })
        .then(res => {
          console.log(res.data);
          //store the token annd  user localstorge
          // eslint-disable-next-line no-unused-vars
          const token = localStorage.setItem("token", res.data.access_token);
          // eslint-disable-next-line no-unused-vars
          const user = localStorage.setItem("user", res.data.user);
          this.$router.push("/profile");
        })
        .catch(err => {
          console.log(err.message);
          this.error = err.message;
        });
      // console.log("perform Login");
      // this.$router.push("/profile");
    }
  }
};
</script>

<style></style>
