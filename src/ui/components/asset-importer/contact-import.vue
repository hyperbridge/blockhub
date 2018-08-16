<template>
    <div class="assets-import">
        <h3>Import contacts</h3>
        <p class="mb-0">Now let's match the columns in your uploaded file to your MailChimp list.</p>
        <p><a href="#3">See an example of the import field match process</a></p>
        <div class="alert alert-primary my-4" role="alert">
            A simple primary alert—check it out!
        </div>
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="checkbox1" v-model="skippedState">
            <label class="custom-control-label" for="checkbox1">Show skipped columns</label>
        </div>
        <div class="row mt-4">
            <div class="col-12 col-md-4">
                <div class="card">
                    <div class="card-header text-center">
                        <h4>Email Address</h4>
                        <h6>dedeqit@gmail.com</h6>
                        <div class="action">
                            <a href="#3" class="btn btn-sm btn-danger mx-1">Edit</a>
                            <a href="#3" class="btn btn-sm btn-info mx-1">Skip</a>
                        </div>
                    </div>
                    <ul class="list">
                        <li class="list-title">Email Address</li>
                        <li>dogo@gmail.com</li>
                        <li>stim43@i.com</li>
                        <li>ishar@do.com</li>
                        <li>kim@it-d.com</li>
                    </ul>
                </div>
            </div>
            <div class="col-12 col-md-4" v-if="skippedState">
                <div class="card">
                    <div class="card-header text-center">
                        <h4>First Name</h4>
                        <h6>text field</h6>
                        <div class="action">
                            <a href="#3" class="btn btn-sm btn-danger mx-1">Edit</a>
                            <a href="#3" class="btn btn-sm btn-info mx-1">Skip</a>
                        </div>
                    </div>
                    <ul class="list">
                        <li class="list-title">First Name</li>
                        <li>Eric</li>
                        <li>Josh</li>
                        <li>Daniel</li>
                        <li>Martin</li>
                    </ul>
                </div>
            </div>
            <div class="col-12 col-md-4" v-if="skippedState">

                <div class="card">
                    <div class="card-header text-center">
                        <h4>Last Name</h4>
                        <h6>text field</h6>
                        <div class="action">
                            <a href="#3" class="btn btn-sm btn-danger mx-1">Edit</a>
                            <a href="#3" class="btn btn-sm btn-info mx-1">Skip</a>
                        </div>
                    </div>
                    <ul class="list">
                        <li class="list-title">Last Name</li>
                        <li>Doel</li>
                        <li>Leclerc</li>
                        <li>Singh</li>
                        <li>Wahyundi</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['show_skipped'],
        data(){
            return {
                skippedState: this.show_skipped
            }
        },
    }
</script>

<style lang="scss" scoped>
    .btn-sm{
        padding: 0px 10px;
    }
    .assets-import{
        padding: 20px;
        color: #fff;
        width: 100%;
        h3{
            color: #fff;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 20px;
        }
        p{
            a{
                text-decoration: underline;
            }
        }
        .card{
            background: rgba(0, 0, 0, .1);
            color: #fff;
            h4{
                font-size: 16px;
                font-weight: bold;
                color: #fff;
                margin: 0;
                padding: 0;
            }
            h6{
                color: #fff;
                padding: 5px 0;
            }
            ul{
                padding: 0;
                margin: 0;
                li{
                    list-style: none;
                    display: block;
                    padding: 3px 10px;
                    text-align: left;
                    &:nth-child(1){
                        font-weight: bold;
                        font-size: 15px;
                    }
                    &:nth-child(odd){
                        background: rgba(255, 255, 255, .05);
                    }
                    &:hover{
                        background: rgba(255, 255, 255, .1);
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>
