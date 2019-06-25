import Vue from 'vue'
import Stripe from 'stripe'
const stripe = Stripe('sk_test_FwGFnIY8atiQ0uoE2WlCawBn005RP6lRhW')

Vue.prototype.$stripe = stripe

/*
    TODO:
    If we end up using Stripe on the nuxt server, ideally instead of hooking it
    into the vue.prototype we should inject it like depicted below and only
    provide an interface to the methods we are gonna use as to avoid exposing all of it.

    export default ({}, inject) => {
        inject('stripe', {
            customer: {
                async create(name, email) {
                    await stripe.customers.create({ name, email })
                }
            }
        })
    }
*/
