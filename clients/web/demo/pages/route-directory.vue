<template>
    <c-layout navigationKey="store" :showRightPanel="false">
        <c-block title="Explore BlockHub">
            <p>Browse the original Vue screens with sample data. Demo signup and inventory selection run in this tab. Payments, publishing, installers, and live services are unavailable.</p>
            <input v-model="search" data-demo-route-search class="form-control mb-4" placeholder="Find a screen…" aria-label="Find a demo screen">
            <div class="row" data-demo-route-directory>
                <div v-for="group in groups" :key="group.name" class="col-md-6 col-xl-4 mb-4">
                    <c-block :title="group.name">
                        <div v-for="route in group.routes" :key="route.path" class="mb-2">
                            <c-button status="plain" :to="route.path" :data-demo-route-link="route.path">{{ route.name }}</c-button>
                        </div>
                    </c-block>
                </div>
            </div>
        </c-block>
    </c-layout>
</template>
<script>
const titles = { account: 'Account', profile: 'Profiles', business: 'Creator Tools', marketplace: 'Marketplace', project: 'Crowdfunding', idea: 'Ideas', settings: 'Settings', help: 'Help', community: 'Community' }
export default {
    data: () => ({ search: '' }),
    computed: {
        groups() {
            const groups = {}
            const seen = new Set()
            const visit = (routes, parent = '') => routes.forEach(route => {
                const raw = route.path.startsWith('/') ? route.path : `${parent}/${route.path}`
                if (route.children) visit(route.children, raw)
                if (route.redirect || route.children?.length) return
                const link = raw.replace(/:slug\??/g, 'welcome').replace(/:[A-Za-z]+\??/g, '1').replace(/\/$/, '') || '/'
                if (seen.has(link) || /^\/(error|not-found|unknown|denied|account\/verification|unlock|quick-import|sitemap)(\/|$)/.test(link)) return
                seen.add(link)
                const parts = link.split('/').filter(part => part && part !== '1')
                const group = titles[parts[0]] || 'Store & General'
                const name = (parts.length ? parts.join(' / ') : 'Store').replace(/-/g, ' ').replace(/\b\w/g, value => value.toUpperCase())
                if (!`${group} ${name}`.toLowerCase().includes(this.search.toLowerCase())) return
                if (!groups[group]) groups[group] = []
                groups[group].push({ path: link, name })
            })
            visit(this.$router.options.routes)
            return Object.entries(groups).map(([name, routes]) => ({ name, routes }))
        }
    }
}
</script>
