import Vue from 'vue';

Vue.prototype.$notif = async (data) => {
    if (!("Notification" in window)) {
        return;
    } else {

        const spawnNotif = () => {
            const icon = require('./assets/logo.png');

            if (typeof data === 'string') {
                new Notification(data, { icon });
            } else {
                const { title, body } = data;
                const eventKey = Object.keys(data).find(key => key.includes('on'));

                const notification = new Notification(title, { icon, body });

                if (eventKey) {
                    notification[eventKey] = e => {
                        e.preventDefault();
                        data[eventKey]();
                    }
                }
            }
        }

        if (Notification.permission === 'granted') {
            spawnNotif();
        } else if (['denied', 'granted'].some(perm => !perm.includes(Notification.permission))) {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                spawnNotif();
            }
        }
    }
}
