<template>
<!--Prevents the default behavior of form to refresh the page when submitted-->
  <form @submit.prevent="handleSubmit">

    <img src="../assets/penguin.jpg">
      <br>
      <label>Email: </label>
      <input type="email" v-model="email" required>

      <label>Password: </label>
      <input type="password" v-model="pswd" required>
      <div v-if="passwordError" class="error">{{ passwordError }}</div>

      <label>Applying For: </label>
      <select v-model="applyingFor">
        <option value="designer">Web Designer</option>
        <option value="developer">Web Developer</option>
      </select>

      <label>Skills: </label>
      <input type="text" v-model="tempSkill" @keyup.alt="addSkill">
      <div class="pill" v-for="skill in skills" :key="skill">
        <span @click="exSkill(skill)"> {{ skill }} </span>
      </div>

      <div class="terms">
        <input type="checkbox" v-model="terms" required>
        <label>Accept Terms and Conditions</label>
      </div>

      <div class="submit">
        <button>Create Account</button>
      </div>

  </form>

<!--
  <p>Email: {{ email }} </p> 
  <p>Password: {{ pswd }}</p>
  <p>Applying For: {{ applyingFor }}</p>
  <p>Terms Checked: {{ terms }}</p>
  -->

</template>

<script>
export default {
  data() {
    return {
      email: '',
      pswd: '',
      applyingFor: '',
      terms: false,
      tempSkill: '',
      skills: [],
      passwordError: ''
    }
  },
  methods: {
    addSkill(e) {
      if (e.key === ',' && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
        }

        this.tempSkill = '';
      }
    },
    exSkill(skill) {
      this.skills = this.skills.filter((item) => {
        return skill !== item;
      });
    },
    handleSubmit() {
      const psReg = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
      const pattern = psReg;
      this.passwordError = this.pswd.match(pattern) ? '' 
      : 'Password must be minimum 6 characters including 1 uppercase, 1 lowercase and 1 special character';
    }
  }
}
</script>

<style>

img {
  width: 100px;
  height: 130px;
  position: relative;
  left: 155px;
}
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.7em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>