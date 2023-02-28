// @unocss-include
export default {
    path: 'components',
    name: 'Components',
    meta: {title: 'components', icon: 'i-icon-park-outline-components'},
    redirect: 'tinymce',
    children: [
        {
            path: 'tinymce',
            name: 'Tinymce',
            meta: {title: 'tinymce', icon: 'i-icon-park-editor'},
            component: () => import("views/Tinymce/Tinymce.vue")
        },
        {
            path: 'json',
            name: 'Json',
            meta: {title: 'json', icon: 'i-lucide-file-json'},
            component: () => import("views/Json/Json.vue")
        }
    ]
}