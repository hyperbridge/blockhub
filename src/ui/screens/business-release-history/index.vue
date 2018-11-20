<template>
    <c-business-layout title="Release history">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <c-button status="outline-success" size="lg" :shadow="false" icon_hide>
                        Releases
                    </c-button>
                    <c-button status="outline-info" size="lg" class="margin-left-10" :shadow="false" icon_hide>
                        Tags
                    </c-button>
                </div>
                <div class="col-12">
                    <div class="history-list">
                        <div class="history-list__item">
                            <div class="history-list__item-info">
                                <div class="latest-badge">
                                    Latest Release
                                </div>
                                <span>
                                    10 days ago
                                </span>
                                        <span>
                                    <i class="fas fa-tag mr-2"></i> v.0.7.1
                                </span>
                            </div>
                            <div class="history-list__item-description">
                                <div class="h1">
                                    v.0.7.1
                                </div>
                                <div>
                                    Josh Doel released this this version 5 days ago
                                </div>
                                <div class="release-text padding-top-15">
                                    In this update:
                                    <ul>
                                        <li>
                                            Token purchase flow
                                        </li>
                                        <li>
                                            Copy to address works
                                        </li>
                                        <li>
                                            Account recovery
                                        </li>
                                        <li>
                                            Simplify sign up
                                        </li>
                                        <li>
                                            Hold ALT and click to give feedback!
                                        </li>
                                    </ul>
                                </div>
                                <div class="assets-list__wrapper">
                                    <div class="assets-list__button" @click="showList = !showList">
                                        <div class="icon">
                                            <i class="fas" :class="[ showList ? 'fa-angle-up' : 'fa-angle-down']"></i>
                                        </div>
                                        <div class="text">
                                            Assets (16)
                                        </div>
                                    </div>
                                    <div class="assets-list" v-if="showList">
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="history-list__item">
                            <div class="history-list__item-info">
                                <div class="latest-badge">
                                    Latest Release
                                </div>
                                <span>
                                    10 days ago
                                </span>
                                <span>
                                    <i class="fas fa-tag mr-2"></i> v.0.7.1
                                </span>
                            </div>
                            <div class="history-list__item-description">
                                <div class="h1">
                                    v.0.7.1
                                </div>
                                <div>
                                    Josh Doel released this this version 5 days ago
                                </div>
                                <div class="release-text padding-top-15">
                                    In this update:
                                    <ul>
                                        <li>
                                            Token purchase flow
                                        </li>
                                        <li>
                                            Copy to address works
                                        </li>
                                        <li>
                                            Account recovery
                                        </li>
                                        <li>
                                            Simplify sign up
                                        </li>
                                        <li>
                                            Hold ALT and click to give feedback!
                                        </li>
                                    </ul>
                                </div>
                                <div class="assets-list__wrapper">
                                    <div class="assets-list__button" @click="showList = !showList">
                                        <div class="icon">
                                            <i class="fas" :class="[ showList ? 'fa-angle-up' : 'fa-angle-down']"></i>
                                        </div>
                                        <div class="text">
                                            Assets (16)
                                        </div>
                                    </div>
                                    <div class="assets-list" v-if="showList">
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="history-list__item">
                            <div class="history-list__item-info">
                                <div class="latest-badge">
                                    Latest Release
                                </div>
                                <span>
                                    10 days ago
                                </span>
                                <span>
                                    <i class="fas fa-tag mr-2"></i> v.0.7.1
                                </span>
                            </div>
                            <div class="history-list__item-description">
                                <div class="h1">
                                    v.0.7.1
                                </div>
                                <div>
                                    Josh Doel released this this version 5 days ago
                                </div>
                                <div class="release-text padding-top-15">
                                    In this update:
                                    <ul>
                                        <li>
                                            Token purchase flow
                                        </li>
                                        <li>
                                            Copy to address works
                                        </li>
                                        <li>
                                            Account recovery
                                        </li>
                                        <li>
                                            Simplify sign up
                                        </li>
                                        <li>
                                            Hold ALT and click to give feedback!
                                        </li>
                                    </ul>
                                </div>
                                <div class="assets-list__wrapper">
                                    <div class="assets-list__button" @click="showList = !showList">
                                        <div class="icon">
                                            <i class="fas" :class="[ showList ? 'fa-angle-up' : 'fa-angle-down']"></i>
                                        </div>
                                        <div class="text">
                                            Assets (16)
                                        </div>
                                    </div>
                                    <div class="assets-list" v-if="showList">
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="history-list__item">
                            <div class="history-list__item-info">
                                <div class="latest-badge">
                                    Latest Release
                                </div>
                                <span>
                                    10 days ago
                                </span>
                                <span>
                                    <i class="fas fa-tag mr-2"></i> v.0.7.1
                                </span>
                            </div>
                            <div class="history-list__item-description">
                                <div class="h1">
                                    v.0.7.1
                                </div>
                                <div>
                                    Josh Doel released this this version 5 days ago
                                </div>
                                <div class="release-text padding-top-15">
                                    In this update:
                                    <ul>
                                        <li>
                                            Token purchase flow
                                        </li>
                                        <li>
                                            Copy to address works
                                        </li>
                                        <li>
                                            Account recovery
                                        </li>
                                        <li>
                                            Simplify sign up
                                        </li>
                                        <li>
                                            Hold ALT and click to give feedback!
                                        </li>
                                    </ul>
                                </div>
                                <div class="assets-list__wrapper">
                                    <div class="assets-list__button" @click="showList = !showList">
                                        <div class="icon">
                                            <i class="fas" :class="[ showList ? 'fa-angle-up' : 'fa-angle-down']"></i>
                                        </div>
                                        <div class="text">
                                            Assets (16)
                                        </div>
                                    </div>
                                    <div class="assets-list" v-if="showList">
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="history-list__item">
                            <div class="history-list__item-info">
                                <div class="latest-badge">
                                    Latest Release
                                </div>
                                <span>
                                    10 days ago
                                </span>
                                <span>
                                    <i class="fas fa-tag mr-2"></i> v.0.7.1
                                </span>
                            </div>
                            <div class="history-list__item-description">
                                <div class="h1">
                                    v.0.7.1
                                </div>
                                <div>
                                    Josh Doel released this this version 5 days ago
                                </div>
                                <div class="release-text padding-top-15">
                                    In this update:
                                    <ul>
                                        <li>
                                            Token purchase flow
                                        </li>
                                        <li>
                                            Copy to address works
                                        </li>
                                        <li>
                                            Account recovery
                                        </li>
                                        <li>
                                            Simplify sign up
                                        </li>
                                        <li>
                                            Hold ALT and click to give feedback!
                                        </li>
                                    </ul>
                                </div>
                                <div class="assets-list__wrapper">
                                    <div class="assets-list__button" @click="showList = !showList">
                                        <div class="icon">
                                            <i class="fas" :class="[ showList ? 'fa-angle-up' : 'fa-angle-down']"></i>
                                        </div>
                                        <div class="text">
                                            Assets (16)
                                        </div>
                                    </div>
                                    <div class="assets-list" v-if="showList">
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="history-list__item">
                            <div class="history-list__item-info">
                                <div class="latest-badge">
                                    Latest Release
                                </div>
                                <span>
                                    10 days ago
                                </span>
                                <span>
                                    <i class="fas fa-tag mr-2"></i> v.0.7.1
                                </span>
                            </div>
                            <div class="history-list__item-description">
                                <div class="h1">
                                    v.0.7.1
                                </div>
                                <div>
                                    Josh Doel released this this version 5 days ago
                                </div>
                                <div class="release-text padding-top-15">
                                    In this update:
                                    <ul>
                                        <li>
                                            Token purchase flow
                                        </li>
                                        <li>
                                            Copy to address works
                                        </li>
                                        <li>
                                            Account recovery
                                        </li>
                                        <li>
                                            Simplify sign up
                                        </li>
                                        <li>
                                            Hold ALT and click to give feedback!
                                        </li>
                                    </ul>
                                </div>
                                <div class="assets-list__wrapper">
                                    <div class="assets-list__button" @click="showList = !showList">
                                        <div class="icon">
                                            <i class="fas" :class="[ showList ? 'fa-angle-up' : 'fa-angle-down']"></i>
                                        </div>
                                        <div class="text">
                                            Assets (16)
                                        </div>
                                    </div>
                                    <div class="assets-list" v-if="showList">
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
                                            </div>
                                        </div>
                                        <div class="assets-list__item">
                                            <div class="icon">
                                                <i class="fas fa-download"></i>
                                            </div>
                                            <div class="title">
                                                Some latest release v.0.7.1
                                            </div>
                                            <div class="size">
                                                97.8 Mb
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
    </c-business-layout>
