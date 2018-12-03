<template>
    <div>
        <div class="chat__group-head">
            <div class="group-name h5">
                General
                <i class="fas fa-plus"></i>
            </div>
            <div>
                12 of 450 online
            </div>
            <div class="group-status">
                MOTD: Proin ut purus suscipit, bibendum eros
            </div>
        </div>
        <div class="chat__channel-list">
            <div class="title h6 text-uppercase font-weight-bold d-flex justify-content-between">
                Channel
                <i class="fas fa-plus"></i>
            </div>
            <ul>
                <li class="active">
                    General
                </li>
                <li>
                    Trash
                </li>
                <li>
                    Only Playload
                </li>
                <li>
                    Other staff
                </li>
                <li>
                    Help
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .chat__group-head{
        color: #fff;
        padding-bottom: 15px;
        margin-bottom: 20px;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        .group-name{
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-weight: bold;
            margin-bottom: 0;
        }
        .group-status{
            margin: 10px 0 0;
            font-size: 12px;
            line-height: 16px;
        }
    }
</style>
