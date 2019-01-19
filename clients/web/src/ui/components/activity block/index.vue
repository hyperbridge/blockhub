<template>
    <div class="activity-block">
        <div class="activity-block__head">
            <span>
                <i class="fas fa-book-reader"></i> In Library
            </span>
            StartBreak is in your steam library ( Purchased 31 Dec, 2018 )
        </div>
        <div class="activity-block__body">
            <div>
                <c-button status="second-info" size="md" class="mr-3">
                    Install Steam
                </c-button>
                <c-button status="second-info" size="md" class="mr-3">
                    Play Now
                </c-button>
                <c-button status="second-info" size="md" class="mr-3">
                    Get Help
                </c-button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .activity-block{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .activity-block__head{
        padding: 8px 10px;
        border-bottom: 1px solid rgba(0, 0, 0, .4);
        background: linear-gradient(45deg, rgb(57, 147, 53) 0%, rgba(57,130,53, .5) 100%);
        color: rgba( 255, 255, 255, .85);
        font-size: 17px;
        font-weight: 500;
        position: relative;
        display: flex;
        align-items: center;
        span{
            margin: 0 15px 0 -20px;
            display: flex;
            padding: 3px 7px;
            color: #fff;
            align-items: center;
            background: rgb(57, 147, 53);
            z-index: 2;
            box-shadow: 1px 1px 4px #000;
            font-size: 12px;
            i{
                margin-right: 8px;
            }
        }
    }
    .activity-block__body{
        padding: 15px;
        background: linear-gradient(45deg, rgba(61,62,93,1) 0%, rgba(76,75,114,1) 100%);
        display: flex;
        align-items: center;
    }
</style>
