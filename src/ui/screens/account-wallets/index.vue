<template>
    <c-layout>
        <!-- PAGE CONTENT CONTAINER -->
        <div class="content" id="content">
            
            <!-- PAGE HEADING -->
            <div class="page-heading">
                <div class="page-heading__container">
                    <h1 class="title">Cards</h1>
                    <p class="caption">List of your active personal cards</p>
                </div>
                <c-heading />
            </div>
            <!-- //END PAGE HEADING -->
            
            <div class="container-fluid">  
                
                <div class="row">
                    <div class="col-12 col-lg-2" style="display: none">
                        
                        <div class="card">
                            <div class="card-body">
                                
                                <div class="user user--rounded user--bordered user--xlg margin-bottom-20">
                                    <img src="http://via.placeholder.com/128x128">
                                    <div class="user__name">
                                        <strong>John Doenson</strong><br>
                                        <a href="#">dolores.w@domain.com</a><br>
                                        <span class="text-muted">+9 (876) 543-21-09</span>
                                    </div>
                                </div>
                                
                                <button class="btn btn-light btn-block">Profile settings</button>
                                <button class="btn btn-light btn-block">Money transfers</button>
                                <button class="btn btn-light btn-block">Insurance</button>
                                
                            </div>
                            <div class="divider margin-top-10"></div>
                            <div class="list-group list-group-flush">
                                <a href="#" class="list-group-item list-group-item-action"><span class="fa fa-cc-mastercard"></span> 4149 5*** **** **29</a>
                                <a href="#" class="list-group-item list-group-item-action"><span class="fa fa-cc-visa"></span> 5412 7*** **** **31</a>
                                <a href="#" class="list-group-item list-group-item-action"><span class="fa fa-cc-visa"></span> 2249 9*** **** **48</a>
                            </div>
                            <div class="divider margin-bottom-10"></div>
                            <div class="card-body">
                                <div class="row margin-bottom-10">
                                    <div class="col-6">
                                        <p>Cards<br><strong>3 Active</strong></p>
                                    </div>
                                    <div class="col-6">
                                        <p>Verified<br><strong>Confirmed</strong></p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <p>Status<br><strong>Active</strong></p>
                                    </div>
                                    <div class="col-6">
                                        <p>Docs<br><strong>Uploaded 3 of 5</strong></p>
                                    </div>
                                </div>
                            </div>
                            <div class="divider margin-top-10 margin-bottom-10"></div>
                            <div class="page-heading">
                                <div class="page-heading__container">                                    
                                    <h1 class="title">Recent news</h1>
                                    <p class="caption">From all resources</p>                                            
                                </div>                                
                                <div class="page-heading__container float-right">                                            
                                    <button class="btn btn-light btn-icon"><span class="fa fa-refresh"></span></button>                                            
                                </div>
                            </div>
                            <div class="list-group list-group-flush">
                                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start border-top-0">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h5 class="mb-1">USA market goes...</h5>
                                        <small>1 day ago</small>
                                    </div>
                                    <p class="mb-1">Fusce euismod, nisi a ornare faucibus, erat metus.</p>                                        
                                </a>
                                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h5 class="mb-1">CBA network something...</h5>
                                        <small class="text-muted">2 days ago</small>
                                    </div>
                                    <p class="mb-1">Nullam vestibulum nec sapien a sodales...</p>                                        
                                </a>
                                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h5 class="mb-1">Google purchased new...</h5>
                                        <small class="text-muted">3 days ago</small>
                                    </div>
                                    <p class="mb-1">Sed ultrices, dui at aliquam mattis...</p>
                                </a>
                            </div>
                            <div class="card-body padding-top-5 padding-bottom-5">
                                <button class="btn btn-link btn-block">Preview all news</button>
                            </div>
                        </div>

                    </div>
                    <div class="col-12 col-lg-10"> 
                        
                        <div class="row">
                            <div class="col-12 col-lg-4" v-for="(item, index) in wallets" v-bind:key="index">

                                <div class="credit-card invert">
                                    <div class="row">
                                        <div class="col-6 text-left">
                                            <img src="/static/img/card/mastercard.png">
                                        </div>
                                        <div class="col-6 text-right">
                                            <button class="btn btn-light btn-icon"><span class="fa fa-cog"></span></button>
                                        </div>
                                    </div>
                                    <div class="row credit-card__number">
                                        <div class="col-3">{{item.name}}</div>
                                        <div class="col-3">53**</div>
                                        <div class="col-3">****</div>
                                        <div class="col-3">**21</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <span class="text-muted">Card holder</span><br>
                                            <strong>John Doe</strong>
                                        </div>
                                        <div class="col-6 text-right">
                                            <span class="text-muted">Expiration</span><br>
                                            <strong>09/20</strong>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                
            </div>                    
        </div>
        <!-- //END PAGE CONTENT CONTAINER -->
    </c-layout>
</template>

<script>
import { init as initEthereum } from '@/framework/ethereum'

export default {
  name: 'wallets',
  data() {
    return {
      msg: '',
    }
  },
  components: {
    'c-heading': () => import('@/ui/components/heading/heading'),
    'c-layout': () => import('@/ui/layouts/default')
  },
  data: () => ({
    wallets: [
        {
            name: 'Bitcoin',
            token: '',
            amount: '1'
        },
        {
            name: 'Ethereum',
            token: '',
            amount: '21'
        },
        {
            name: 'Hyperbridge',
            token: '',
            amount: '34'
        },
        {
            name: 'Civic',
            token: '',
            amount: '10'
        },
    ],
    profiles: [
        {
            name: 'aaa'
        }
    ]
  }),
  created() {
    initEthereum()
  }
}
</script>

<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
