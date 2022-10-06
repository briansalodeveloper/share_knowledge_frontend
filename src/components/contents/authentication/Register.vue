<script setup>
import '/src/assets/css/register.css'
import axios from 'axios'
</script>

<template>
    <section class="h-100">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col">
                    <div class="card card-registration my-4">
                        <div class="row g-0">
                            <div class="col-xl-6 d-none d-xl-block">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                                    alt="Sample photo" class="img-fluid"
                                    style="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;" />
                            </div>
                            <div class="col-xl-6">
                                <form @submit.prevent="submit" class="signin-form">
                                    <div class="card-body p-md-5 text-black">
                                        <h3 class="mb-5 text-uppercase">Registration form</h3>
                                        <div class="col-md-12 mb-4">
                                            <div class="form-outline">
                                                <label class="form-label" for="name">Name</label>
                                                <input type="text" id="name" class="form-control form-control-lg" placeholder="Name" v-model="fields.name" 
                                                    :class="errors['name']? 'is-invalid': '' "/>
                                                <div v-if="errors['name']" class="invalid-feedback">
                                                    <p>{{errors['name']}}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12 mb-4">
                                            <div class="form-outline">
                                                <label class="form-label" for="name">Email</label>
                                                <input type="text" id="email" class="form-control form-control-lg" placeholder="Email" v-model="fields.email" 
                                                    :class="errors['email']? 'is-invalid': '' "/>
                                                <div v-if="errors['email']" class="invalid-feedback">
                                                    <p>{{errors['email']}}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12 mb-4">
                                            <div class="form-outline">
                                                <label class="form-label" for="password">Password</label>
                                                <input type="password" id="password" class="form-control form-control-lg" placeholder="Password" v-model="fields.password" 
                                                    :class="errors['password']? 'is-invalid': '' "/>
                                                <div v-if="errors['password']" class="invalid-feedback">
                                                    <p>{{errors['password']}}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12 mb-4">
                                            <div class="form-outline">
                                                <label class="form-label" for="password">Confirm Password</label>
                                                <input type="password" id="confirmPassword" class="form-control form-control-lg" placeholder="Confirm Password" v-model="fields.password_confirmation" 
                                                    :class="errors['password']? 'is-invalid': '' "/>
                                                <div v-if="errors['password']" class="invalid-feedback">
                                                    <p>{{errors['password']}}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-end pt-3">
                                            <router-link to="/login" class="pt-3 px-3">already registered?</router-link>
                                            <button type="submit" class="btn btn-warning btn-lg ms-2">Submit form</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
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
            axios.post('http://127.0.0.1:8000/api/register', this.fields).then((response) => {
                
            }).catch(error => {
                if (error.response.status == 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
    },
}
</script>