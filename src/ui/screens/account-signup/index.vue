<template>
    <c-layout>
        <!-- PAGE LOGIN CONTAINER -->
        <div class="content login-container" id="content">
            <div class="container">
                <div class="col-12">
                    <div class="login-container__buttons">
                        <a href="/#/account/signin" class="btn btn-outline-primary btn--icon"><span class="fa fa-angle-left"></span> Already have account?</a>
                    </div>
                    <a href="/" class="logo-holder logo-holder--lg logo-holder--wide">
                        <div class="logo-text"><strong class="text-primary">#</strong>BLOCK<strong>HUB</strong></div>
                    </a>
                    <p class="caption text-center margin-bottom-30">Welcome</p>
                    
                    <form action="/" method="post">
                        <div class="form-group">
                            <label>Email</label>
                            <input type="text" class="form-control" placeholder="Your personal email" name="email">
                        </div>
                        <div class="form-group">
                            <label>Username</label>
                            <input type="text" class="form-control" placeholder="Your username" name="username">
                        </div>
                        <div class="form-group margin-bottom-20">
                            <label>Password</label>
                            <input type="password" class="form-control" placeholder="Your password" name="password" autocomplete="new-password">
                        </div>

                        <div class="form-group margin-bottom-30">
                            <div class="form-row">
                                <div class="col-12">
                                    <label class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" checked="">
                                        <span class="custom-control-label">Don't send me updates</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group margin-bottom-30">
                            <div class="form-row">
                                <div class="col-2"></div>
                                <div class="col-8">
                                    <button class="btn btn-primary btn-block">Create my account</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    
                    <div class="divider"></div>
                    
                    <div class="form-group text-center">
                        <div class="form-row">
                            <div class="col-4">
                                <a href="/#/help" class="text-muted">Help</a>
                            </div>
                            <div class="col-4">
                                <a href="/#/support" class="text-muted">Support</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
  components: {
  },
  components: {
    'c-layout': () => import('@/ui/layouts/default')
  },
  data: () => ({
    wallets: []
  })
}
</script>

<style lang="scss" scoped>

</style>
