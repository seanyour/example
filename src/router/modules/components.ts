export default {
    path: 'components',
    name: 'Components',
    meta: {title: 'components'},
    redirect: 'tinymce',
    children: [
        {
            path: 'tinymce',
            name: 'Tinymce',
            meta: {title: 'tinymce'},
            component: () => import("views/Tinymce/Tinymce.vue")
        }
    ]
}