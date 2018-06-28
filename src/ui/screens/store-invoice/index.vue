<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container">  
                
                
                <div class="card">
                    <div class="card-body padding-top-50 padding-bottom-30">
                        
                        <div class="row padding-top-50 padding-bottom-50">
                            <div class="col-12">
                                
                                <div class="logo-holder logo-holder--xl logo-holder--wide">
                                    <div class="logo-text d-none d-lg-block"><strong class="text-primary">#</strong>BLOCK<strong>HUB</strong></div>
                                    <div class="logo-text d-lg-none"><strong class="text-primary">#</strong><strong>RW</strong></div>
                                </div>
                                <p class="subtitle text-center">Invoice #9533 from November 23, 2018</p>
                                                                        
                            </div>                                    
                        </div>
                        
                    </div>
                    <div class="card-body">
                        
                        <div class="card-inner-container">                                                                                 
                            <div class="form-row">
                                <div class="col-12 col-md-6 margin-top-10 margin-bottom-10">                                                                                                        
                                    
                                    <h4>Billing from</h4>
                                    <p>
                                        <strong>John Doe</strong><br>
                                        45 StreetName St.<br>
                                        City, Country, 00000<br>
                                        Phone: +98(765) 432-10-98
                                    </p>
                                    
                                </div>
                                <div class="col-12 col-md-6  margin-top-10 margin-bottom-10 text-right">                                                    
                                    
                                    <h4>Billing to</h4>
                                    <p>
                                        <strong>Dmitry Ivaniuk</strong><br>
                                        15 Nameofstreet St.<br>
                                        City, Country, 00000<br>
                                        Phone: +01(234) 567-89-01
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="card-body">
                        
                        <div class="table-responsive">
                            <table class="table table-bordered" style="min-width: 600px;">
                                <thead>
                                    <tr>
                                        <th colspan="2">Work we've done for you</th>
                                        <th>Hours</th>
                                        <th width="150">Rate</th>
                                        <th width="150">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td width="40" class="text-center">1</td>
                                        <td class="text-bold">WebSite design and sketches</td>
                                        <td>12:00</td>
                                        <td>$25</td>
                                        <td class="text-bold">$300.00</td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">2</td>
                                        <td class="text-bold">Website coding</td>
                                        <td>08:30</td>
                                        <td>$15</td>
                                        <td class="text-bold">$127.50</td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">3</td>
                                        <td class="text-bold">Logo design</td>
                                        <td>06:00</td>
                                        <td>$30</td>
                                        <td class="text-bold">$180.00</td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">4</td>
                                        <td class="text-bold">Newsletter template design</td>
                                        <td>05:00</td>
                                        <td>$25</td>
                                        <td class="text-bold">$125.00</td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">5</td>
                                        <td class="text-bold">iOS application design</td>
                                        <td>25:00</td>
                                        <td>$25</td>
                                        <td class="text-bold">$625.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div class="row">
                            <div class="col-12">
                                <table class="table table-bordered float-right" style="max-width: 300px;">
                                    <tbody>
                                        <tr>
                                            <td class="text-muted">Subtotal:</td>
                                            <td width="150" class="text-muted">$1,357.50</td>
                                        </tr>
                                        <tr>
                                            <td class="text-muted">Taxes (20%):</td>
                                            <td width="150" class="text-muted">$271.50</td>
                                        </tr>
                                        <tr class="bg-higlight">
                                            <td class="text-bold">Total Amout:</td>
                                            <td width="150" class="text-bold">$1,629.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div class="card-body">
                        <div class="row">
                            
                            <div class="col-12 col-md-6 margin-bottom-20">
                                <h4>Thank you for your choise</h4>
                                <p class="subtitle"><small>The right way template team</small></p>
                            </div>
                            <div class="col-12 col-md-6 text-right">
                                <h4>John Doenson</h4>
                                <p class="subtitle margin-bottom-20"><small>Director in THE RW</small></p>
                                
                                <p><img src="/static/img/logo.be79dbc.svg" alt="Signature" width="150" /></p>
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
    'c-layout': () => import('@/ui/layouts/default')
  },
  data() {
    return {
    }
  },
  computed: {
  }
}
</script>


<style>

</style>