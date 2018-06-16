<template>
    <div class="navigation" id="navigation-default">
        
        <div class="user user--bordered user--lg user--w-lineunder user--controls">
            <img src="http://via.placeholder.com/128x128">
            <div class="user__name">
                <strong>Dmitry Ivaniuk</strong><br>
                <span class="text-muted">Administrator</span>
                
                <div class="user__controls">
                    <div class="dropdown">
                        <button class="btn btn-light btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="fa fa-cog"></span></button>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Profile</a>
                            <a class="dropdown-item" href="#">Projects</a>                        
                            <a class="dropdown-item" href="#">Invoices</a>
                            <a class="dropdown-item" href="#">Settings</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Log out</a>
                        </div>
                    </div>
                </div>
            </div>        
            <div class="user__lineunder">
                <div class="text">
                    Last visit 15min ago
                </div>
                <div class="buttons">
                    <div class="dropdown">
                        <button class="button button-settings" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Profile</a>
                            <a class="dropdown-item" href="#">Projects</a>                        
                            <a class="dropdown-item" href="#">Invoices</a>
                            <a class="dropdown-item" href="#">Settings</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Log out</a>
                        </div>
                    </div>                
                    <div class="button button-minimize" data-action="aside-minimize" data-toggle="tooltip" data-placement="top" data-original-title="Minimize navigation"></div>                
                </div>
            </div>
        </div>

        <c-navigation-list />
    </div>
</template>

<script lang="ts">
export default {
  name: 'default_w_user',
  components: {
    'c-navigation-list': () => import('@/components/navigation/navigation-list')
  },
  data() {
    return {}
  }
}
</script>

<style>

</style>
