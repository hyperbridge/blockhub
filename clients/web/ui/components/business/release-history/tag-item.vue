<template>
    <div class="history-list__tag-item">
        <div class="h3">
            <router-link :to="{ name: 'Release page', params: {id: id } }">
                {{ version }}
            </router-link>
        </div>
        <div class="sub-info">
            <div>
                <i class="fas fa-clock" /> {{ date | timeAgo }}
            </div>
            <div>
                <a href="#">
                    <i class="fas fa-file-archive" /> .zip
                </a>
            </div>
            <div>
                <a href="#">
                    <i class="fas fa-file-archive" /> .tar.gz
                </a>
            </div>
            <div>
                <a href="#">
                    <i class="fas fa-file-alt" /> Notes
                </a>
            </div>
            <div>
                <a href="#">
                    <i class="fas fa-file-download" /> Download
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ReleaseTagItem',
    props: {
        id: String,
        version: String,
        date: String
    }
}
</script>

<style lang="scss" scoped>
    .history-list__tag-item{
        display: flex;
        flex-direction: column;
        border: 1px solid #e7e7e7;
        padding: 15px;
        background: #fff;
        &:not(:last-child){
            border-bottom: none;
        }
        .sub-info{
            display: flex;
            font-size: 14px;
            align-items: center;
            div{
                margin-right: 20px;
                i{
                    opacity: .7;
                    font-size: 13px;
                    margin-right: 3px;
                }
                a{
                    color: #111;
                    &:hover{
                        color: #237cc1;
                        cursor: pointer;
                        opacity: 1;
                        text-decoration: none;
                    }
                }
            }
        }
    }
</style>
