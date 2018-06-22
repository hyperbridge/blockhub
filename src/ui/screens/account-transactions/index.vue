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
                    <div class="col-12">
                        <h2>Transaction History</h2>

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
            name: 'Foo',
            token: '',
            amount: 0
        },
        {
            name: 'Foo',
            token: '',
            amount: 0
        },
        {
            name: 'Foo',
            token: '',
            amount: 0
        },
        {
            name: 'Foo',
            token: '',
            amount: 0
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

</style>
