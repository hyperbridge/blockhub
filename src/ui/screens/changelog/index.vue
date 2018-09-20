<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container">
                <div class="col-12">
                    <h3>Pending - Harder, Better, Faster, Stronger</h3>
                    <ul>
                        <li>
                            <blockquote>You can now sign up for an account</blockquote>
                            <p>
                                
                            </p>
                        </li>
                        <li>
                            <blockquote>You are now notified when we change things, isn't that great?</blockquote>
                            <p>
                                * Add notification system<br />
                                * User is prompted to relaunch when version changes<br />
                            </p>
                        </li>
                        <li>
                            <blockquote>Persist changes & sync with Ethereum + peer network</blockquote>
                        </li>
                        <li>
                            <blockquote>Check for offline status</blockquote>
                        </li>
                        <li>
                            <blockquote>Load account, identities & wallets via Ethereum</blockquote>
                        </li>
                    </ul>

                    <br /><br />

                    <h3>6.21.2018 - Welcome to the Genesis Block</h3>
                    <ul>
                        <li>
                            <blockquote>Built things</blockquote>
                            <p>
                                * Initial build - vue.js, web3.js
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
  components: {
    'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve)
  },
  data: () => ({
    wallets: []
  })
}
</script>

<style lang="scss" scoped>

</style>
