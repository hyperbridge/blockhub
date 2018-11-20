<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-8">
                <div class="form-group row align-items-center">
                    <div class="col-sm-3 col-lg-2">
                        <label>Version</label>
                    </div>
                    <div class="col-sm-9 col-lg-10">
                        <input type="text" class="form-control" placeholder="Example: v.0.0.7">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-3 col-lg-2">
                        <label>Your text</label>
                    </div>
                    <div class="col-sm-9 col-lg-10">
                        <c-text-editor v-model="text" :editorToolbar="customToolbar" />
                        <span class="form-text">Attach files by dragging & dropping, selecting them, or pasting from the clipboard.</span>
                    </div>
                </div>
                <div class="form-group row align-items-center">
                    <div class="col-sm-3 col-lg-2">
                    </div>
                    <div class="col-sm-9 col-lg-10">
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input">
                            <label class="form-check-label">This is pre-release</label>
                        </div>
                    </div>
                </div>
                <div class="form-group row align-items-center">
                    <div class="col-sm-3 col-lg-2">
                    </div>
                    <div class="col-sm-9 col-lg-10">
                        <c-button status="success" icon_hide>
                            Publish release
                        </c-button>
                        <c-button status="danger" icon_hide class="mx-3">
                            Save draft
                        </c-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { VueEditor } from "vue2-editor";

    export default {
        components: {
            'c-business-layout': (resolve) => require(['@/ui/layouts/business'], resolve),
            'c-text-editor': VueEditor
        },
        data() {
            return {
                loadingState: true,
                text: '',
                customToolbar: [
                    ["bold", "italic", "underline"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    [ "code-block"],
                    [{ 'size': ['small', false, 'large', 'huge'] }],
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    [{ 'color': [] }, { 'background': [] }],
                    ['clean']
                ]
            }
        },
        created(){
            console.log('created')
            $('#summernote').summernote({
                placeholder: 'Type in your text',
                tabsize: 2,
                height: 300,
                callbacks: {
                    // onBlur: () => {
                    //     Vue.set(this.text, 'content', $('#summernote').summernote('code'))
                    // }
                }
            });
        }
    }
</script>

<style lang="scss" scoped>
    .form-group{
        label{
            font-size: 14px;
            text-align: right;
        }
    }
</style>
