// array of products;
let products = [
  { 
      productId: '0001',
      productName: 'Acer Aspire 7',
      imgURL: './src/imgs/Acer-Aspire-7.webp',
      productInfo: {
         OS:         `Windows 11 Home 64-bit`,
         Processor:  `Intel® Core™ i7-12650H Deca-core 3.50 GHz`,
         Graphics:   `Intel® UHD Graphics shared memory`,
         Display:    `15.6" Full HD (1920 x 1080) 16:9`,
         Storage:    `512 GB SSD`,
         Memory:     `8 GB, DDR4 SDRAM`
      },
      productPrice: '849.99'
  }, 
  { 
      productId: '0002',
      productName: 'Acer Nitro 5',
      imgURL: './src/imgs/Acer-Nitro-5.webp',
      productInfo: 
      {
         OS:         `Windows 10 Home 64-bit`,
         Processor:  `Intel® Core™ i5-10300H Quad-core 2.50 GHz`,
         Graphics:   `NVIDIA® GeForce RTX™ 3050 with 4 GB`,
         Display:    `15.6" Full HD (1920 x 1080) 16:9`,
         Storage:    `512 GB SSD`,
         Memory:     `16 GB, DDR4 SDRAM`
      },
      productPrice: '949.99'
  }, 
  {
      productId: '0003',
      productName: 'Acer Spin 5',
      imgURL: './src/imgs/Acer-Spin-5.webp',
      productInfo: 
      {
         OS:         `Windows 11 Home 64-bit`,
         Processor:  `Intel® Core™ i7-1165G7 Quad-core 2.80 GHz`,
         Graphics:   `Intel® Iris® Xe Graphics shared memory`,
         Display:    `13.5" (2256 x 1504) 3:2 Touchscreen`,
         Storage:    `512 GB SSD`,
         Memory:     `8 GB, LPDDR4X`
      },
      productPrice: '1099.99'
  }, 
  {
      productId: '0004',
      productName: 'Acer Swift 5',
      imgURL: './src/imgs/Acer-Swift-5.webp',
      productInfo: 
      {
         OS:         `Windows 11 Home 64-bit`,
         Processor:  `Intel® Core™ i7-1260P Dodeca-core 2.10 GHz`,
         Graphics:   `Intel® Iris® Xe Graphics shared memory`,
         Display:    `14" WQXGA (2560 x 1600) 16:10 Touchscreen`,
         Storage:    `1 TB SSD`,
         Memory:     `16 GB, LPDDR5`
      },
      productPrice: '1499.99'
  }, 
  {
      productId: '0005',
      productName: 'Asus ExpertBook B3',
      imgURL: './src/imgs/Asus-ExpertBook-B3.jpg',
      productInfo: 
      {
         OS:         `Windows 10 Pro`,
         Processor:  `Intel® Core™ i7-1165G7 2.8 GHz`,
         Graphics:   `Intel® Iris® Xe Graphics`,
         Display:    `14.0", FHD (1920 x 1080) 16:9`,
         Storage:    `512GB SSD`,
         Memory:     `8 GB, DDR4 SDRAM`
      },
      productPrice: '1219.99'
  }, 
  {
      productId: '0006',
      productName: 'Asus ProArt StudioBook 16 OLED',
      imgURL: './src/imgs/Asus-ProArt-StudioBook16-OLED.jpg',
      productInfo: 
      {
         OS:         `Windows 11 Pro`,
         Processor:  `Intel® Core™ i9-12900H`,
         Graphics:   `NVIDIA® GeForce RTX™ 3080 Ti GPU`,
         Display:    `16", OLED HDR 16:10`,
         Storage:    `1TB PCIe® Gen 3.0X4 SSD`,
         Memory:     `64GB DDR5 RAM, 4800 MHz`
      },
      productPrice: '2099.99'
  }, 
  {
      productId: '0007',
      productName: 'Asus Zenbook Pro 15 OLED',
      imgURL: './src/imgs/Asus-Zenbook-Pro15-OLED.jpg',
      productInfo: 
      {
      OS:         `Windows 10 Home`,
      Processor:  `AMD Ryzen™ 9 5900HX CPU`,
      Graphics:   `NVIDIA® GeForce® RTX™ 3050 Ti GPU`,
      Display:    `15.6", NanoEdge OLED touchscreen, 16:10`,
      Storage:    `1TB PCIe® Gen 3.0X4 SSD`,
      Memory:     `32 GB DDR4 3200 MHz`
      },
      productPrice: '1199.99'
 },
 {
      productId: '0008',
      productName: 'Asus Vivobook S14X OLED',
      imgURL: './src/imgs/Asus-Vivobook-S14X-OLED.jpg',
      productInfo: 
      {
      OS:         `Windows 11 Pro`,
      Processor:  `12th Gen Intel® Core™ i7 H series`,
      Graphics:   `NVIDIA® GeForce RTX™ 3050 Ti`,
      Display:    `14.5", 2.8K OLED NanoEdge`,
      Storage:    `1 TB PCIe® 4.0 SSD`,
      Memory:     `16 GB DDR4 3200 MHz`
      },
      productPrice: '899.99'
 }, 
  {
      productId: '0009',
      productName: 'Asus ROG Flow Z13',
      imgURL: './src/imgs/Asus-ROGflow-Z13.jpg',
      productInfo: 
      {
         OS:         `Windows 11 Home`,
         Processor:  `12th Gen Intel® Core™ i5-12500H`,
         Graphics:   `NVIDIA® GeForce RTX™ 3050 Ti`,
         Display:    `13.4", FHD+ 16:10 (1920 x 1200, WUXGA)`,
         Storage:    `512GB PCIe® 4.0 SSD`,
         Memory:     `16 GB DDR4 5200 MHz`
      },
      productPrice: '999.99'
  },  
  {
      productId: '0010',
      productName: 'Dell Alienware Gaming',
      imgURL: './src/imgs/Dell-Alienware-Gaming.jpg',
      productInfo: 
      {
         OS:         `Windows 11 Home`,
         Processor:  `AMD® Ryzen™ 7 6800H`,
         Graphics:   `NVIDIA® GeForce RTX™ 3050 Ti`,
         Display:    `17.3", Full HD (1920X1080)`,
         Storage:    `512 GB SSD`,
         Memory:     `8 GB, DDR5`
      },
      productPrice: '1399.99'
  }, 
  {
      productId: '0011',
      productName: 'Dell Inspiron 16',
      imgURL: './src/imgs/Dell-Inspiron-16.jpg',
      productInfo: 
      {
         OS:         `Windows 11 Home`,
         Processor:  `12ᵗʰ Gen Intel® Core™ i7-1255U`,
         Graphics:   `Intel® Iris® Xe Graphics`,
         Display:    `16.0", Full HD (1920X1200)`,
         Storage:    `512 GB SSD`,
         Memory:     `16 GB, DDR4`
      },
      productPrice: '949.99'
  }, 
  {
      productId: '0012',
      productName: 'Dell Latitude 3520',
      imgURL: './src/imgs/Dell-Latitude-3520.jpg',
      productInfo: 
      {
      OS:         `Windows 10 Pro`,
      Processor:  `11ᵗʰ Gen Intel® Core™ i5-1135G7`,
      Graphics:   `Integrated Intel Iris Xe Graphics`,
      Display:    `15.6", Full HD (1920X1080)`,
      Storage:    `256 GB SSD`,
      Memory:     `16 GB, DDR4`
      },
      productPrice: '789.00'
 }, 
 {
      productId: '0013',
      productName: 'Dell Vostro 5620',
      imgURL: './src/imgs/Dell-Vostro-5620.jpg',
      productInfo: 
      {
      OS:         `Windows 11 Pro`,
      Processor:  `12ᵗʰ Gen Intel® Core™ i7-1260P`,
      Graphics:   `Intel® Iris® Xe Graphics`,
      Display:    `16.0", Full HD (1920X1200)`,
      Storage:    `512 GB SSD`,
      Memory:     `16 GB, DDR4`
      },
      productPrice: '929.00'
 },
  {
      productId: '0014',
      productName: 'Dell XPS 15',
      imgURL: './src/imgs/Dell-xps-15.jpg',
      productInfo: 
      {
      OS:         `Windows 11 Pro`,
      Processor:  `12ᵗʰ Gen Intel® Core™ i7-12700H`,
      Graphics:   `NVIDIA® GeForce RTX™ 3050`,
      Display:    `15.6", Full HD (1920X1200)`,
      Storage:    `512 GB SSD`,
      Memory:     `16 GB, DDR5`
      },
      productPrice: '1599.00'
 }
];