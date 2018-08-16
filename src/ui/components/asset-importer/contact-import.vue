<template>
    <div class="assets-import">
        <h3>Import contacts</h3>
        <p class="mb-0">Now let's match the columns in your uploaded file to your MailChimp list.</p>
        <p><a href="#3">See an example of the import field match process</a></p>
        <div class="alert alert-primary my-4" role="alert">
            A simple primary alert—check it out!
        </div>
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="checkbox1" checked>
            <label class="custom-control-label" for="checkbox1">Check this custom checkbox</label>
        </div>
        <div class="row">
            <div class="col-12 col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h4>Column name</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({

        })
    }
</script>

<style lang="scss" scoped>
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
            h3{
                font-size: 16px;
                font-weight: bold;
            }
        }
    }
</style>
