<template>
    <div class="assets-import">
        <div class="assets-import__contact d-none">
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
                        <div class="card-header p-3 text-center d-none">
                            <h4>Email Address</h4>
                            <h6>dedeqit@gmail.com</h6>
                            <div class="action">
                                <a href="#3" class="btn btn-sm btn-danger mx-1">Edit</a>
                                <a href="#3" class="btn btn-sm btn-info mx-1">Skip</a>
                            </div>
                        </div>
                        <div class="card-header invert p-3">
                            <div class="form-group mb-2">
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Chose email</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div class="form-group m-0">
                                <a href="#3" class="btn btn-sm btn-success">Save</a>
                                <a href="#3" class="btn btn-sm btn-link mr-2">Skip</a>
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
                        <div class="card-header p-3 text-center">
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
                        <div class="card-header p-3 text-center">
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
        <div class="assets-import__loading">
            <div id="cont" data-pct="100">
                <svg id="svg" width="200" height="200" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
                    <circle id="bar" r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="515.48" stroke-dashoffset="0"></circle>
                </svg>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        props: ['show_skipped'],
        data(){
            return {
                skippedState: this.show_skipped,
                percent: 30
            }
        },
        created: function() {
            this.loadingPercent()
        },
        method: {
            loadingPercent: function () {
                    var val = parseInt(this.percent);
                    var $circle = $('#svg #bar');

                    if (isNaN(val)) {
                        val = 100;
                    }
                    else{
                        var r = $circle.attr('r');
                        var c = Math.PI*(r*2);

                        if (val < 0) { val = 0;}
                        if (val > 100) { val = 100;}

                        var pct = ((100-val)/100)*c;

                        $circle.css({ strokeDashoffset: pct});

                        $('#cont').attr('data-pct',val);
                    }
            }
        }
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
            select{
                height: 32px;
            }
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
    #svg circle {
        stroke-dashoffset: 0;
        transition: stroke-dashoffset 1s linear;
        stroke: rgba(0, 0, 0, .2);
        stroke-width: 1em;
    }
    #svg #bar {
        stroke: #FF9F1E;
    }
    #cont {
        display: block;
        height: 200px;
        width: 200px;
        margin: 2em auto;
        border-radius: 100%;
        position: relative;
        &:after {
            position: absolute;
            display: block;
            left: 50%;
            top: 50%;
            content: attr(data-pct)"%";
            margin-top: -100px;
            margin-left: -100px;
            border-radius: 100%;
            line-height: 200px;
            font-size: 2em;
            text-align: center;
            width: 100%;
        }
    }

</style>
