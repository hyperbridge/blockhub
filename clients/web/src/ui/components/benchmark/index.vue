<template>
    <div class="d-flex flex-column pb-4">
        <div class="h4 font-weight-bold mt-2 mb-0 text-left w-100">
            Performance Test
        </div>
        <div class="w-100">
            <div class="d-flex align-items-center">
                <div class="benchmark__status mr-4">STATUS: {{ running ? 'Running' : finished ? 'Finished' : 'Waiting to start' }}</div>
                <div class="mr-4" v-if="running">FPS: {{ fps }}</div>
                <div class="mr-4" v-else-if="finished">
                    Average fps: <strong class="benchmark__fps" :class="results.grade">{{ results.avgFps }}</strong><br>
                    {{ results.text }}
                </div>
                <div v-else>Run this benchmark to check your performance</div>
            </div>
        </div>
        <div class="w-100 mt-3">
            <c-button
                @click="benchmark"
                class="mr-4"
                :class="{ 'avoid-clicks': running }"
                icon="play"
            >
                {{ finished ? 'Try again' : running ? 'Running...' : 'Run Test' }}
            </c-button>
            <c-button @click="toggleAutoUpdateSettings" status="success" v-if="settings.client.auto_update_settings">
                SETTINGS UPDATED AUTOMATICALLY
            </c-button>
            <c-button @click="toggleAutoUpdateSettings" status="warning" v-if="!settings.client.auto_update_settings">
                SETTINGS NOT UPDATED AUTOMATICALLY
            </c-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'benchmark',
        props: {
            settings: Object
        },
        data() {
            return {
                fps: 0,
                fpsVals: [],
                running: false,
                finished: false,
                results: {
                    avgFps: 0,
                    grade: ''
                },
                btnMsg: 'UPDATE SETTINGS AUTOMATICALLY'
            }
        },
        methods: {
            benchmark() {
                this.running = true
                this.finished = false
                this.fpsVals = []

                const times = []
                let fps = 0
                let loop = 0

                const refreshLoop = () => {
                    window.requestAnimationFrame(() => {
                        loop++
                        const now = performance.now()
                        while (times.length > 0 && times[0] <= now - 1000) {
                            times.shift()
                        }
                        times.push(now)
                        fps = times.length
                        this.fps = fps

                        if (loop > 60) this.fpsVals.push(fps)

                        if (loop > 500) {
                            this.running = false
                            this.finished = true
                            this.getResults()
                        } else {
                            refreshLoop()
                        }
                    })
                }

                refreshLoop()
            },
            getResults() {
                const avgFps = Math.round((this.fpsVals.reduce((sum, fps) => sum += fps, 0)) / this.fpsVals.length)
                let grade = 'good'
                if (avgFps < 50 && avgFps > 30) {
                    grade = 'avg'
                } else if (avgFps < 30) {
                    grade = 'bad'
                }
                this.results.avgFps = avgFps
                this.results.grade = grade
                this.results.text = grade == 'good'
                    ? 'There is no need to lower your settings'
                    : 'You should consider lowering your settings (preferably by auto-update option)'

                this.autoUpdateSettings()
            },
            updateSettings(key, value) {
                this.$store.commit('application/updateClientSettings', { key, value })
            },
            toggleAutoUpdateSettings() {
                this.updateSettings('auto_update_settings')
            },
            autoUpdateSettings() {
                const { settings } = this
                
                if (!settings.client.auto_update_settings) return
                if (!this.finished || this.running) return

                const { grade } = this.results

                const perfProps = ['autoplay', 'animations']
                const enableAll = boolean => perfProps.forEach(prop => {
                    this.updateSettings(prop, boolean)
                })

                if (grade === 'good') {
                    enableAll(true)
                } else if (grade === 'avg') {
                    if (settings.client.autoplay) this.updateSettings('autoplay', false)
                    if (settings.client.animations) this.updateSettings('animations', false)
                } else {
                    enableAll(false)
                }

                this.$snotify.success('Settings were successfully updated', 'Settings updated', {
                    timeout: 2500,
                    pauseOnHover: true
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
    .good {
        color: #27ae60;
    }
    .avg {
        color: #e67e22;
    }
    .bad {
        color: #e74c3c;
    }
    .benchmark__status {
        margin: 10px 0;
    }
    .benchmark__fps {
        font-size: 16px;
    }
</style>

