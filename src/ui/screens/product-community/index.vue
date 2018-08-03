<template>
    <c-layout navigationKey="store-navigation">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12" v-if="!product">
                        Product not found
                    </div>
                    <div class="col-12" v-if="product">
                        <h1 class="title margin-top-10">{{ product.name }}</h1>

                        <c-tags-list :tags="product.author_tags" v-if="!editor_mode"></c-tags-list>

                        <ul class="nav nav-tabs margin-bottom-50 justify-content-between">
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/product/${product.id}`">Overview</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" :href="`/#/product/${product.id}/community`">Community</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/product/${product.id}/projects`">Projects</a>
                            </li>
                            <li class="nav-item pr-0">
                                <a class="nav-link" :href="`/#/product/${product.id}/assets`">Assets</a>
                            </li>
                        </ul>
                        <div v-if="community_1">
                            <div class="community-item">
                                <div class="community-item__header">
                                    <div class="icon">
                                        <i class="fas fa-map-pin"></i>
                                    </div>
                                    <div class="text">
                                        This post has been pinned and the title is a single line of text
                                    </div>
                                    <div class="statistic">
                                        <div class="rating down">
                                            <i class="fas fa-chevron-down"></i>
                                            87
                                        </div>
                                        <div class="user">
                                            <span class="time">25 min</span>
                                            <img
                                                src="https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png"/>
                                            <span class="name">Sakatoshi</span>
                                        </div>
                                        <div class="comments_count">
                                            <i class="fas fa-comment"></i>
                                            320
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="community-item">
                                <div class="community-item__header">
                                    <div class="icon">
                                        <i class="fas fa-lock"></i>
                                    </div>
                                    <div class="text">
                                        The previous title doesn't have it's single line aligned
                                        vertically because XD does not have this functionality.
                                    </div>
                                    <div class="statistic">
                                        <div class="rating up">
                                            <i class="fas fa-chevron-up"></i>
                                            103
                                        </div>
                                        <div class="user">
                                            <span class="time">3 min</span>
                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL"/>
                                            <span class="name">Nakatochi</span>
                                        </div>
                                        <div class="comments_count">
                                            <i class="fas fa-comment"></i>
                                            894391
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="community-item" :class="{ is_reply:reply }">
                                <div class="community-item__header">
                                    <div class="icon">
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div class="text">
                                        Actually all the boxes with the titles here are the same size
                                    </div>
                                    <div class="statistic">
                                        <div class="rating up">
                                            <i class="fas fa-chevron-up"></i>
                                            103
                                        </div>
                                        <div class="user">
                                            <span class="time">3 min</span>
                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL"/>
                                            <span class="name">Nakatochi</span>
                                        </div>
                                        <div class="comments_count">
                                            <i class="fas fa-comment"></i>
                                            894391
                                        </div>
                                    </div>
                                </div>
                                <div class="community-item__post">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum sem nec
                                        est interdum hendrerit. Phasellus ac magna leo. Duis faucibus posuere
                                        pellentesque. Aliquam bibendum tincidunt cursus. Sed sit amet mauris at est
                                        sodales elementum sed sed felis. Mauris consectetur, magna eu sodales luctus,
                                        ipsum arcu laoreet neque, ut pharetra lacus ipsum at ipsum. Sed at aliquam
                                        justo. Cras sagittis risus ut maximus pellentesque.</p>
                                    <img
                                        src="http://memesbams.com/wp-content/uploads/2017/08/2.3-Delightful-cheer-up-cat-meme.jpg"/>
                                </div>
                                <div class="community-item__post-reply" v-if="reply">
                                    <h4 class="mt-4 mb-2 text-left">Your Reply:</h4>
                                    <div class="form-group">
                                        <textarea class="form-control" rows="6"></textarea>
                                    </div>
                                </div>
                                <div class="community-item__action text-right">
                                    <a href="#3" class="btn btn-sm btn-icon" v-if="!reply">
                                        <i class="fas fa-thumbs-down"></i>
                                    </a>
                                    <a href="#3" class="btn btn-sm btn-info"
                                       v-if="!reply"
                                       @click="reply = true">
                                        Reply
                                    </a>
                                    <a href="#3" class="btn btn-sm btn-danger"
                                       @click="reply = false"
                                       v-if="reply">
                                        Cancel
                                    </a>
                                    <a href="#3" class="btn btn-sm btn-info"
                                       @click="reply = false"
                                       v-if="reply">
                                        Submit
                                    </a>
                                </div>
                            </div>
                            <div class="community-item">
                                <div class="community-item__header">
                                    <div class="icon">
                                        <i class="fas fa-comments"></i>
                                    </div>
                                    <div class="text">
                                        Actually all the boxes with the titles here are the same size
                                    </div>
                                    <div class="statistic">
                                        <div class="rating up">
                                            <i class="fas fa-chevron-up"></i>
                                            103
                                        </div>
                                        <div class="user">
                                            <span class="time">3 min</span>
                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL"/>
                                            <span class="name">Nakatochi</span>
                                        </div>
                                        <div class="comments_count">
                                            <i class="fas fa-comment"></i>
                                            894391
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="community_2">
                            <div class="community-item" :class="{ is_reply:reply }">
                                <div class="community-item__header">
                                    <div class="position">
                                        <i class="fas fa-sort-up"></i>
                                        <span class="number">
                                            +1029
                                        </span>
                                        <i class="fas fa-sort-down"></i>
                                    </div>
                                    <div class="icon">
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div class="text">
                                        Actually all the boxes with the titles here are the same size
                                    </div>
                                    <div class="statistic">
                                        <div class="rating up">
                                            <i class="fas fa-chevron-up"></i>
                                            103
                                        </div>
                                        <div class="user">
                                            <span class="time">3 min</span>
                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL"/>
                                            <span class="name">Nakatochi</span>
                                        </div>
                                        <div class="comments_count">
                                            <i class="fas fa-comment"></i>
                                            894391
                                        </div>
                                    </div>
                                </div>
                                <div class="community-item__post">
                                    <div class="community-item__post-menu">
                                        <div class="dropdown dropmenu_container">
                                            <div class="rw-btn rw-btn--card" data-toggle="dropdown"
                                                 aria-expanded="false">
                                                <div></div>
                                            </div>
                                            <div class="dropdown-menu">
                                                <ul class="list-unstyled">
                                                    <li>
                                                        <a href="#3" class="btn btn-sm btn-success">Save</a>
                                                    </li>
                                                    <li>
                                                        <a href="#3" class="btn btn-sm btn-info">Share</a>
                                                    </li>
                                                    <li>
                                                        <a href="#3" class="btn btn-sm btn-danger">Report</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum sem nec
                                            est interdum hendrerit. Phasellus ac magna leo. Duis faucibus posuere
                                            pellentesque. Aliquam bibendum tincidunt cursus. Sed sit amet mauris at est
                                            sodales elementum sed sed felis. Mauris consectetur, magna eu sodales luctus,
                                            ipsum arcu laoreet neque, ut pharetra lacus ipsum at ipsum. Sed at aliquam
                                            justo. Cras sagittis risus ut maximus pellentesque.</p>
                                    <img
                                        src="http://memesbams.com/wp-content/uploads/2017/08/2.3-Delightful-cheer-up-cat-meme.jpg"/>
                                </div>
                                <div class="community-item__post-reply" v-if="reply">
                                    <h4 class="mt-4 mb-2 text-left">Your Reply:</h4>
                                    <div class="form-group">
                                        <textarea class="form-control" rows="6"></textarea>
                                    </div>
                                </div>
                                <div class="community-item__action text-right">
                                    <a href="#3" class="btn btn-sm btn-icon" v-if="!reply">
                                        <i class="fas fa-thumbs-down"></i>
                                    </a>
                                    <a href="#3" class="btn btn-sm btn-info"
                                       v-if="!reply"
                                       @click="reply = true">
                                        Reply
                                    </a>
                                    <a href="#3" class="btn btn-sm btn-danger"
                                       @click="reply = false"
                                       v-if="reply">
                                        Cancel
                                    </a>
                                    <a href="#3" class="btn btn-sm btn-info"
                                       @click="reply = false"
                                       v-if="reply">
                                        Submit
                                    </a>
                                </div>

                                <div class="community-item__comment">
                                    <div class="position">
                                        <i class="fas fa-sort-up"></i>
                                        <span class="number">
                                            +1029
                                        </span>
                                        <i class="fas fa-sort-down"></i>
                                    </div>
                                    <div class="comment-container">
                                        <div class="community-item__post-menu">
                                            <div class="dropmenu_container dropright">
                                                <div class="rw-btn rw-btn--card" data-toggle="dropdown"
                                                     aria-expanded="false">
                                                    <div></div>
                                                </div>
                                                <div class="dropdown-menu">
                                                    <ul class="list-unstyled">
                                                        <li>
                                                            <a href="#3" class="btn btn-sm btn-success">Save</a>
                                                        </li>
                                                        <li>
                                                            <a href="#3" class="btn btn-sm btn-info">Share</a>
                                                        </li>
                                                        <li>
                                                            <a href="#3" class="btn btn-sm btn-danger">Report</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="comment-content">
                                            <div class="user_info">
                                                <img
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL"/>
                                                <div class="user_i">
                                                    <h6>SatoshiSan</h6>
                                                    <span class="time">3 years Ago</span>
                                                </div>
                                            </div>
                                            <div class="text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non
                                                maximus tellus, eu lacinia justo. Cras semper vestibulum est. Donec a
                                                massa vitae nibh consectetur efficitur non in erat. Morbi id dapibus
                                                tortor. Praesent sit amet vulputate leo, eu posuere neque. In id ante
                                                scelerisque, commodo nisi non, eleifend mauris. Pellentesque massa elit,
                                                semper non libero nec, interdum aliquet dolor.
                                            </div>
                                            <div class="sub_comments_list">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="community-item__post-reply" v-if="reply">
                                    <h4 class="mt-4 mb-2 text-left">Your Reply:</h4>
                                    <div class="form-group">
                                        <textarea class="form-control" rows="6"></textarea>
                                    </div>
                                </div>
                                <div class="community-item__action text-right">
                                    <a href="#3" class="btn btn-sm btn-info"
                                       v-if="!reply"
                                       @click="reply = true">
                                        Reply
                                    </a>
                                    <a href="#3" class="btn btn-sm btn-danger"
                                       @click="reply = false"
                                       v-if="reply">
                                        Cancel
                                    </a>
                                    <a href="#3" class="btn btn-sm btn-info"
                                       @click="reply = false"
                                       v-if="reply">
                                        Submit
                                    </a>
                                </div>

                                <div class="community-item__comment">
                                    <div class="position">
                                        <i class="fas fa-sort-up"></i>
                                        <span class="number">
                                            +1029
                                        </span>
                                        <i class="fas fa-sort-down"></i>
                                    </div>
                                    <div class="comment-container">
                                        <div class="community-item__post-menu">
                                            <div class="dropmenu_container dropright">
                                                <div class="rw-btn rw-btn--card" data-toggle="dropdown"
                                                     aria-expanded="false">
                                                    <div></div>
                                                </div>
                                                <div class="dropdown-menu">
                                                    <ul class="list-unstyled">
                                                        <li>
                                                            <a href="#3" class="btn btn-sm btn-success">Save</a>
                                                        </li>
                                                        <li>
                                                            <a href="#3" class="btn btn-sm btn-info">Share</a>
                                                        </li>
                                                        <li>
                                                            <a href="#3" class="btn btn-sm btn-danger">Report</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="comment-content">
                                            <div class="user_info">
                                                <img
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL"/>
                                                <div class="user_i">
                                                    <h6>SatoshiSan</h6>
                                                    <span class="time">3 years Ago</span>
                                                </div>
                                            </div>
                                            <div class="text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non
                                                maximus tellus, eu lacinia justo. Cras semper vestibulum est. Donec a
                                                massa vitae nibh consectetur efficitur non in erat. Morbi id dapibus
                                                tortor. Praesent sit amet vulputate leo, eu posuere neque. In id ante
                                                scelerisque, commodo nisi non, eleifend mauris. Pellentesque massa elit,
                                                semper non libero nec, interdum aliquet dolor.
                                            </div>
                                        </div>
                                        <div class="sub_comments_list">
                                            <div class="community-item__post-reply" v-if="reply">
                                                <h4 class="mt-4 mb-2 text-left">Your Reply:</h4>
                                                <div class="form-group">
                                                    <textarea class="form-control" rows="6"></textarea>
                                                </div>
                                            </div>
                                            <div class="community-item__action text-right">
                                                <a href="#3" class="btn btn-sm btn-info"
                                                   v-if="!reply"
                                                   @click="reply = true">
                                                    Reply
                                                </a>
                                                <a href="#3" class="btn btn-sm btn-danger"
                                                   @click="reply = false"
                                                   v-if="reply">
                                                    Cancel
                                                </a>
                                                <a href="#3" class="btn btn-sm btn-info"
                                                   @click="reply = false"
                                                   v-if="reply">
                                                    Submit
                                                </a>
                                            </div>
                                            <div class="community-item__comment">
                                                <div class="position">
                                                    <i class="fas fa-sort-up"></i>
                                                    <span class="number">
                                            +1029
                                        </span>
                                                    <i class="fas fa-sort-down"></i>
                                                </div>
                                                <div class="comment-container">
                                                    <div class="community-item__post-menu">
                                                        <div class="dropmenu_container dropright">
                                                            <div class="rw-btn rw-btn--card" data-toggle="dropdown"
                                                                 aria-expanded="false">
                                                                <div></div>
                                                            </div>
                                                            <div class="dropdown-menu">
                                                                <ul class="list-unstyled">
                                                                    <li>
                                                                        <a href="#3" class="btn btn-sm btn-success">Save</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#3" class="btn btn-sm btn-info">Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#3" class="btn btn-sm btn-danger">Report</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="comment-content">
                                                        <div class="user_info">
                                                            <img
                                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL"/>
                                                            <div class="user_i">
                                                                <h6>SatoshiSan</h6>
                                                                <span class="time">3 years Ago</span>
                                                            </div>
                                                        </div>
                                                        <div class="text">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non
                                                            maximus tellus, eu lacinia justo. Cras semper vestibulum est. Donec a
                                                            massa vitae nibh consectetur efficitur non in erat. Morbi id dapibus
                                                            tortor. Praesent sit amet vulputate leo, eu posuere neque. In id ante
                                                            scelerisque, commodo nisi non, eleifend mauris. Pellentesque massa elit,
                                                            semper non libero nec, interdum aliquet dolor.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="community-item__comment">
                                                <div class="position">
                                                    <i class="fas fa-sort-up"></i>
                                                    <span class="number">
                                            +1029
                                        </span>
                                                    <i class="fas fa-sort-down"></i>
                                                </div>
                                                <div class="comment-container">
                                                    <div class="community-item__post-menu">
                                                        <div class="dropmenu_container dropright">
                                                            <div class="rw-btn rw-btn--card" data-toggle="dropdown"
                                                                 aria-expanded="false">
                                                                <div></div>
                                                            </div>
                                                            <div class="dropdown-menu">
                                                                <ul class="list-unstyled">
                                                                    <li>
                                                                        <a href="#3" class="btn btn-sm btn-success">Save</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#3" class="btn btn-sm btn-info">Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#3" class="btn btn-sm btn-danger">Report</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="comment-content">
                                                        <div class="user_info">
                                                            <img
                                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL"/>
                                                            <div class="user_i">
                                                                <h6>SatoshiSan</h6>
                                                                <span class="time">3 years Ago</span>
                                                            </div>
                                                        </div>
                                                        <div class="text">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non
                                                            maximus tellus, eu lacinia justo. Cras semper vestibulum est. Donec a
                                                            massa vitae nibh consectetur efficitur non in erat. Morbi id dapibus
                                                            tortor. Praesent sit amet vulputate leo, eu posuere neque. In id ante
                                                            scelerisque, commodo nisi non, eleifend mauris. Pellentesque massa elit,
                                                            semper non libero nec, interdum aliquet dolor.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="community-item__comment">
                                                <div class="position">
                                                    <i class="fas fa-sort-up"></i>
                                                    <span class="number">
                                            +1029
                                        </span>
                                                    <i class="fas fa-sort-down"></i>
                                                </div>
                                                <div class="comment-container">
                                                    <div class="community-item__post-menu">
                                                        <div class="dropmenu_container dropright">
                                                            <div class="rw-btn rw-btn--card" data-toggle="dropdown"
                                                                 aria-expanded="false">
                                                                <div></div>
                                                            </div>
                                                            <div class="dropdown-menu">
                                                                <ul class="list-unstyled">
                                                                    <li>
                                                                        <a href="#3" class="btn btn-sm btn-success">Save</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#3" class="btn btn-sm btn-info">Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#3" class="btn btn-sm btn-danger">Report</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="comment-content">
                                                        <div class="user_info">
                                                            <img
                                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL"/>
                                                            <div class="user_i">
                                                                <h6>SatoshiSan</h6>
                                                                <span class="time">3 years Ago</span>
                                                            </div>
                                                        </div>
                                                        <div class="text">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non
                                                            maximus tellus, eu lacinia justo. Cras semper vestibulum est. Donec a
                                                            massa vitae nibh consectetur efficitur non in erat. Morbi id dapibus
                                                            tortor. Praesent sit amet vulputate leo, eu posuere neque. In id ante
                                                            scelerisque, commodo nisi non, eleifend mauris. Pellentesque massa elit,
                                                            semper non libero nec, interdum aliquet dolor.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="community-item__comment">
                                                <div class="position">
                                                    <i class="fas fa-sort-up"></i>
                                                    <span class="number">
                                                        +1029
                                                    </span>
                                                    <i class="fas fa-sort-down"></i>
                                                </div>
                                                <div class="comment-container">
                                                    <div class="community-item__post-menu">
                                                        <div class="dropmenu_container dropright">
                                                            <div class="rw-btn rw-btn--card" data-toggle="dropdown"
                                                                 aria-expanded="false">
                                                                <div></div>
                                                            </div>
                                                            <div class="dropdown-menu">
                                                                <ul class="list-unstyled">
                                                                    <li>
                                                                        <a href="#3" class="btn btn-sm btn-success">Save</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#3" class="btn btn-sm btn-info">Share</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#3" class="btn btn-sm btn-danger">Report</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="comment-content">
                                                        <div class="user_info">
                                                            <img
                                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL"/>
                                                            <div class="user_i">
                                                                <h6>SatoshiSan</h6>
                                                                <span class="time">3 years Ago</span>
                                                            </div>
                                                        </div>
                                                        <div class="text">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non
                                                            maximus tellus, eu lacinia justo. Cras semper vestibulum est. Donec a
                                                            massa vitae nibh consectetur efficitur non in erat. Morbi id dapibus
                                                            tortor. Praesent sit amet vulputate leo, eu posuere neque. In id ante
                                                            scelerisque, commodo nisi non, eleifend mauris. Pellentesque massa elit,
                                                            semper non libero nec, interdum aliquet dolor.
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
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    const updateProduct = function () {
        if (!this.$store.state.marketplace.products)
            return

        const product = this.$store.state.marketplace.products[this.id]

        if (!product)
            return

        if (product.images && product.images.header)
            window.document.body.style['background-image'] = 'url(' + product.images.header + ')'

        return product
    }

    export default {
        props: ['id'],
        components: {
            'c-layout': () => import('@/ui/layouts/default'),
            'c-tags-list': () => import('@/ui/components/product-tags'),
        },
        data() {
            return {
                community_1: true,
                community_2: false,
                reply: false
            }
        },
        methods: {
            save() {
                this.$store.dispatch('marketplace/updateProduct', this.product)
            }
        },
        computed: {
            product: updateProduct
        },
        mounted: updateProduct,
        created: updateProduct,
        beforeDestroy() {
            window.document.body.style['background-image'] = 'url(/static/img/products/default.png)'
        }
    }
