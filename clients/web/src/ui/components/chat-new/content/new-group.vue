<template>
    <div class="new-group">
        <a href="#" class="close-btn">
            <i class="fas fa-times"></i>
        </a>
        <div class="new-group__join-group">
            <div class="h5 text-center w-100">
                Join to the group
            </div>
            <div class="form-group invert w-100">
                <label>Enter group invitation link or code</label>
                <input type="text" class="form-control" placeholder="Enter link or code"
                       name="group_name" >
            </div>
            <c-button status="opacity-info">
                Join
            </c-button>
        </div>
        <div class="h4 my-4">
            or
        </div>
        <div class="new-group__create-group">
            <div class="h5 text-center w-100">
                Create new group
            </div>
            <div class="create-group__avatar">
                <img src="https://cdn1.iconfinder.com/data/icons/people-std/512/customers-512.png" />
                <c-button status="plain">
                    Select
                </c-button>
            </div>
            <div class="create-group__info">
                <div class="form-group invert w-100">
                    <label>Group name</label>
                    <input type="text" class="form-control" placeholder="Enter a name for your group"
                           name="group_name" >
                </div>
                <div class="form-group invert w-100">
                    <label>Description</label>
                    <textarea class="form-control" placeholder="Enter a name for your group"
                              name="group_description"></textarea>
                </div>
                <div class="w-100 text-center margin-top-20">
                    <c-button status="opacity-success" class="mx-2">
                        Create
                    </c-button>
                    <c-button status="opacity-warning" class="mx-2">
                        Cancel
                    </c-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    .new-group{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(61, 62, 93, .9);
    }
    .close-btn{
        position: absolute;
        font-size: 20px;
        color: #fff;
        top: 15px;
        right: 15px;
    }
    .new-group__create-group,
    .new-group__join-group{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        max-width: 600px;
    }
    .create-group__avatar{
        text-align: center;
        width: 200px;
        img{
            width: 170px;
        }
    }
    .create-group__info{
        width: calc( 100% - 200px );
        padding-left: 25px;
    }
</style>