</template>

<script>
    export default {
        components: {
            'c-business-layout': (resolve) => require(['@/ui/layouts/business'], resolve),
        },
        data() {
            return {
                showList: false,
            }
        },
    }
</script>

<style lang="scss" scoped>
    .history-list {
        display: flex;
        flex-direction: column;
        margin: 30px 0;
        border-top: 1px solid #d4d4d4;
    }

    .history-list__item {
        display: flex;
        align-items: stretch;
        flex-wrap: nowrap;
    }

    .history-list__item-info {
        display: flex;
        flex-direction: column;
        text-align: right;
        padding: 20px 20px 20px 0;
        margin-right: 20px;
        width: 150px;
        font-size: 14px;
        border-right: 2px solid #d4d4d4;
        position: relative;
        &:after{
            position: absolute;
            top: 25px;
            right: -6px;
            width: 10px;
            height: 10px;
            border-radius: 100%;
            background: #d4d4d4;
            content: "";
        }
    }

    .history-list__item-description {
        padding: 10px 0;
        width: calc(100% - 170px);
    }

    .latest-badge {
        border: 1px solid #28a745;
        color: #28a745;
        padding: 0px 7px;
        border-radius: 2px;
        font-size: 10px;
        font-weight: 500;
        margin-bottom: 10px;
        text-transform: uppercase;
        margin-left: auto;
    }

    .assets-list__wrapper,
    .assets-list{
        display: flex;
        width: 100%;
        flex-direction: column;
    }
    .assets-list{
        padding-top: 10px;
    }
    .assets-list__button{
        display: flex;
        align-items: center;
        font-size: 20px;
        cursor: pointer;
        .icon{
            font-size: 24px;
        }
    }
    .assets-list__item{
        display: flex;
        align-items: center;
        padding: 5px 0;
        font-weight: 500;
        margin-top: 5px;
        color: #237cc1;
        font-size: 15px;
        .icon{
            font-size: 16px;
            margin-right: 8px;
        }
        .size{
            margin-left: auto;
            font-weight: normal;
        }
    }
</style>
