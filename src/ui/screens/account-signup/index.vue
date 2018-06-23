<template>
    <c-layout navigationKey="accountNavigation">
        <!-- PAGE LOGIN CONTAINER -->
        <div class="content login-container" id="content">
            <div class="container">
                <div class="col-12">

                    <div class="login-container__buttons">
                        <a href="/#/account/signin" class="btn btn-outline-primary btn--icon"><span class="fa fa-angle-left"></span> Already have account?</a>
                    </div>
                    
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="step1-tab" data-toggle="tab" href="#step1" role="tab" aria-controls="step1-tab" aria-expanded="true">Step 1</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="step2-tab" data-toggle="tab" href="#step2" role="tab" aria-controls="step2-tab">Step 2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="step3-tab" data-toggle="tab" href="#step3" role="tab" aria-controls="step3-tab">Step 3</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="step1" role="tabpanel" aria-labelledby="step1-tab">

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
                        <div class="tab-pane fade show active" id="step2" role="tabpanel" aria-labelledby="profile-tab">
                                tttt
                        </div>

                        <div class="tab-pane fade show active" id="step3" role="tabpanel" aria-labelledby="profile-tab">
                            <h3>Verify your identity (Optional)</h3>
                            <p>Submit a proof of identity issued by your country of residence.
        This is optional but allows you to start with 1000 trust after verification, allowing you to
        reassure reviews of other user’s proofs of identity. You can skip this and finish later.</p>
                            
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
    'c-layout': () => import('@/ui/layouts/default')
  },
  data: () => ({
    wallets: []
  })
}
</script>

<style lang="scss" scoped>

</style>
