<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="search-blk">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="tab1-nav" data-toggle="tab" href="#tab1" role="tab"
                                       aria-controls="tab" aria-expanded="true">Tab 1</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="tab2-nav" data-toggle="tab" href="#tab2" role="tab"
                                       aria-controls="tab">Tab 2</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="tab3-nav" data-toggle="tab" href="#tab3" role="tab"
                                       aria-controls="tab">Tab 3</a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab">
                                    <div class="tab-container">
                                        <div class="row align-items-center">
                                            <div class="col-12 col-md-6 col-lg-8">
                                                <div class="form-group mb-0">
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" placeholder="Search" aria-label="Search">
                                                        <div class="input-group-append">
                                                        <span class="input-group-text">
                                                            <i class="fas fa-search"></i>
                                                        </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-auto">
                                                <button class="btn btn-success" type="button" data-toggle="collapse" data-target="#moreFilters" aria-expanded="false" aria-controls="collapseFilters">
                                                    <i class="fas fa-sliders-h"></i>
                                                    Filters
                                                </button>
                                            </div>
                                        </div>
                                        <div class="collapse" id="moreFilters">
                                            <hr>
                                            <!--Checkbox list-->
                                            <div class="row">
                                                <div class="tab-card col-12 col-md-4 col-lg-3 mb-4">
                                                    <div class="checkbox-list">
                                                        <h4>Filters Type Title</h4>
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" id="checkbox1" checked>
                                                            <label class="custom-control-label" for="checkbox1">Check this custom checkbox</label>
                                                        </div>
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" id="checkbox2">
                                                            <label class="custom-control-label" for="checkbox2">Check this custom checkbox</label>
                                                        </div>
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" id="checkbox3">
                                                            <label class="custom-control-label" for="checkbox3">Check this custom checkbox</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-card col-12 col-md-4 col-lg-3 mb-4">
                                                    <div class="checkbox-list">
                                                        <h4>Filters Type Title</h4>
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" id="checkbox1" checked>
                                                            <label class="custom-control-label" for="checkbox1">Check this custom checkbox</label>
                                                        </div>
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" id="checkbox2">
                                                            <label class="custom-control-label" for="checkbox2">Check this custom checkbox</label>
                                                        </div>
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" id="checkbox3">
                                                            <label class="custom-control-label" for="checkbox3">Check this custom checkbox</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-card col-12 col-md-4 col-lg-3 mb-4">
                                                    <div class="checkbox-list">
                                                        <h4>Filters Type Title</h4>
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" id="checkbox1" checked>
                                                            <label class="custom-control-label" for="checkbox1">Check this custom checkbox</label>
                                                        </div>
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" id="checkbox2">
                                                            <label class="custom-control-label" for="checkbox2">Check this custom checkbox</label>
                                                        </div>
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" id="checkbox3">
                                                            <label class="custom-control-label" for="checkbox3">Check this custom checkbox</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-card col-12 col-md-4 col-lg-3 mb-4">
                                                    <div class="checkbox-list">
                                                        <h4>Filters Type Title</h4>
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" id="checkbox1" checked>
                                                            <label class="custom-control-label" for="checkbox1">Check this custom checkbox</label>
                                                        </div>
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" id="checkbox2">
                                                            <label class="custom-control-label" for="checkbox2">Check this custom checkbox</label>
                                                        </div>
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" id="checkbox3">
                                                            <label class="custom-control-label" for="checkbox3">Check this custom checkbox</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-card col-12 col-md-4 col-lg-3 mb-4">
                                                    <div class="checkbox-list">
                                                        <h4>Filters Type Title</h4>
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" id="checkbox1" checked>
                                                            <label class="custom-control-label" for="checkbox1">Check this custom checkbox</label>
                                                        </div>
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" id="checkbox2">
                                                            <label class="custom-control-label" for="checkbox2">Check this custom checkbox</label>
                                                        </div>
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" id="checkbox3">
                                                            <label class="custom-control-label" for="checkbox3">Check this custom checkbox</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!--Checkbox list End-->
                                            <!--Input row-->
                                            <div class="row">
                                                <div class="col-12 col-md-4 col-lg-3">
                                                    <div class="form-group">
                                                        <label>Search Title 1</label>
                                                        <div class="form-group">
                                                            <div class="input-group">
                                                                <input type="text" class="form-control" placeholder="Search" aria-label="Search">
                                                                <div class="input-group-append">
                                                            <span class="input-group-text">
                                                                <i class="fas fa-search"></i>
                                                            </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-4 col-lg-3">
                                                    <div class="form-group">
                                                        <label>Search Title 2</label>
                                                        <div class="form-group">
                                                            <div class="input-group">
                                                                <input type="text" class="form-control" placeholder="Search" aria-label="Search">
                                                                <div class="input-group-append">
                                                            <span class="input-group-text">
                                                                <i class="fas fa-search"></i>
                                                            </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-4 col-lg-3">
                                                    <div class="form-group">
                                                        <label>Search Title 3</label>
                                                        <div class="form-group">
                                                            <div class="input-group">
                                                                <input type="text" class="form-control" placeholder="Search" aria-label="Search">
                                                                <div class="input-group-append">
                                                            <span class="input-group-text">
                                                                <i class="fas fa-search"></i>
                                                            </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="tab2" role="tabpanel" aria-labelledby="tab"></div>
                                <div class="tab-pane" id="tab3" role="tabpanel" aria-labelledby="tab"></div>
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
            'c-layout': (resolve) => require(['@/ui/layouts/default'])
        },
        data: () => ({

        })
    }
