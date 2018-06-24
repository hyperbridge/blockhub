
<template>
    <div class="navigation" id="navigation-default">
        <h3>MY WALLETS</h3>

        <ul>
            <li class="title">Wallet</li>
            <li>
                <a href="index.html">
                    <span class="icon li-home"></span>
                    <span class="text">Add New</span>
                </a>
            </li>
            <li>
                <a href="index.html">
                    <span class="icon li-home"></span>
                    <span class="text">Backup to Device</span>
                </a>
            </li>
            <li class="title">Transactions</li>
            <li>
                <a href="#/account/send">
                    <span class="icon li-home"></span>
                    <span class="text">Send</span>
                </a>
            </li>
            <li>
                <a href="#/account/receive">
                    <span class="icon li-home"></span>
                    <span class="text">Receive</span>
                </a>
            </li>
            <li>
                <a href="#/account/transactions">
                    <span class="icon li-home"></span>
                    <span class="text">Transaction History</span>
                </a>
            </li>
            <li class="title">Help</li>
            <li>
                <a href="index.html">
                    <span class="icon li-home"></span>
                    <span class="text">Coin vs Token</span>
                </a>
            </li>
            <li>
                <a href="index.html">
                    <span class="icon li-home"></span>
                    <span class="text">Preferred Payment Sources</span>
                </a>
            </li>
            <li>
                <a href="index.html">
                    <span class="icon li-home"></span>
                    <span class="text">Search and Filters</span>
                </a>
            </li>
            <li>
                <a href="index.html">
                    <span class="icon li-home"></span>
                    <span class="text">Tokenized Assets</span>
                </a>
            </li>
            <li>
                <a href="index.html">
                    <span class="icon li-home"></span>
                    <span class="text">Sending Currency</span>
                </a>
            </li>
            <li>
                <a href="index.html">
                    <span class="icon li-home"></span>
                    <span class="text">More...</span>
                </a>
            </li>
            
            <li class="openable" style="display: none">
                <a href="#">
                    <span class="icon li-document"></span>
                    <span class="text">Add New</span>
                </a>
                <ul>
                    <li>
                        <a href="pages-gallery.html" class="no-icon">
                            <span class="text">Gallery</span>
                        </a>
                    </li>                                
                    <li>
                        <a href="pages-user-contacts.html" class="no-icon">
                            <span class="text">User contacts</span>
                        </a>
                    </li>
                    <li>
                        <a href="pages-user-profile.html" class="no-icon">
                            <span class="text">User profile</span>
                        </a>
                    </li>
                    <li class="openable">
                        <a href="#" class="no-icon">
                            <span class="text">Payment</span>
                        </a>
                        <ul>
                            <li>
                                <a href="pages-payments-list.html" class="no-icon">
                                    <span class="text">List of invoices</span>
                                </a>
                            </li>
                            <li>
                                <a href="pages-payments-invoice.html" class="no-icon">
                                    <span class="text">Invoice</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="openable">
                        <a href="#" class="no-icon">
                            <span class="text">FAQ</span>
                        </a>
                        <ul>
                            <li>
                                <a href="pages-faq.html" class="no-icon">
                                    <span class="text">Example 1</span>
                                </a>
                            </li>
                            <li>
                                <a href="pages-faq-2.html" class="no-icon">
                                    <span class="text">Example 2</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="pages-contact-us.html" class="no-icon">
                            <span class="text">Contact us</span>
                        </a>
                    </li>
                    <li>
                        <a href="pages-calendar.html" class="no-icon">
                            <span class="text">Calendar</span>
                        </a>
                    </li>
                    <li>
                        <a href="pages-login.html" class="no-icon">
                            <span class="text">Login page</span>
                        </a>
                    </li>
                    <li>
                        <a href="pages-registration.html" class="no-icon">
                            <span class="text">Registration</span>
                        </a>
                    </li>
                </ul>
            </li>
            
            <li class="openable" style="display: none">
                <a href="#">
                    <span class="icon li-menu-square"></span>
                    <span class="text">Tables</span>
                </a>
                <ul>
                    <li>
                        <a href="tables-default.html" class="no-icon">                
                            <span class="text">Default tables</span>
                        </a>                        
                    </li>
                    <li class="openable">
                        <a href="#" class="no-icon">                        
                            <span class="text">DataTables plugin</span>
                        </a>
                        <ul>                
                            <li>
                                <a href="tables-datatables.html" class="no-icon">
                                    <span class="text">Basic examples</span>
                                </a>            
                            </li>
                            <li>
                                <a href="tables-datatables-buttons.html" class="no-icon">
                                    <span class="text">Buttons extension</span>
                                </a>            
                            </li>
                            <li>
                                <a href="tables-datatables-responsive.html" class="no-icon">
                                    <span class="text">Responsive extension</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>