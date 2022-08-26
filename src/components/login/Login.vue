<script setup>
import '/src/assets/login/css/style.css'
import axios from 'axios'
</script>

<template>
	<section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-12 col-lg-10">
					<div class="wrap d-md-flex">
						<div class="img" style="background-image: url(/src/assets/login/images/bg-2.jpg);"></div>
						<div class="login-wrap p-4 p-md-5">
			      	        <div class="d-flex">
			      		        <div class="w-100">
			      			        <h3 class="mb-4">Sign In</h3>
			      		        </div>
								<div class="w-100">
									<p class="social-media d-flex justify-content-end">
										<a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa-brands fa-facebook"></span></a>
										<a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-xmark"></span></a>
									</p>
								</div>
			      	        </div>
							<form @submit.prevent="submit" class="signin-form">
                                <div class="form-group mb-3">
                                    <label class="label" for="name">Email</label>
                                    <input type="text" class="form-control" placeholder="Email" required v-model="fields.email" 
                                        :class="errors['email'] || errors['unauthorized']? 'is-invalid': '' ">
                                    <div v-if="errors['email']" class="invalid-feedback">
                                        <p>{{errors['email']}}</p>
                                    </div>
                                </div>
                                <div class="form-group mb-3">
                                    <label class="label" for="password">Password</label>
                                    <input type="password" class="form-control" placeholder="Password" required v-model="fields.password"
                                        :class="errors['password'] || errors['unauthorized']? 'is-invalid': '' ">
                                    <div v-if="errors['password']" class="invalid-feedback">
                                        <p>{{errors['password']}}</p>
                                    </div>
                                </div>
                                <div v-if="errors['unauthorized']" >
                                        <p style="color:red">{{errors['unauthorized']}}</p>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="form-control btn btn-primary rounded submit px-3">Sign In</button>
                                </div>
                                <div class="form-group d-md-flex">
                                    <div class="w-50 text-left">
                                        <label class="checkbox-wrap checkbox-primary mb-0">Remember Me
                                            <input type="checkbox" checked>
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="w-50 text-md-right">
                                        <a href="#">Forgot Password</a>
                                    </div>
                                </div>
		                    </form>
		                    <p class="text-center">Not a member? <router-link to="/register">Sign Up</router-link></p>
		                </div>
		            </div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
  data() {
    return {
      fields: {},
      errors: {}
    }
  },
  methods: {
    submit(){
        this.errors = {};
            axios.post('http://127.0.0.1:8000/api/login', this.fields).then((response) => {
                
            }).catch(error => {
                if(error.response.status == 401) {
                    this.errors = error.response.data;
                }
                if (error.response.status == 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
    },
}
</script>