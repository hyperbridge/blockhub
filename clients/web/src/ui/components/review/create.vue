<template>
    <div class="create-review text-white">
        <div class="w-100 mb-4">
            <div class="h5 font-weight-bold">
                Write a review for this game
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non pulvinar nulla. Praesent ac justo
                orci. Quisque ac leo id neque rhoncus convallis. Curabitur congue quam nec elit sagittis sollicitudin.
            </p>
        </div>
        <div class="create-review__user-avatar">
            <img src="https://image.freepik.com/free-vector/skull-with-beard-wear-headphones-gamer-music-mascot_8169-140.jpg"/>
        </div>
        <div class="create-review__content pl-4">
            <div class="invert">
                <textarea placeholder="Type here" class="form-control w-100" rows="6"></textarea>
            </div>
            <div class="create-review__options">
                <div class="invert mr-5">
                    <label class="mb-0">
                        Visibility
                    </label>
                    <select class="form-control form-control-sm">
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
                <div class="invert mr-5">
                    <label class="mb-0">
                        Language
                    </label>
                    <select class="form-control form-control-sm">
                        <option>English</option>
                        <option>Polish</option>
                        <option>Germany</option>
                    </select>
                </div>
                <div>
                    <c-checkbox>
                        Allow comments
                    </c-checkbox>
                </div>
                <div class="ml-auto">
                    <c-button status="plain">
                        Formatting Help
                    </c-button>
                </div>
            </div>
            <div class="create-review__action mt-4">
                <div>
                    <div class="mb-2">
                        Do you recommend this game?
                    </div>
                    <c-button status="second-info" size="sm" icon="thumbs-up">
                        Yes
                    </c-button>
                    <c-button status="second-info" size="sm" icon="thumbs-down" class="ml-2">
                        No
                    </c-button>
                </div>
                <c-button status="second-success" size="md">
                    Post review
                </c-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            'c-checkbox': (resolve) => require(['@/ui/components/checkbox'], resolve),
        },
    }
</script>

<style lang="scss" scoped>
    .create-review {
        padding: 20px;
        border-radius: 5px;
        background: rgba(0, 0, 0, .2);
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .create-review__user-avatar {
        width: 100px;
        img {
            width: 100%;
            height: auto;
        }
    }
    .create-review__content{
        width: calc( 100% - 100px );
    }
    .create-review__options{
        width: 100%;
        display: flex;
        align-items: center;
        padding:  5px 10px;
        margin-top: 10px;
        background: rgba(0, 0, 0, .1);
        border: 1px solid rgba(0, 0, 0, .2);
        border-radius: 3px;
        div{
            display: flex;
            align-items: center;
            label{
                margin-right: 8px;
            }
            select{
                width: 80px;
            }
        }
    }
    .create-review__action{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>
