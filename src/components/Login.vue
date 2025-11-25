<template>
    <main id="signup">
        <h3>Welcome to PostIt</h3>
        <p class="accountActions">Create and account</p>
        <p id="text">or<br>Please log in</p>        
        <form action="index.html" @submit.prevent="validatePassword">
            <input name="email" type="email" required autofocus placeholder="Email">
            <input name="password" type="text" required placeholder="Password" minlength="8" maxlength="20">
            <input type="submit" class="loginBtn" value="Log in">
        </form>
        <div v-if="errors.length" class="error-messages">
            <p>Password is invalid:</p>
            <ul>
                <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ul>
        </div>
        <p class="accountActions">Forgot password</p>
    </main>
</template>

<script>
export default {
  name: "signup",
  data() {
    return {
      password: "",
      errors: [], // To store validation error messages
    };
  },
  methods: {
    validatePassword() {
      // Clear previous errors
      this.errors = [];

      // Validation rules
      if (this.password.length < 8 || this.password.length > 15) {
        this.errors.push("Password must be 8-15 characters long.");
      }
      if (!/^[A-Z]/.test(this.password)) {
        this.errors.push("Password must start with an uppercase letter.");
      }
      if (!/[A-Z]/.test(this.password)) {
        this.errors.push("Password must contain at least one uppercase letter.");
      }
      if ((this.password.match(/[a-z]/g) || []).length < 2) {
        this.errors.push("Password must contain at least two lowercase letters.");
      }
      if (!/\d/.test(this.password)) {
        this.errors.push("Password must contain at least one numeric value.");
      }
      if (!/_/.test(this.password)) {
        this.errors.push("Password must include the character '_'.");
      }

      // Check if there are any errors
      if (this.errors.length === 0) {
        // Redirect to main page on success
        alert("Sign-up successful!");
        window.location.href = "index.html";
      }
    },
  },
};
</script>