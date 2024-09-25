<template>
    <admin-layout>
        <div class="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div class="flex flex-wrap mb-6">
                <div class="w-full">
                    <div class="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        <table class="shadow-lg bg-white section-form w-full">
                            <tr>
                                <th class="bg-blue-100 border ltr:text-left rtl:text-right text-sm px-8 py-4">{{ __('#') }}</th>
                                <th class="bg-blue-100 border ltr:text-left rtl:text-right text-sm px-8 py-4">{{ __('Book Name') }}</th>
                                <th class="bg-blue-100 border ltr:text-left rtl:text-right text-sm px-8 py-4">{{ __('Video Link') }}</th>
                                <th class="bg-blue-100 border ltr:text-left rtl:text-right text-sm px-8 py-4">{{ __('Answer Key') }}</th>
                            </tr>
                            <tr v-for="book in books">
                                <td class="border px-8 py-2">
                                    <span class="text-sm">{{ book.id }}</span>
                                </td>
                                <td class="border px-8 py-2">
                                    <span class="text-sm">{{ book.name }}</span>
                                </td>
                                <td class="border px-8 py-2">
                                    <span class="text-sm">{{ book.video_link }}</span>
                                </td>
                                <td class="border px-8 py-2">
                                    <span class="text-sm">{{ book.answer_key_pdf }}</span>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </admin-layout>
</template>

<script>
    import AdminLayout from "@/Layouts/AdminLayout";

    export default {
        components: {
            AdminLayout
        },
        props: {
            books: Array
        },
        metaInfo() {
            return {
                title: this.title
            }
        },
        computed: {
            title() {
                return this.__('Admin Dashboard')+' - ' + this.$page.props.general.app_name;
            }
        },
    }
</script>
