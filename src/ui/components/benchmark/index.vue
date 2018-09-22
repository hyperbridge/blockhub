<template>
    <div>
        <div>
            <c-button
                @click="benchmark"
                :class="{ 'avoid-clicks': running }"
                icon_hide
            >
                {{ finished ? 'Try again' : running ? 'Running...' : 'Start' }}
            </c-button>
            <p class="benchmark__status">STATUS: {{ running ? 'Running' : finished ? 'Finished' : 'Waiting for start' }}</p>

            <p v-if="running">FPS: {{ fps }}</p>
            <p v-else-if="finished">
                Average fps: <strong class="benchmark__fps" :class="results.grade">{{ results.avgFps }}</strong><br>
                {{ results.text }}
            </p>
            <p v-else>Run this benchmark to check your performance</p>
        </div>
        <div>
            <c-button @click="autoUpdateSettings" status="success">{{ btnMsg }}</c-button>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

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
            ...mapActions(['updateSettings']),
            benchmark() {
                this.running = true;
                this.finished = false;
                this.fpsVals = [];

                const times = [];
                let fps = 0;
                let loop = 0;

                const refreshLoop = () => {
                    window.requestAnimationFrame(() => {
                        loop++;
                        const now = performance.now();
                        while (times.length > 0 && times[0] <= now - 1000) {
                            times.shift();
                        }
                        times.push(now);
                        fps = times.length;
                        this.fps = fps;

                        if (loop > 60) this.fpsVals.push(fps);

                        if (loop > 500) {
                            this.running = false;
                            this.finished = true;
                            this.getResults();
                        } else {
                            refreshLoop();
                        }
                    });
                }

                refreshLoop();
            },
            getResults() {
                const avgFps = Math.round((this.fpsVals.reduce((sum, fps) => sum += fps, 0)) / this.fpsVals.length);
                let grade = 'good';
                if (avgFps < 50 && avgFps > 30) {
                    grade = 'avg';
                } else if (avgFps < 30) {
                    grade = 'bad';
                }
                this.results.avgFps = avgFps;
                this.results.grade = grade;
                this.results.text = grade == 'good'
                    ? 'There is no need to lower your settings'
                    : 'You should consider lowering your settings (preferably by auto-update option)'
            },
            autoUpdateSettings() {
                if (!this.finished || this.running) {
                    this.btnMsg = 'YOU NEED TO START A BENCHMARK FIRST';
                    setTimeout(() => this.btnMsg = 'UPDATE SETTINGS AUTOMATICALLY', 2000);
                } else {
                    const { grade } = this.results;
                    const { settings } = this;

                    const perfProps = ['autoplay', 'animations'];
                    const enableAll = boolean => perfProps.forEach(prop => {
                        if (settings[prop] != boolean) this.updateSettings(prop);
                    });

                    if (grade == 'good') {
                        enableAll(true);
                    } else if (grade == 'avg') {
                        if (!settings.autoplay) this.updateSettings('autoplay');
                        if (settings.animations) this.updateSettings('animations');
                    } else {
                        enableAll(false);
                    }

                    this.$snotify.success('Settings were successfully updated', 'Settings updated', {
                        timeout: 2500,
                        pauseOnHover: true
                    });
                    this.$notif({ title: 'Saved', body: 'Settings were saved successfully' });
                }
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

