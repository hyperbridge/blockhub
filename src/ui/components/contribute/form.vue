<template>
    <div class="contribute-form">
        <div class="input-group mb-4">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                    $
                </span>
            </div>
            <input type="text" class="form-control" placeholder="0.00" />
        </div>
        <c-button status="success" class="justify-content-center" icon_hide size="xl">
            Continue
        </c-button>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .contribute-form{
        display: flex;
        flex-direction: column;
    }
    .input-group{
        input{
            background: rgba(0, 0, 0, .13);
            color: #fff;
            border-color: rgba(0, 0, 0, .4);
        }
        .input-group-text{
            background: #1d1e30;
            border-color: rgba(0, 0, 0, .4);
            color: #fff;
        }
    }
</style>
