export default function FIND_PAGES_BY_COVER(cover) {
    switch (cover) {
        case 'example-1':
            return {
                shop: 'example-1-shop-page',
                contact: 'example-1-contact-page',
            }
        case 'example-2':
            return {
                shop: 'example-2-shop-page',
                contact: 'example-2-contact-page'
            }
    }
}