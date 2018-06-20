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
                <nav aria-label="breadcrumb" role="navigation">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                        <li class="breadcrumb-item"><a href="#">Banking</a></li>
                        <li class="breadcrumb-item active">Cards</li>
                    </ol>
                </nav>
            </div>
            <!-- //END PAGE HEADING -->
            
            <div class="container-fluid">  
                
                <div class="row">
                    <div class="col-12 col-lg-2">
                        
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
                            <div class="col-12 col-lg-3">    

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
                                        <div class="col-3">4941</div>
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
                            <div class="col-12 col-lg-3">

                                <div class="credit-card invert">
                                    <div class="row">
                                        <div class="col-6 text-left">
                                            <img src="/static/img/card/visa.png">
                                        </div>        
                                        <div class="col-6 text-right">
                                            <button class="btn btn-light btn-icon"><span class="fa fa-cog"></span></button>
                                        </div>
                                    </div>
                                    <div class="row credit-card__number">
                                        <div class="col-3">4941</div>
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
                            <div class="col-12 col-lg-3">    

                                <div class="credit-card invert">
                                    <div class="row">
                                        <div class="col-6 text-left">
                                            <img src="/static/img/card/visa.png">
                                        </div>      
                                        <div class="col-6 text-right">
                                            <button class="btn btn-light btn-icon"><span class="fa fa-cog"></span></button>
                                        </div>
                                    </div>
                                    <div class="row credit-card__number">
                                        <div class="col-3">4941</div>
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
                            <div class="col-12 col-lg-3">    

                                <div class="credit-card invert">
                                    <div class="row">
                                        <div class="col-6">
                                            <img src="/static/img/card/paypal.png">
                                        </div>           
                                        <div class="col-6 text-right">
                                            <button class="btn btn-light btn-icon"><span class="fa fa-cog"></span></button>
                                        </div>
                                    </div>
                                    <div class="row credit-card__number">
                                        <div class="col-10">johndoe@momain.com</div>
                                        <div class="col-2"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <span class="text-muted">Added on</span><br>
                                            <strong>01/12/2018</strong>
                                        </div>                                                                                
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="row">                                                        
                            <div class="col-12">                                

                                <div class="card margin-bottom-0">
                                    <div class="page-heading">
                                        <div class="page-heading__container">                                    
                                            <h1 class="title">Recent activity</h1>
                                            <p class="caption">21/03/2018 - 29/03/2018</p>                                            
                                        </div>                                            
                                        <div class="page-heading__container float-right d-none d-md-block">
                                            <div class="input-group margin-bottom-0">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">
                                                        <i class="fa fa-credit-card"></i>
                                                    </div>
                                                </div>
                                                <select class="custom-select">
                                                    <option>4149 5*** **** **29</option>
                                                    <option>5412 7*** **** **31</option>
                                                    <option>2249 9*** **** **48</option>                                                
                                                </select>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="card-body padding-top-15 padding-bottom-15">

                                        <div class="table-responsive">
                                            <table class="table table-indent-rows margin-bottom-10" style="min-width: 500px;">                                            
                                                <tbody>
                                                    <tr>
                                                        <td width="40">
                                                            <div class="icon-box icon-box--bordered icon-box--rounded bg-secondary"><span class="fa fa-glass"></span></div>
                                                        </td>
                                                        <td>
                                                            <strong>Pizza Best Pizza</strong><br>
                                                            <span class="text-muted">Street name, 234 New York</span>
                                                        </td>
                                                        <td width="200">
                                                            <strong>25 March 2018</strong><br>
                                                            <span class="text-muted">12:23:15 GMT</span>
                                                        </td>
                                                        <td width="100">
                                                            <strong class="text-danger">-$14.55</strong><br>
                                                            <span class="text-muted">$1,959.22</span>
                                                        </td>                                                        
                                                    </tr>
                                                    <tr>
                                                        <td width="40">
                                                            <div class="icon-box icon-box--bordered icon-box--rounded bg-secondary"><span class="fa fa-shopping-basket"></span></div>
                                                        </td>
                                                        <td>
                                                            <strong>Products in ShopNmae</strong><br>
                                                            <span class="text-muted">Street name, 234 New York</span>
                                                        </td>
                                                        <td>
                                                            <strong>25 March 2018</strong><br>
                                                            <span class="text-muted">12:23:15 GMT</span>
                                                        </td>
                                                        <td>
                                                            <strong class="text-danger">-$32.21</strong><br>
                                                            <span class="text-muted">$2,054.99</span>
                                                        </td>                                                        
                                                    </tr>
                                                    <tr>
                                                        <td width="40">
                                                            <div class="icon-box icon-box--bordered icon-box--rounded bg-success"><span class="fa fa-university"></span></div>
                                                        </td>
                                                        <td>
                                                            <strong>Income</strong><br>
                                                            <span class="text-muted">5523 **** **** **23</span>
                                                        </td>
                                                        <td>
                                                            <strong>25 March 2018</strong><br>
                                                            <span class="text-muted">12:23:15 GMT</span>
                                                        </td>
                                                        <td>
                                                            <strong class="text-success">+$1000.00</strong><br>
                                                            <span class="text-muted">$2,185.75</span>
                                                        </td>                                                        
                                                    </tr>
                                                    <tr>
                                                        <td width="40">
                                                            <div class="icon-box icon-box--bordered icon-box--rounded bg-secondary"><span class="fa fa-shopping-bag"></span></div>
                                                        </td>
                                                        <td>
                                                            <strong>Online store purchase</strong><br>
                                                            <span class="text-muted">http://domain.com/store/</span>
                                                        </td>
                                                        <td>
                                                            <strong>25 March 2018</strong><br>
                                                            <span class="text-muted">12:23:15 GMT</span>
                                                        </td>
                                                        <td>
                                                            <strong class="text-danger">-$520.00</strong><br>
                                                            <span class="text-muted">$1,185.75</span>
                                                        </td>                                                        
                                                    </tr>
                                                    <tr>
                                                        <td width="40">
                                                            <div class="icon-box icon-box--bordered icon-box--rounded bg-danger"><span class="fa fa-exchange"></span></div>
                                                        </td>
                                                        <td>
                                                            <strong>Transfer</strong><br>
                                                            <span class="text-muted">To your card **21</span>
                                                        </td>
                                                        <td>
                                                            <strong>25 March 2018</strong><br>
                                                            <span class="text-muted">12:23:15 GMT</span>
                                                        </td>
                                                        <td>
                                                            <strong class="text-danger">-$100.00</strong><br>
                                                            <span class="text-muted">$1,285.75</span>
                                                        </td>                                                        
                                                    </tr>
                                                    <tr>
                                                        <td width="40">
                                                            <div class="icon-box icon-box--bordered icon-box--rounded bg-secondary"><span class="fa fa-exchange"></span></div>
                                                        </td>
                                                        <td>
                                                            <strong>Book store</strong><br>
                                                            <span class="text-muted">Street name, 234 LA</span>
                                                        </td>
                                                        <td>
                                                            <strong>24 March 2018</strong><br>
                                                            <span class="text-muted">12:23:15 GMT</span>
                                                        </td>
                                                        <td>
                                                            <strong class="text-danger">-$12.00</strong><br>
                                                            <span class="text-muted">$1,285.75</span>
                                                        </td>                                                        
                                                    </tr>
                                                    <tr>
                                                        <td width="40">
                                                            <div class="icon-box icon-box--bordered icon-box--rounded bg-secondary"><span class="fa fa-exchange"></span></div>
                                                        </td>
                                                        <td>
                                                            <strong>Payment</strong><br>
                                                            <span class="text-muted">Street name, 234 LA</span>
                                                        </td>
                                                        <td>
                                                            <strong>23 March 2018</strong><br>
                                                            <span class="text-muted">12:23:15 GMT</span>
                                                        </td>
                                                        <td>
                                                            <strong class="text-danger">-$59.00</strong><br>
                                                            <span class="text-muted">$1,380.75</span>
                                                        </td>                                                        
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="row">                                                    
                                            <div class="col-12 col-md-6">                                                

                                                <nav>
                                                    <ul class="pagination justify-content-end pagination--space">
                                                        <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
                                                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                        <li class="page-item"><a class="page-link margin-right-0" href="#">Next</a></li>
                                                    </ul>
                                                </nav>

                                            </div>
                                            <div class="col-12 col-md-6">
                                                <p class="text-muted margin-bottom-10 text-right">Total spent $459.21 per month</p>
                                            </div>
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
      msg: 'Welcome to Your Vue.js PWA',
    }
  },
  components: {
    'c-heading': () => import('@/components/heading/heading'),
    'c-layout': () => import('@/layouts/default')
  },
  created() {
    initEthereum()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
