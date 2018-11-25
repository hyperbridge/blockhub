import Vue from 'vue';

export const withListLength = (component) =>
    Vue.extend('withListLength', {
        render(createElement, ctx) {
           return createElement(component, {
                props: {
                    listLength: this.listLength
                }
           });
        },
        computed: {
            listLength() {
                // return this.  Array.isArray(val) ? val.length : Object.keys(val).length
                return;
            }
        }
    });

export const withUniqueList = component =>
    Vue.extend('withUniqueList', {
        render(createElement, ctx) {
            return createElement(component, {
                props: {
                    list: this.uniqueList
                }
            });
        },
        computed: {
            uniqueList() {
                const list = [
                    { id: 1 },
                    { id: 2 },
                    { id: 3 },
                    { id: 4 }
                ];
                const uniqueList = list.reduce((reduced, item) => {
                    const { id } = item;
                    if (reduced[id]) reduced[id].count++;
                    else reduced[id] = { item, count: 1 };
                    return reduced;
                }, {});
                return Object.values(uniqueList);
            }
        }
    });
