import migrate from 'migrate';

const migrations = {
    methods: {
        runMigrations() {
            migrate.load({ stateStore: '.migrate' }, (err, set) => {
                if (err) throw err;
                set.up(err => {
                    if (err) throw err;
                    this.$notif('Client was successfully upgraded');
                });
            });
        }
    },
    mounted() {
        const { current, latest } = this.$store.state.network.migrations;

        // if (!current.length || current < latest) {
        //     this.$notif({
        //         title: 'Update available',
        //         body: 'You have an update ready for BlockHub',
        //         onclick: this.runMigrations
        //     });
        // }
    }
};

export default migrations;
