<template>
    <div class="clock">
        <ul>
            <li class="clock__hours">
                {{ hours }}
            </li>
            <li class="clock__divider">
                {{ divider }}
            </li>
            <li class="clock__minutes">
                {{ minutes }}
            </li>
            <!-- <li class="clock__divider">{{ divider }}</li>
            <li class="clock__seconds">{{ seconds }}</li> -->
            <li class="clock__format">
                {{ format }}
            </li>
        </ul>
    </div>
</template>

<script>
function zeropadder(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n
}

export default {
    data() {
        return {
            hours: '',
            minutes: '',
            seconds: '',
            divider: '',
            format: ''
        }
    },
    created() {
        setInterval(() => this.updateTime(), 1000)
    },
    methods: {
        updateTime() {
            const timeNow = new Date()
            const mm = timeNow.getMinutes()
            const ss = timeNow.getSeconds()
            const hh = timeNow.getHours()

            const formatAMPM = hh >= 12 ? 'PM' : 'AM'

            this.hours = hh % 12 || 12
            this.minutes = zeropadder(mm)
            this.seconds = zeropadder(ss)
            this.format = formatAMPM
            this.divider = this.divider === ':' ? '' : ':'
        }
    }
}
</script>

<style lang="scss" scoped>
    .clock {
        ul {
            list-style: none;
            user-select: none;
        }

        li {
            font-size: 50px;
            font-family: 'Barlow', sans-serif;
            color: rgba(255, 255, 255, 0.2);
            display: inline-block;
        }
    }

    .clock__divider {
        width: 16px;
    }

    .clock__format {
        margin-left: 10px;
    }
</style>
