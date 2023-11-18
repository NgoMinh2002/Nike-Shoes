// sản phẩm
const app = Vue.createApp({
  data() {
    return {
      myproduct: [
        {
          id: 1,
          imageUrl: "assets/image/product/giay-nike.jpg",
          title: "HOT DEAL   Giày Asics Court MZ Cream Black Gum [1203A127-750",
          discount: "",
          price: "453900",
        },
        {
          id: 2,
          imageUrl:
            "assets/image/product/giay-asics-court-mz-cream-black-gum-1203a127-750.jpg",
          title: "Giày Sandal Đế Bệt SDK 0279 - Màu Hoa Văn",
          price: "380000",
        },
        {
          id: 3,
          imageUrl:
            "assets/image/product/giay-nike-air-force-1-shadow-all-white-ci0919-100-o.jpg",
          title: " Giày Nike Air Force 1 Shadow All White [CI0919 100] [ O ]",
          price: "4500000",
        },
        {
          id: 4,
          imageUrl:
            "assets/image/product/golf-boa-solarmotion-cloud-white-hp3231-0.jpg",
          title: "Giày Sandal Đế Bệt SDK 0279 - Màu Hoa Văn",
          price: "380000 đ",
        },
        {
          id: 5,
          imageUrl:
            "assets/image/product/golf-boa-solarmotion-cloud-white-hp3231-0.jpg",
          title: "Giày Sandal Đế Bệt SDK 0279 - Màu Hoa Văn",
          price: "380000 đ",
        },
        {
          id: 6,
          imageUrl:
            "assets/image/product/golf-boa-solarmotion-cloud-white-hp3231-0.jpg",
          title: "Giày Sandal Đế Bệt SDK 0279 - Màu Hoa Văn",
          price: "380000 đ",
        },
        {
          id: 7,
          imageUrl:
            "assets/image/product/golf-boa-solarmotion-cloud-white-hp3231-0.jpg",
          title: "Giày Sandal Đế Bệt SDK 0279 - Màu Hoa Văn",
          price: "380000 đ",
        },
        {
          id: 8,
          imageUrl:
            "assets/image/product/golf-boa-solarmotion-cloud-white-hp3231-0.jpg",
          title: "Giày Sandal Đế Bệt SDK 0279 - Màu Hoa Văn",
          price: "380000 đ",
        },
      ],
      spromotion: [
        {
          id: 1,
          imageUrls: "assets/image/20190213_0u2dwRLHZ6ftJ6cK860RUjia.webp",
          title: "Sale sập sàn giảm giá đến 30%",
          item: "Zare khuyến mãi bùng nổ tất cả các sản phẩm tại cửa hàng sale up từ 30%, tất cả các sản phẩm còn lại trong bộ sư tập mùa đông",
        },
        {
          id: 3,
          imageUrls: "assets/image/20190213_a9fd9JEfPFkVDhbkFGC9TspS.webp",
          title: "Sale sập sàn giảm giá đến 30%",
          item: "Zare khuyến mãi bùng nổ tất cả các sản phẩm tại cửa hàng sale up từ 30%, tất cả các sản phẩm còn lại trong bộ sư tập mùa đông",
        },
        {
          id: 2,
          imageUrls: "assets/image/20190213_dndqPDU04B8X9KvrRcPAyHzP.webp",
          title: "Sale sập sàn giảm giá đến 30%",
          item: "Zare khuyến mãi bùng nổ tất cả các sản phẩm tại cửa hàng sale up từ 30%, tất cả các sản phẩm còn lại trong bộ sư tập mùa đông",
        },
        // {
        //   id: 4,
        //   imageUrls: "assets/image/product/giay-nike.jpg",
        //   title: "Sale sập sàn giảm giá đến 30%",
        //   item: "Zare khuyến mãi bùng nổ tất cả các sản phẩm tại cửa hàng sale up từ 30%, tất cả các sản phẩm còn lại trong bộ sư tập mùa đông",
        // },
        // {
        //   id: 5,
        //   imageUrls: "assets/image/product/giay-nike.jpg",
        //   title: "Sale sập sàn giảm giá đến 30%",
        //   item: "Zare khuyến mãi bùng nổ tất cả các sản phẩm tại cửa hàng sale up từ 30%, tất cả các sản phẩm còn lại trong bộ sư tập mùa đông",
        // },
      ],
    };
  },
});
app.mount("#app");
// slick
