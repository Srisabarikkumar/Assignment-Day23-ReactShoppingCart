const productData = [
    {
        "id": 1,
        "name": "Apple iPhone 14 Pro",
        "price": 999.99,
        "image_url": "https://cdn.dxomark.com/wp-content/uploads/medias/post-125428/Apple-iPhone-14-Pro-Max_FINAL_featured-image-packshot-review-1.jpg",
        "description": "The iPhone 14 Pro features a stunning Super Retina XDR display, A16 Bionic chip, and a pro camera system with 48MP main sensor."
    },
    {
        "id": 2,
        "name": "Samsung Galaxy S23 Ultra",
        "price": 1199.99,
        "image_url": "https://samsungmobilepress.com/file/2792F942A2A2123F030173931A3506693F1F0BF39CEB5BE58D55446CD8A4364370FB854B08F831A146DFC151E3EB85BD8FEC67F402DCF6AFAA1FE4058A429DED12142A032AAB1FCE138FD0078B104B95AAC1A7927213C22AA6D6D29ADDAF39519F70B87AF6816CAF2ECBFD1C19622FD5AD8804802C5FA1D782529E70C3ADE1D5",
        "description": "The Galaxy S23 Ultra offers a powerful Snapdragon 8 Gen 2 processor, a 200MP quad-camera setup."
    },
    {
        "id": 3,
        "name": "Sony WH-1000XM5",
        "price": 349.99,
        "image_url": "https://www.sony.co.in/image/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
        "description": "These noise-canceling headphones deliver high-resolution audio with industry-leading noise cancellation and up to 30 hours of battery life."
    },
    {
        "id": 4,
        "name": "Apple MacBook Air M2",
        "price": 1199.99,
        "image_url": "https://www.apple.com/newsroom/images/product/mac/standard/Apple-MacBook-Air-M2-availability-July-2022-hero_big.jpg.slideshow-large_2x.jpg",
        "description": "The MacBook Air M2 combines an ultra-thin design with Apple's M2 chip, offering exceptional performance and a Retina display."
    },
    {
        "id": 5,
        "name": "Dell XPS 13",
        "price": 999.99,
        "image_url": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9315/media-gallery/notebook-xps-9315-nt-blue-gallery-3.psd?fmt=pjpg&pscan=auto&scl=1&wid=4108&hei=2874&qlt=100,1&resMode=sharp2&size=4108,2874&chrss=full&imwidth=5000",
        "description": "A high-performance laptop with a sleek design, featuring an Intel Core i7 processor, 16GB RAM, and a 512GB SSD."
    },
    {
        "id": 6,
        "name": "Amazon Echo Dot (5th Gen)",
        "price": 49.99,
        "image_url": "https://m.media-amazon.com/images/G/31/kindle/journeys/eFu8CFvlYoIj2FKRtRoGVbg0fIKXUEyL3Ry8GNVsaMyM3D/ZWRhMGNkOWUt._CB404330879_.jpg",
        "description": "The Echo Dot is a smart speaker with Alexa, capable of controlling smart home devices, streaming music, and providing weather updates."
    },
    {
        "id": 7,
        "name": "Google Pixel 7",
        "price": 599.99,
        "image_url": "https://cdn.dxomark.com/wp-content/uploads/medias/post-127929/Google-Pixel-7_featured-image-packshot-review.jpg",
        "description": "The Pixel 7 features Google's Tensor chip, an advanced dual-camera system, and an OLED display with vibrant colors."
    },
    {
        "id": 8,
        "name": "Microsoft Surface Pro 9",
        "price": 999.99,
        "image_url": "https://m.media-amazon.com/images/I/51rC0TeCnSL.jpg",
        "description": "A versatile 2-in-1 device with a detachable keyboard, Intel Core processors, and a high-resolution PixelSense touchscreen."
    },
    {
        "id": 9,
        "name": "Nintendo Switch OLED",
        "price": 349.99,
        "image_url": "https://images.news18.com/ibnlive/uploads/2021/07/1625644781_featured-image-2021-07-07t132829.758.jpg",
        "description": "The Nintendo Switch OLED features a vibrant 7-inch OLED screen, enhanced audio, and a wide kickstand for tabletop gaming."
    },
    {
        "id": 10,
        "name": "GoPro HERO11 Black",
        "price": 399.99,
        "image_url": "https://m.media-amazon.com/images/I/6173hOyVCTL.jpg",
        "description": "A rugged action camera with 5.3K video recording, improved stabilization, and waterproof design for all your adventure needs."
    },
    {
        "id": 11,
        "name": "Apple AirPods Pro (2nd Gen)",
        "price": 249.99,
        "image_url": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MTJV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014871985",
        "description": "AirPods Pro offers active noise cancellation, transparency mode, and a customizable fit with new H2 chip for improved sound quality."
    },
    {
        "id": 12,
        "name": "Samsung QLED 65” 4K TV",
        "price": 1499.99,
        "image_url": "https://m.media-amazon.com/images/I/91IfvBdE4jL.jpg",
        "description": "This 65-inch QLED TV delivers stunning 4K resolution, Quantum HDR, and Smart TV features with voice control capabilities."
    },
    {
        "id": 13,
        "name": "Jabra Elite 85t",
        "price": 229.99,
        "image_url": "https://cdn.mos.cms.futurecdn.net/3WszNpeYzKi7vWaREaJnrM.jpg",
        "description": "The Jabra Elite 85t wireless earbuds feature adjustable active noise cancellation, high-quality sound, and a comfortable fit."
    },
    {
        "id": 14,
        "name": "Asus ROG Strix Scar 16",
        "price": 2399.99,
        "image_url": "https://in.store.asus.com/media/catalog/product/g/6/g634jy_z_2024_per_key_num_pad_3__1.jpg",
        "description": "A high-performance gaming laptop with an Intel Core i9 processor, NVIDIA GeForce RTX 4090 GPU, and a 16-inch display."
    },
    {
        "id": 15,
        "name": "Bose QuietComfort 45",
        "price": 329.99,
        "image_url": "https://www.notebookcheck.net/fileadmin/Notebooks/Bose/QuietComfort_45/Bose_QC45_2560.jpg",
        "description": "The Bose QuietComfort 45 headphones offer excellent noise cancellation, balanced audio, and comfortable over-ear design."
    },
    {
        "id": 16,
        "name": "Apple Watch Series 8",
        "price": 399.99,
        "image_url": "https://www.apple.com/ca/watch/images/meta/watch-gps-lte__f3xmp4zpdka6_og.png",
        "description": "Apple Watch Series 8 features a large display, advanced health monitoring, and fast charging capabilities, with a long lasting battery capacity."
    },
    {
        "id": 17,
        "name": "Sony A7 IV",
        "price": 2499.99,
        "image_url": "https://images-cdn.ubuy.co.in/65f314399d244b6db90b1676-sony-alpha-a7-iv-full-frame-mirrorless.jpg",
        "description": "The Sony A7 IV is a full-frame mirrorless camera with a 33MP sensor, advanced autofocus, and 4K video recording."
    },
    {
        "id": 18,
        "name": "Lenovo ThinkPadX1 Carbon Gen 10",
        "price": 1299.99,
        "image_url": "https://www.notebookcheck.net/fileadmin/_processed_/f/a/csm_DSC_0006_4dd3e5daa3.jpg",
        "description": "A business laptop featuring an Intel Core i7 processor, 16GB RAM, and a lightweight carbon fiber chassis for durability."
    },
    {
        "id": 19,
        "name": "HP Envy 15",
        "price": 1499.99,
        "image_url": "https://m.media-amazon.com/images/I/81T3CPOvdpL.jpg",
        "description": "The HP Envy 15 combines high performance with a sleek design, featuring an Intel Core i7 processor, 16GB RAM, and a 1TB SSD."
    },
    {
        "id": 20,
        "name": "SoundWave Pro Headphones",
        "price": 799.99,
        "image_url": "https://bharatsupply.com/images/detailed/9/BluetoothHeadphoneCallmate__85716.1625224501.1280.1280.jpg",
        "description": "SoundWave Pro Bluetooth Headphones offer immersive sound with noise-cancellation technology and with rapid charge capabilities.",
    }
]

export default productData;