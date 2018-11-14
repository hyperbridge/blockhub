<template>
    <div>

        <!-- <div class="user user--bordered user--huge user--centred margin-bottom-20">
            <img src="http://via.placeholder.com/128x128">
            <div class="user__name">
                <strong>Tracey Newman</strong><br>
                <span>Global administrator</span>
                <center class="mt-3">
                    <c-switch @change="toggleColorMode"
                              label="Dark Mode"
                              v-model="darkMode"
                              class="text-white"
                    />
                </center>
            </div>
        </div>

        <c-button status="outline-success" :shadow="false" size="md" class="my-2 w-100 text-center justify-content-center">
            Our Clients
        </c-button>
        <c-button status="outline-success" :shadow="false" size="md" class="my-2 w-100 text-center justify-content-center">
            Recent projects
        </c-button>
        <c-button status="outline-success" :shadow="false" size="md" class="my-2 w-100 text-center justify-content-center">
            Company operators
        </c-button>

        <div class="divider"></div>

        <div class="h6 margin-bottom-20">Current projects progress</div>

        <p class="margin-bottom-15"><a href="#" class="text-secondary"><strong>1442-1:</strong> Logo design for Company</a></p>
        <div class="user user--bordered user--lg margin-bottom-10">
            <img src="http://via.placeholder.com/128x128">
            <div class="user__name">
                <strong>Dmitry Ivaniuk</strong><br>
                <div class="rw-progress rw-progress--sm rw-progress--secondary" data-value="50" style="width: 150px;"></div>
            </div>
        </div>
        <div class="user user--bordered user--lg margin-bottom-30">
            <img src="http://via.placeholder.com/128x128">
            <div class="user__name">
                <strong>Alexy Torenov</strong><br>
                <div class="rw-progress rw-progress--sm rw-progress--secondary" data-value="40" style="width: 150px;"></div>
            </div>
        </div>

        <p class="margin-bottom-15"><a href="#" class="text-secondary"><strong>1435:</strong> Marketing strategy</a></p>
        <div class="user user--bordered user--lg margin-bottom-10">
            <img src="http://via.placeholder.com/128x128">
            <div class="user__name">
                <strong>Julia Venchees</strong><br>
                <div class="rw-progress rw-progress--sm rw-progress--secondary" data-value="70" style="width: 150px;"></div>
            </div>
        </div>
        <div class="user user--bordered user--lg margin-bottom-10">
            <img src="http://via.placeholder.com/128x128">
            <div class="user__name">
                <strong>Alexa Monrow</strong><br>
                <div class="rw-progress rw-progress--sm rw-progress--secondary" data-value="90" style="width: 150px;"></div>
            </div>
        </div>
        <div class="user user--bordered user--lg margin-bottom-30">
            <img src="http://via.placeholder.com/128x128">
            <div class="user__name">
                <strong>John Doenson</strong><br>
                <div class="rw-progress rw-progress--sm rw-progress--secondary" data-value="20" style="width: 150px;"></div>
            </div>
        </div>

        <div class="divider"></div>

        <div class="form-row">
            <div class="col-12">
                <c-button status="outline-danger" :shadow="false" size="md" class="w-100 justify-content-center">
                    Change account / Log off
                </c-button>
            </div>
        </div> -->
    </div>
</template>

<script>
    export default {
        name: 'business-sidebar',
        components:{
        },
        data(){
            return{
                darkMode: false
            }
        },
        methods:{
            toggleColorMode(){
                console.log(this.$parent.$root.darkMode)
                if (this.darkMode)
                    this.$parent.$root.darkMode = true
                else
                    this.$parent.$root.darkMode = false
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