</script>

<style lang="scss" scoped>

    .nav-tabs {
        border-bottom: none;
        position: relative;
        .nav-item {
            border-radius: 8px 8px 0 0;
            a {
                color: #606079;
                background: #393955;
                padding: 0 15px;
                font-size: 16px;
                line-height: 32px;
                border: none;
                position: relative;
                box-shadow: 0 -1px 10px rgba(0, 0, 0, .2);
                &:before {
                    content: "";
                    position: absolute;
                    height: 23px;
                    bottom: 0;
                    left: -30px;
                    border: 15px solid transparent;
                    border-bottom: 15px solid #393955;
                    border-right: 15px solid #393955;
                    -webkit-filter: drop-shadow(-5px 0px 3px rgba(0, 0, 0, .15));
                    filter: drop-shadow(-5px 0px 3px rgba(0, 0, 0, .1));
                }
                &:after {
                    content: "";
                    position: absolute;
                    height: 23px;
                    bottom: 0;
                    right: -30px;
                    border: 15px solid transparent;
                    border-bottom: 15px solid #393955;
                    border-left: 15px solid #393955;
                    -webkit-filter: drop-shadow(5px 0px 3px rgba(0, 0, 0, .15));
                    filter: drop-shadow(5px 0px 3px rgba(0, 0, 0, .15));
                }
                &.active {
                    border-bottom: none;
                    background: #3e3e5c;
                    z-index: 8;
                    &:before {
                        border-bottom-color: #3e3e5c;
                        border-right-color: #3e3e5c;
                    }
                    &:after {
                        border-bottom-color: #3e3e5c;
                        border-left-color: #3e3e5c;
                    }
                }
            }
            &:first-child {
                a {
                    box-shadow: 0 0 20px rgba(0, 0, 0, .2);
                    &:before {
                        display: none;
                    }
                }
            }
        }
    }
    .tab-pane {
        position: relative;
        background: #3e3e5c;
        padding: 25px;
        border-radius: 0 5px 5px 5px;
        border-top: none;
        box-shadow: 0 3px 20px rgba(0, 0, 0, .2);
        &:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            right: 15px;
            height: 15px;
            background: #3e3e5c;
            z-index: 10;
        }
        .tab-container {
            &.card-container{
                display: flex;
                flex-wrap: wrap;
                margin: 0 -15px;
            }
        }
    }
    .input-group {
        border-color: rgba(0, 0, 0, .7);
        border-radius: 5px;
        overflow: hidden;
        .input-group-append {
            margin: 0;
            .input-group-text {
                border: none;
            }
        }
        input {
            border: none;
            &:active,
            &:focus {
                border: unset;
                box-shadow: none;
            }
        }
    }

    .checkbox-list{
        h4{
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 15px;
        }
        label{
            font-size: 14px;
        }
        .custom-checkbox{
            margin: 10px 0;
        }
    }
</style>
