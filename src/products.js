const products = [
    {
        id: 0,
        image: "https://i.pinimg.com/236x/13/f4/47/13f447b12d02019d1c5feeeb6165fe80.jpg",
        title: "Camera",
        price: "500",
        brand: "Nikon",
        description: `Introducing the XYZ Pro Model Z Camera, the ultimate tool for capturing life's most precious moments with unparalleled precision and clarity. Engineered with cutting-edge technology and professional-grade features, this camera is a game-changer for photographers and videographers alike.

        Key Features:

        1. Crystal-Clear Image Quality: Equipped with a high-resolution 24MP full-frame sensor and advanced image processing, the XYZ Pro Model Z delivers stunning, true-to-life images with rich colors and exceptional detail.
        2. 4K Ultra-HD Video: Capture breathtaking videos in 4K resolution at 60 frames per second, allowing you to relive your memories with cinematic quality.
        3. Precision Autofocus: Our fast and accurate autofocus system ensures you never miss a moment. With intelligent subject tracking and eye-detection technology, every shot is sharp and in focus.
        4. Versatile Lens Compatibility: The XYZ Pro Model Z is compatible with a wide range of lenses, offering endless creative possibilities for various shooting scenarios, from landscape photography to portrait sessions.
        5. Intuitive Touchscreen Display: The large 3-inch LCD touchscreen provides a user-friendly interface, making it effortless to navigate settings and review shots.
        6. Dual Memory Card Slots: With two memory card slots, you can expand storage capacity and backup your precious memories for added peace of mind.
        7. Weather-Sealed Construction: Built to withstand the elements, the camera's rugged design ensures reliable performance even in challenging environments.
        8. Extended Battery Life: The powerful battery offers extended shooting sessions, allowing you to focus on capturing the perfect shot without worrying about running out of power.
        9. Wi-Fi and Bluetooth Connectivity: Easily transfer images and videos to your smartphone or tablet for quick sharing with friends and family.
        10. Professional Ergonomics: The XYZ Pro Model Z's ergonomic design provides a comfortable grip and intuitive button layout, ensuring effortless handling during extended photo sessions.`,
        ratings: [
            { name: "Abdur Rehman", review: "This product is awesome", rating: 4.5 },
            { name: "Sarah Johnson", review: "Great quality and value for money!", rating: 5 },
            { name: "Alex Smith", review: "Highly recommended! Fast shipping too.", rating: 4.8 },
            { name: "Emily Lee", review: "I love this product! It exceeded my expectations.", rating: 4.7 },
            { name: "John Doe", review: "Not bad, but could be better.", rating: 3.5 }
        ]
    },
    {
        id: 1,
        image: "https://i.pinimg.com/236x/6d/ee/67/6dee67772c774bdf4cc14889b231cb14.jpg",
        title: "Laptop",
        price: "600",
        brand: "HP",
        description: `Introducing the XYZ Pro Model Z Camera, the ultimate tool for capturing life's most precious moments with unparalleled precision and clarity. Engineered with cutting-edge technology and professional-grade features, this camera is a game-changer for photographers and videographers alike.

        Key Features:

        1. Crystal-Clear Image Quality: Equipped with a high-resolution 24MP full-frame sensor and advanced image processing, the XYZ Pro Model Z delivers stunning, true-to-life images with rich colors and exceptional detail.
        2. 4K Ultra-HD Video: Capture breathtaking videos in 4K resolution at 60 frames per second, allowing you to relive your memories with cinematic quality.
        3. Precision Autofocus: Our fast and accurate autofocus system ensures you never miss a moment. With intelligent subject tracking and eye-detection technology, every shot is sharp and in focus.
        4. Versatile Lens Compatibility: The XYZ Pro Model Z is compatible with a wide range of lenses, offering endless creative possibilities for various shooting scenarios, from landscape photography to portrait sessions.
        5. Intuitive Touchscreen Display: The large 3-inch LCD touchscreen provides a user-friendly interface, making it effortless to navigate settings and review shots.
        6. Dual Memory Card Slots: With two memory card slots, you can expand storage capacity and backup your precious memories for added peace of mind.
        7. Weather-Sealed Construction: Built to withstand the elements, the camera's rugged design ensures reliable performance even in challenging environments.
        8. Extended Battery Life: The powerful battery offers extended shooting sessions, allowing you to focus on capturing the perfect shot without worrying about running out of power.
        9. Wi-Fi and Bluetooth Connectivity: Easily transfer images and videos to your smartphone or tablet for quick sharing with friends and family.
        10. Professional Ergonomics: The XYZ Pro Model Z's ergonomic design provides a comfortable grip and intuitive button layout, ensuring effortless handling during extended photo sessions.`,
        ratings: [
            { name: "Abdur Rehman", review: "This product is awesome", rating: 4.5 },
            { name: "Sarah Johnson", review: "Great quality and value for money!", rating: 5 },
            { name: "Alex Smith", review: "Highly recommended! Fast shipping too.", rating: 4.8 },
            { name: "Emily Lee", review: "I love this product! It exceeded my expectations.", rating: 4.7 },
            { name: "John Doe", review: "Not bad, but could be better.", rating: 3.5 }
        ]
    },
    {
        id: 2,
        image: "https://i.pinimg.com/236x/0d/6f/28/0d6f285f86d696c90b7ac4122bf5d730.jpg",
        title: "Ipad",
        price: "400",
        description: `Introducing the XYZ Pro Model Z Camera, the ultimate tool for capturing life's most precious moments with unparalleled precision and clarity. Engineered with cutting-edge technology and professional-grade features, this camera is a game-changer for photographers and videographers alike.

        Key Features:

        1. Crystal-Clear Image Quality: Equipped with a high-resolution 24MP full-frame sensor and advanced image processing, the XYZ Pro Model Z delivers stunning, true-to-life images with rich colors and exceptional detail.
        2. 4K Ultra-HD Video: Capture breathtaking videos in 4K resolution at 60 frames per second, allowing you to relive your memories with cinematic quality.
        3. Precision Autofocus: Our fast and accurate autofocus system ensures you never miss a moment. With intelligent subject tracking and eye-detection technology, every shot is sharp and in focus.
        4. Versatile Lens Compatibility: The XYZ Pro Model Z is compatible with a wide range of lenses, offering endless creative possibilities for various shooting scenarios, from landscape photography to portrait sessions.
        5. Intuitive Touchscreen Display: The large 3-inch LCD touchscreen provides a user-friendly interface, making it effortless to navigate settings and review shots.
        6. Dual Memory Card Slots: With two memory card slots, you can expand storage capacity and backup your precious memories for added peace of mind.
        7. Weather-Sealed Construction: Built to withstand the elements, the camera's rugged design ensures reliable performance even in challenging environments.
        8. Extended Battery Life: The powerful battery offers extended shooting sessions, allowing you to focus on capturing the perfect shot without worrying about running out of power.
        9. Wi-Fi and Bluetooth Connectivity: Easily transfer images and videos to your smartphone or tablet for quick sharing with friends and family.
        10. Professional Ergonomics: The XYZ Pro Model Z's ergonomic design provides a comfortable grip and intuitive button layout, ensuring effortless handling during extended photo sessions.`,
        ratings: [
            { name: "Abdur Rehman", review: "This product is awesome", rating: 4.5 },
            { name: "Sarah Johnson", review: "Great quality and value for money!", rating: 5 },
            { name: "Alex Smith", review: "Highly recommended! Fast shipping too.", rating: 4.8 },
            { name: "Emily Lee", review: "I love this product! It exceeded my expectations.", rating: 4.7 },
            { name: "John Doe", review: "Not bad, but could be better.", rating: 3.5 }
        ]
    },
    {
        id: 3,
        image: "https://i.pinimg.com/236x/06/ab/6d/06ab6d05f2c8f3044f49fddd12714fd0.jpg",
        title: "Iphone",
        price: "550",
        description: `Introducing the XYZ Pro Model Z Camera, the ultimate tool for capturing life's most precious moments with unparalleled precision and clarity. Engineered with cutting-edge technology and professional-grade features, this camera is a game-changer for photographers and videographers alike.

        Key Features:

        1. Crystal-Clear Image Quality: Equipped with a high-resolution 24MP full-frame sensor and advanced image processing, the XYZ Pro Model Z delivers stunning, true-to-life images with rich colors and exceptional detail.
        2. 4K Ultra-HD Video: Capture breathtaking videos in 4K resolution at 60 frames per second, allowing you to relive your memories with cinematic quality.
        3. Precision Autofocus: Our fast and accurate autofocus system ensures you never miss a moment. With intelligent subject tracking and eye-detection technology, every shot is sharp and in focus.
        4. Versatile Lens Compatibility: The XYZ Pro Model Z is compatible with a wide range of lenses, offering endless creative possibilities for various shooting scenarios, from landscape photography to portrait sessions.
        5. Intuitive Touchscreen Display: The large 3-inch LCD touchscreen provides a user-friendly interface, making it effortless to navigate settings and review shots.
        6. Dual Memory Card Slots: With two memory card slots, you can expand storage capacity and backup your precious memories for added peace of mind.
        7. Weather-Sealed Construction: Built to withstand the elements, the camera's rugged design ensures reliable performance even in challenging environments.
        8. Extended Battery Life: The powerful battery offers extended shooting sessions, allowing you to focus on capturing the perfect shot without worrying about running out of power.
        9. Wi-Fi and Bluetooth Connectivity: Easily transfer images and videos to your smartphone or tablet for quick sharing with friends and family.
        10. Professional Ergonomics: The XYZ Pro Model Z's ergonomic design provides a comfortable grip and intuitive button layout, ensuring effortless handling during extended photo sessions.`,
        ratings: [
            { name: "Abdur Rehman", review: "This product is awesome", rating: 4.5 },
            { name: "Sarah Johnson", review: "Great quality and value for money!", rating: 5 },
            { name: "Alex Smith", review: "Highly recommended! Fast shipping too.", rating: 4.8 },
            { name: "Emily Lee", review: "I love this product! It exceeded my expectations.", rating: 4.7 },
            { name: "John Doe", review: "Not bad, but could be better.", rating: 3.5 }
        ]
    },
    {
        id: 4,
        image: "https://i.pinimg.com/236x/00/fb/18/00fb184e483355a70be1e6b700ac983e.jpg",
        title: "Speaker",
        price: "250",
        description: `Introducing the XYZ Pro Model Z Camera, the ultimate tool for capturing life's most precious moments with unparalleled precision and clarity. Engineered with cutting-edge technology and professional-grade features, this camera is a game-changer for photographers and videographers alike.

        Key Features:

        1. Crystal-Clear Image Quality: Equipped with a high-resolution 24MP full-frame sensor and advanced image processing, the XYZ Pro Model Z delivers stunning, true-to-life images with rich colors and exceptional detail.
        2. 4K Ultra-HD Video: Capture breathtaking videos in 4K resolution at 60 frames per second, allowing you to relive your memories with cinematic quality.
        3. Precision Autofocus: Our fast and accurate autofocus system ensures you never miss a moment. With intelligent subject tracking and eye-detection technology, every shot is sharp and in focus.
        4. Versatile Lens Compatibility: The XYZ Pro Model Z is compatible with a wide range of lenses, offering endless creative possibilities for various shooting scenarios, from landscape photography to portrait sessions.
        5. Intuitive Touchscreen Display: The large 3-inch LCD touchscreen provides a user-friendly interface, making it effortless to navigate settings and review shots.
        6. Dual Memory Card Slots: With two memory card slots, you can expand storage capacity and backup your precious memories for added peace of mind.
        7. Weather-Sealed Construction: Built to withstand the elements, the camera's rugged design ensures reliable performance even in challenging environments.
        8. Extended Battery Life: The powerful battery offers extended shooting sessions, allowing you to focus on capturing the perfect shot without worrying about running out of power.
        9. Wi-Fi and Bluetooth Connectivity: Easily transfer images and videos to your smartphone or tablet for quick sharing with friends and family.
        10. Professional Ergonomics: The XYZ Pro Model Z's ergonomic design provides a comfortable grip and intuitive button layout, ensuring effortless handling during extended photo sessions.`,
        ratings: [
            { name: "Abdur Rehman", review: "This product is awesome", rating: 4.5 },
            { name: "Sarah Johnson", review: "Great quality and value for money!", rating: 5 },
            { name: "Alex Smith", review: "Highly recommended! Fast shipping too.", rating: 4.8 },
            { name: "Emily Lee", review: "I love this product! It exceeded my expectations.", rating: 4.7 },
            { name: "John Doe", review: "Not bad, but could be better.", rating: 3.5 }
        ]
    },
    {
        id: 5,
        image: "https://i.pinimg.com/236x/88/dc/1c/88dc1c3ab7fc882fd7d6e18fedb1efac.jpg",
        title: "Watch",
        price: "99.9",
        description: `Introducing the XYZ Pro Model Z Camera, the ultimate tool for capturing life's most precious moments with unparalleled precision and clarity. Engineered with cutting-edge technology and professional-grade features, this camera is a game-changer for photographers and videographers alike.

        Key Features:

        1. Crystal-Clear Image Quality: Equipped with a high-resolution 24MP full-frame sensor and advanced image processing, the XYZ Pro Model Z delivers stunning, true-to-life images with rich colors and exceptional detail.
        2. 4K Ultra-HD Video: Capture breathtaking videos in 4K resolution at 60 frames per second, allowing you to relive your memories with cinematic quality.
        3. Precision Autofocus: Our fast and accurate autofocus system ensures you never miss a moment. With intelligent subject tracking and eye-detection technology, every shot is sharp and in focus.
        4. Versatile Lens Compatibility: The XYZ Pro Model Z is compatible with a wide range of lenses, offering endless creative possibilities for various shooting scenarios, from landscape photography to portrait sessions.
        5. Intuitive Touchscreen Display: The large 3-inch LCD touchscreen provides a user-friendly interface, making it effortless to navigate settings and review shots.
        6. Dual Memory Card Slots: With two memory card slots, you can expand storage capacity and backup your precious memories for added peace of mind.
        7. Weather-Sealed Construction: Built to withstand the elements, the camera's rugged design ensures reliable performance even in challenging environments.
        8. Extended Battery Life: The powerful battery offers extended shooting sessions, allowing you to focus on capturing the perfect shot without worrying about running out of power.
        9. Wi-Fi and Bluetooth Connectivity: Easily transfer images and videos to your smartphone or tablet for quick sharing with friends and family.
        10. Professional Ergonomics: The XYZ Pro Model Z's ergonomic design provides a comfortable grip and intuitive button layout, ensuring effortless handling during extended photo sessions.`,
        ratings: [
            { name: "Abdur Rehman", review: "This product is awesome", rating: 4.5 },
            { name: "Sarah Johnson", review: "Great quality and value for money!", rating: 5 },
            { name: "Alex Smith", review: "Highly recommended! Fast shipping too.", rating: 4.8 },
            { name: "Emily Lee", review: "I love this product! It exceeded my expectations.", rating: 4.7 },
            { name: "John Doe", review: "Not bad, but could be better.", rating: 3.5 }
        ]
    }
]

export default products;