<template>
    <nuxt-link :to="{ path: `forum/${id}`, params: { id: id } }" class="forum-item">
        <div class="forum-item__header">
            <div class="icon">
                <i :class="icon" />
            </div>
            <div class="text">
                {{ title }}
            </div>
            <div class="last-post">
                {{ calculateSince }}
            </div>
            <div class="discussions-count">
                {{ discussionsCount }}
            </div>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        id: Number,
        title: String,
        icon: {
            type: String,
            default: 'fas fa-comments'
        },
        lastPostTime: String,
        discussionsCount: Number
    },
    computed: {
        calculateSince() {
            const tTime = new Date(this.lastPostTime)
            const cTime = new Date()
            const sinceMin = Math.round((cTime - tTime) / 60000)
            let since
            let sinceHr
            let sinceDay

            if (sinceMin == 0) {
                const sinceSec = Math.round((cTime - tTime) / 1000)
                if (sinceSec < 10) { since = 'less than 10 seconds ago' } else if (sinceSec < 20) { since = 'less than 20 seconds ago' } else { since = 'half a minute ago' }
            } else if (sinceMin == 1) {
                const sinceSec = Math.round((cTime - tTime) / 1000)
                if (sinceSec == 30) { since = 'half a minute ago' } else if (sinceSec < 60) { since = 'less than a minute ago' } else { since = '1 minute ago' }
            } else if (sinceMin < 45) { since = `${sinceMin} minutes ago` } else if (sinceMin > 44 && sinceMin < 60) { since = '1 hour ago' } else if (sinceMin < 1440) {
                sinceHr = Math.round(sinceMin / 60)
                if (sinceHr == 1) { since = '1 hour ago' } else { since = `${String(sinceHr)} hours ago` }
            } else if (sinceMin > 1439 && sinceMin < 2880) { since = '1 day ago' } else {
                sinceDay = Math.round(sinceMin / 1440)
                since = `${sinceDay} days ago`
            }

            return since
        }
    }
}
</script>

<style lang="scss" scoped>
    .forum-item {
        background: rgba(0, 0, 0, .16);
        border: 1px solid rgba(112, 112, 112, .2);
        border-radius: 5px;
        color: #fff;
        display: flex;
        &:hover{
            cursor: pointer;
            text-decoration: none;
        }
    }
    .forum-item__header {
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        width: 100%;
        .icon {
            width: 40px;
            height: 40px;
            margin-right: 15px;
            line-height: 40px;
            text-align: center;
            background: rgba(0, 0, 0, .13);
            font-size: 18px;
            color: #50517a;
        }
        .text {
            width: calc(60% - 70px);
            font-weight: bold;
            font-size: 16px;
            a{
                color: #fff;
            }
        }
        .discussions-count,
        .last-post{
            width: 20%;
            text-align: right;
            i {
                margin-right: 5px;
            }
        }
    }
</style>
