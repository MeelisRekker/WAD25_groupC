<template>
    <main id="signup">
        <h3>Welcome to PostIt</h3>
        <p class="accountActions">Create and account</p>
        <p id="text">or<br>Please log in</p>        
        <form class="login_form" @submit.prevent="validatePassword">
            <input name="email" type="email" required autofocus placeholder="Email">
            <input name="password" type="text" required placeholder="Password" v-model="password">
            <p v-if="message">{{ message }}</p>
            <input type="submit" class="loginBtn" value="Log in">
        </form>
        <p class="accountActions">Forgot password</p>
    </main>
</template>

<script>
export default {
  data() {
    return {
      password: "",
      message: "",
    };
  },
  methods: {
    validatePassword() {
      const password = this.password;
      // Check password length
      if (!(password.length >= 8 && password.length < 15)) {
        this.message ="Password must be between 8 and 15 characters.";
        return;
      }
      // Check if it starts with an uppercase letter
      if (!/^[A-Z]/.test(password)) {
        this.message = "Password must start with an uppercase letter.";
        return;
      }
      // Check for at least two lowercase letters
      if ((password.match(/[a-z]/g) || []).length < 2) {
        this.message =
            "Password must include at least two lowercase alphabet characters.";
        return;
      }
      // Check for at least one numeric value
      if (!/\d/.test(password)) {
        this.message = "Password must include at least one numeric value.";
        return;
      }
      if (!password.includes("_")) {
        this.message = 'Password must include the character "_".';
        return;
      }

      this.$router.push({ name: 'home' });
    },
  },
};
</script>