</script>

<style lang="scss" scoped>
    .community-item {
        background: rgba(0, 0, 0, .16);
        border: 1px solid rgba(112, 112, 112, .2);
        margin-bottom: 15px;
        border-radius: 5px;
        &.is_reply {
            background: rgba(255, 255, 255, .1);
        }
    }

    .community-item__header {
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        .position {
            width: 50px;
            text-align: center;
            padding: 13px 0 15px;
            position: relative;
            margin-right: 10px;
            span {
                display: block;
                position: relative;
                z-index: 4;
                &.up {
                    color: #43C981;
                }
                &.down {
                    color: #F75D5D;
                }
            }
            i {
                font-size: 26px;
                position: absolute;
                left: 0;
                right: 0;
                z-index: 3;
                cursor: pointer;
                color: #C6C6D6;
                &.fa-sort-up {
                    top: 0;
                    &:hover {
                        color: #43C981;
                    }
                }
                &.fa-sort-down {
                    bottom: 0;
                    &:hover {
                        color: #F75D5D;
                    }
                }
            }
        }
        .icon {
            width: 40px;
            height: 40px;
            margin-right: 15px;
            line-height: 40px;
            text-align: center;
            background: rgba(0, 0, 0, .13);
            font-size: 18px;
            .fa-map-pin {
                color: #5D75F7;
            }
            .fa-lock {
                color: #F75D5D;
            }
            .fa-star {
                color: #FADC72;
            }
            .fa-comments {
                color: #3D3E5D;
            }
        }
        .text {
            width: calc(70% - 70px);
            font-weight: bold;
            font-size: 16px;
        }
        .statistic {
            width: 30%;
            min-width: 250px;
            margin-left: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .rating {
                width: 40px;
                text-align: center;
                i {
                    margin-right: 5px;
                }
                &.down {
                    color: #F75D5D;
                }
                &.up {
                    color: #43C981;
                }
            }
            .user {
                text-align: center;
                img {
                    width: 20px;
                    height: 20px;
                    border-radius: 100%;
                    margin: 0 5px;
                    float: unset;
                }
            }
            .comments_count {
                width: 60px;
                text-align: left;
                i {
                    margin-right: 5px;
                }
            }
        }
    }

    .community-item__post {
        background: rgba(0, 0, 0, .1);
        border: 1px solid rgba(112, 112, 112, .5);
        border-radius: 5px;
        margin: 21px 10px 10px;
        padding: 10px 30px 10px 10px;
        font-size: 14px;
        line-height: 16px;
        max-height: 350px;
        overflow-y: auto;
        position: relative;
        overflow-x: hidden;
        img {
            max-width: 100%;
            max-height: 300px;
        }
        &::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, .3);
            border-radius: 0;
        }
        &::-webkit-scrollbar {
            width: 4px;
            background: rgba(0, 0, 0, .3);
        }
        &::-webkit-scrollbar-thumb {
            background-color: #5D75F7;
            border-radius: 0;
            border: none;
        }
    }

    .community-item__post-menu {
        position: absolute;
        right: 0;
        top: 5px;
        width: 20px;
        height: 20px;
        .dropmenu_container {
            .rw-btn--card {
                padding: 0;
                border: none;
                width: 20px;
                height: 20px;
                div {
                    border-color: #fff;
                    &:before,
                    &:after {
                        border-color: #fff;
                    }
                }
                &:hover {
                    background: transparent;
                }
            }
            &.show {
                .rw-btn--card {
                    background: transparent;
                    color: #fff;
                    div {
                        border-color: #fff;
                        &:before,
                        &:after {
                            background: #fff;
                        }
                    }
                }
            }
            .dropdown-menu {
                width: auto;
                min-width: 80px;
                padding: 0;
                background: #151824;
                &:before {
                    width: 10px;
                    height: 10px;
                    display: inline-block;
                    content: "";
                    position: absolute;
                    top: -5px;
                    right: 5px;
                }
                ul {
                    padding: 0;
                    margin: 0;
                    li {
                        width: 100%;
                        padding: 3px;
                        a {
                            width: 100%;
                            text-align: center;
                            text-transform: uppercase;
                            color: #fff;
                            padding: 0;
                            font-weight: bold;
                        }
                    }
                }
            }
        }
    }

    .community-item__action {
        margin: 10px 7px;
        .btn {
            padding: 0px 7px;
            text-transform: uppercase;
            font-weight: bold;
            margin: 0 3px;
        }
        .btn-icon {
            color: #F75D5D;
            font-size: 16px;
        }
        .btn-info {
            background: #5D75F7;
        }
        .btn-danger {
            background: #F75D5D;
        }
    }

    .community-item__post-reply {
        margin: 0 10px;
        h4 {
            font-weight: bold;
        }
        textarea {
            background: rgba(0, 0, 0, .1);
        }
    }

    .community-item__comment {
        display: flex;
        justify-content: space-between;
        align-items: self-start;
        padding: 0 10px;
        margin: 30px 0 10px;
        .position {
            width: 50px;
            text-align: center;
            padding: 13px 0 15px;
            position: relative;
            margin-right: 10px;
            span {
                display: block;
                position: relative;
                z-index: 4;
                &.up {
                    color: #43C981;
                }
                &.down {
                    color: #F75D5D;
                }
            }
            i {
                font-size: 26px;
                position: absolute;
                left: 0;
                right: 0;
                z-index: 3;
                cursor: pointer;
                color: #C6C6D6;
                &.fa-sort-up {
                    top: 0;
                    &:hover {
                        color: #43C981;
                    }
                }
                &.fa-sort-down {
                    bottom: 0;
                    &:hover {
                        color: #F75D5D;
                    }
                }
            }
        }
        .comment-container {
            width: calc(100% - 65px);
            background: rgba(0, 0, 0, .16);
            border: 1px solid rgba(112, 112, 112, .4);
            position: relative;
            .comment-content{
                padding: 15px 20px;
                display: flex;
                justify-content: space-between;
                .user_info {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: auto;
                    max-width: 30%;
                    margin-right: 20px;
                    img {
                        width: 30px;
                        height: 30px;
                        object-fit: cover;
                        border-radius: 100%;
                        margin-right: 10px;
                    }
                    h6{
                        padding: 0;
                        margin: 0;
                        font-weight: bold;
                        font-size: 14px;
                    }
                    .time{
                        float: right;
                    }
                }
                .text{
                    width: auto;
                    font-size: 14px;
                    line-height: 17px;
                }
            }
            .sub_comments_list{
                display: block;
                width: 100%;
                border-top: 1px solid rgba(255, 255, 255, .1);
            }
        }
    }
</style>
