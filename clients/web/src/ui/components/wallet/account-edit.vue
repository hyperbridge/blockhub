<template>
    <div class="account-edit">
        <div class="account-name">
            <input type="text" value="Account 1" :readonly="!nameEdit" :class="{'unstyled' : !nameEdit }"/>
            <i class="fas fa-pencil-alt" @click="editName" v-if="!nameEdit"></i>
            <i class="fas fa-check" @click="saveChanges" v-else></i>
        </div>
        <div class="qr-code">
            <c-img src="https://images-eu.ssl-images-amazon.com/images/I/31Umxl57vfL.png" />
        </div>
        <div class="account-number">
            <span>
                0x2893uy9uef8223982gr982g3923982982
            </span>
        </div>

        <c-button status="opacity-info" class="mb-3 w-100 justify-content-center" size="lg">
            View account on EtherScan
        </c-button>

        <c-button status="opacity-info" size="lg" class="w-100 justify-content-center">
            Export private key
        </c-button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                nameEdit: false
            }
        },
        methods:{
            editName(){
                this.nameEdit = true
            },
            saveChanges(){
                this.nameEdit = false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .account-edit{
        display: flex;
        flex-direction: column;
        padding-top: 15px;
        align-items: center;
        justify-content: center;
    }
    .account-name{
        color: #fff;
        position: relative;
        width: 100%;
        text-align: center;
        input{
            border: none;
            border-radius: 4px;
            padding: 5px;
            text-align: center;
            background: rgba(0, 0, 0, .3);
            color: #fff;
            &.unstyled{
                background: transparent;
            }
        }
        i{
            position: absolute;
            right: 0;
            top: 5px;
            cursor: pointer;
            opacity: .7;
            font-size: 16px;
            &:hover{
                opacity: 1;
            }
        }
    }
    .qr-code{
        width: 150px;
        margin: 15px auto;
        color: #fff;
        img{
            width: 100%;
        }
    }
    .account-number{
        padding: 5px 25px;
        border: 1px solid rgba(255, 255, 255, .1);
        border-radius: 3px;
        margin: 15px 0 30px;
        color: #fff;
        font-size: 16px;
        width: 100%;
        span{
            width: 100%;
            overflow: hidden;
            display: block;
        }
    }
</style>
