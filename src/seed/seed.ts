import bycriptjs from 'bcryptjs';
import { BrandCategory } from '../interfaces/product.interface';

interface SeedProduct {
  description: string;
  characteristics: string;
  images: string[];
  inStock: number;
  price: number;
  slug: string;
  title: string;
  brand: BrandCategory;
}

interface SeedUser {
  email: string;
  password: string;
  name: string;
  role: 'admin' | 'user';
}

interface SeedData {
  users: SeedUser[];
  brands: string[];
  products: SeedProduct[];
}

export const initialData: SeedData = {
  users: [
    {
      email: 'test@mail.com',
      password: bycriptjs.hashSync('123456'),
      name: 'Test Marco',
      role: 'admin',
    },
    {
      email: 'ojavio@gmail.com',
      password: bycriptjs.hashSync('123456'),
      name: 'Ojavio Mesías',
      role: 'user',
    },
  ],

  brands: ['Xiaomi', 'Samsung', 'Apple', 'Honor', 'Motorola', 'Realme'],

  products: [
    {
      description:
        'HONOR Magic5 Lite 5G Smartphone 8GB 256GB, Pantalla Curva AMOLED de 6,67 pulgadas 120Hz, Triple cámara Trasera de 64MP, Batería de 5100 mAh, 40W Supercharge, Android 12, Verde. Disponible para envío inmediato.',
      characteristics:
        'Operador inalambrico: Desbloqueado para todas las compañías;Sistema operativo: Android 12;Capacidad de almacenamiento: 256 GB;Tamaño de la pantalla: 6.67 pulgadas;Resolución de la cámara: 64 MP;Capacidad de la batería: 5100 mAh;Memoria RAM: 8 GB;Modelo: Magic5 Lite;Marca: Honor;Color: Verde.',
      images: [
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718165552/teslacel-shop/suwfxeht1yssth3qnrue.jpg',
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151989/teslacel-shop/x9kpzknqfku70us8fflk.jpg',
      ],
      inStock: 10,
      price: 3837,
      slug: 'honor-magic-5-lite-verde',
      title: 'Honor Magic 5 Lite',
      brand: 'Honor',
    },
    {
      description:
        'El Honor X7b te ofrece una pantalla FHD+ de 6.8”. Impulsado por un potente procesador Snapdragon 680 y con opciones de hasta 8GB de RAM y 256GB de almacenamiento, este dispositivo asegura un rendimiento sin igual y un amplio espacio para tus fotos, videos y aplicaciones favoritas. Disponible para envío inmediato.',
      characteristics:
        'Operador inalambrico: Desbloqueado para todas las compañías;Sistema operativo: Android 13;Capacidad de almacenamiento: 256 GB;Tamaño de la pantalla: 6.8 pulgadas;Resolución de la cámara: 108 MP;Capacidad de la batería: 5330 mAh;Memoria RAM: 16 GB;Modelo: X7b;Marca: Honor;Color: Blanco.',
      images: [
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151989/teslacel-shop/f49hox4pojpyyupx1tiv.jpg',
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151989/teslacel-shop/vjd1s0w8nt3djr0sefia.jpg',
      ],
      inStock: 10,
      price: 2978,
      slug: 'honor-x7b-blanco',
      title: 'Honor X7B',
      brand: 'Honor',
    },
    {
      description:
        'El iPhone 12 es un smartphone de última generación de Apple. Cuenta con un diseño elegante y moderno, con una pantalla OLED de alta calidad y un rendimiento excepcional gracias a su potente chip A14 Bionic. Disponible para envío inmediato.',
      characteristics:
        'Operador inalámbrico: Desbloqueado para todas las compañías;Sistema operativo: iOS 14;Capacidad de almacenamiento: 128 GB ;Tamaño de la pantalla: 6.1 pulgadas;Resolución de la cámara: Sistema de doble cámara de 12 MP;Capacidad de la batería: 2,815 mAh;Memoria RAM: 4 GB;nModelo: iPhone 12;Marca: Apple;Color: Negro',
      images: [
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151990/teslacel-shop/qk3m6jjc1pg09cch97n4.jpg',
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151989/teslacel-shop/orjzhyzfppzesj28klku.jpg',
      ],
      inStock: 10,
      price: 7500,
      slug: 'apple-iphone-12-negro',
      title: 'Iphone 12 Negro',
      brand: 'Apple',
    },
    {
      description:
        'El iPhone 12 es un smartphone de última generación de Apple. Cuenta con un diseño elegante y moderno, con una pantalla OLED de alta calidad y un rendimiento excepcional gracias a su potente chip A14 Bionic. Disponible para envío inmediato.',
      characteristics:
        'Operador inalámbrico: Desbloqueado para todas las compañías;Sistema operativo: iOS 14;Capacidad de almacenamiento: 128 GB ;Tamaño de la pantalla: 6.1 pulgadas;Resolución de la cámara: Sistema de doble cámara de 12 MP;Capacidad de la batería: 2,815 mAh;Memoria RAM: 4 GB;Modelo: iPhone 12;Marca: Apple;Color: Violeta',
      images: [
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151990/teslacel-shop/s5xkusopv30ejww15mpl.jpg',
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151990/teslacel-shop/jzezr9eooqyldsvsdnbo.jpg',
      ],
      inStock: 10,
      price: 7500,
      slug: 'apple-iphone-12-violeta',
      title: 'Iphone 12 Violeta',
      brand: 'Apple',
    },
    {
      description:
        'El iPhone 13 es el último modelo de smartphone de Apple. Cuenta con un diseño elegante, una pantalla OLED de alta calidad y un rendimiento excepcional gracias a su chip A15 Bionic. Disponible para envío inmediato.',
      characteristics:
        'Operador inalámbrico: Desbloqueado para todas las compañías;Sistema operativo: iOS 15;Capacidad de almacenamiento: 128 GB;Tamaño de la pantalla: 6.1 pulgadas.;Resolución de la cámara: Sistema de doble cámara de 12 MP;Capacidad de la batería: 3,240 mAh;Memoria RAM: 4 GB;Modelo: iPhone 13;Marca: Apple;Color:  Azul',
      images: [
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151990/teslacel-shop/mifyayt6zmlsn8yupwp5.jpg',
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151990/teslacel-shop/zml820dhfvqam1vhx6pu.jpg',
      ],
      inStock: 10,
      price: 9000,
      slug: 'apple-iphone-13-azul',
      title: 'Iphone 13 Azul',
      brand: 'Apple',
    },
    {
      description:
        'El iPhone 13 es el último modelo de smartphone de Apple. Cuenta con un diseño elegante, una pantalla OLED de alta calidad y un rendimiento excepcional gracias a su chip A15 Bionic. Disponible para envío inmediato.',
      characteristics:
        'Operador inalámbrico: Desbloqueado para todas las compañías;Sistema operativo: iOS 15;Capacidad de almacenamiento: 128 GB;Tamaño de la pantalla: 6.1 pulgadas;Resolución de la cámara: Sistema de doble cámara de 12 MP;Capacidad de la batería: 3,240 mAh;Memoria RAM: 4 GB;nModelo: iPhone 13;Marca: Apple;Color: Rojo',
      images: [
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151990/teslacel-shop/t6ca4pvatq9uhwn2egwy.jpg',
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151990/teslacel-shop/cf6c5p2qlz33ysxxowxt.jpg',
      ],
      inStock: 10,
      price: 9000,
      slug: 'apple-iphone-13-rojo',
      title: 'Iphone 13 Rojo',
      brand: 'Apple',
    },
    {
      description:
        'El iPhone 15 es el más reciente modelo de smartphone de Apple. Cuenta con un diseño premium, una pantalla OLED de alta calidad y un rendimiento excepcional gracias a su avanzado chip A17 Bionic. Disponible para envío inmediato.',
      characteristics:
        'Operador inalámbrico: Desbloqueado para todas las compañías;Sistema operativo: iOS 17;Capacidad de almacenamiento: 256 GB;Tamaño de la pantalla: 6.5 pulgadas;Resolución de la cámara: Sistema de triple cámara de 48 MP;Capacidad de la batería: 4,500 mAh;Memoria RAM: 6 GB;Modelo: iPhone 15;Marca: Apple;Color: Negro',
      images: [
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151990/teslacel-shop/sn02gzbdvtmrez0lmoml.jpg',
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151991/teslacel-shop/b4dguwqtgfrailbnfyjs.jpg',
      ],
      inStock: 10,
      price: 15000,
      slug: 'apple-iphone-15-negro',
      title: 'Iphone 15 Negro',
      brand: 'Apple',
    },
    {
      description:
        'El iPhone 15 es el más reciente modelo de smartphone de Apple. Cuenta con un diseño premium, una pantalla OLED de alta calidad y un rendimiento excepcional gracias a su avanzado chip A17 Bionic. Disponible para envío inmediato.',
      characteristics:
        'Operador inalámbrico: Desbloqueado para todas las compañías;Sistema operativo: iOS 17;Capacidad de almacenamiento: 256 GB;Tamaño de la pantalla: 6.5 pulgadas;Resolución de la cámara: Sistema de triple cámara de 48 MP;Capacidad de la batería: 4,500 mAh.;Memoria RAM: 6 GB;Modelo: iPhone 15;Marca: Apple;Color: Rosa',
      images: [
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151991/teslacel-shop/khkk3abvrpwrdhd2gxcu.jpg',
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151991/teslacel-shop/oru1wwdhmqwschi2e0l3.jpg',
      ],
      inStock: 10,
      price: 15000,
      slug: 'apple-iphone-15-rosa',
      title: 'Iphone 15 Rosa',
      brand: 'Apple',
    },
    {
      description:
        'El iPhone 15 es el más reciente modelo de smartphone de Apple. Cuenta con un diseño premium, una pantalla OLED de alta calidad y un rendimiento excepcional gracias a su avanzado chip A17 Bionic. Disponible para envío inmediato.',
      characteristics:
        'Operador inalámbrico: Desbloqueado para todas las compañías;Sistema operativo: iOS 17.;Capacidad de almacenamiento: 256 GB.;Tamaño de la pantalla: 6.5 pulgadas.;Resolución de la cámara: Sistema de triple cámara de 48 MP.;Capacidad de la batería: 4,500 mAh.;Memoria RAM: 6 GB.;Modelo: iPhone 15.;Marca: Apple.;Color: Amarillo',
      images: [
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151991/teslacel-shop/cvseblsgjziwn5mqgcw4.jpg',
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151991/teslacel-shop/andukquabtpoeb3tafjp.jpg',
      ],
      inStock: 10,
      price: 15000,
      slug: 'apple-iphone-15-amarillo',
      title: 'Iphone 15 Amarillo',
      brand: 'Apple',
    },
    {
      description:
        'El Motorola Moto G13 es un smartphone de gama media que ofrece un buen equilibrio entre rendimiento y precio. Cuenta con un diseño moderno y un buen conjunto de funciones para satisfacer las necesidades básicas de los usuarios. Disponible para envío inmediato.',
      characteristics:
        'Operador inalámbrico: Desbloqueado para todas las compañías.;Sistema operativo: Android 12.;Capacidad de almacenamiento: 64 GB.;Tamaño de la pantalla: 6.5 pulgadas.;Resolución de la cámara: Sistema de triple cámara de 50 MP.;Capacidad de la batería: 4,500 mAh.;Memoria RAM: 4 GB.;Modelo: Moto g13.;Marca: Motorola.;Color: Gris',
      images: [
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151991/teslacel-shop/yuwmmpkspm39mx8wcnzu.jpg',
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151991/teslacel-shop/mb1gfkcpwxw7wbuqobly.jpg',
      ],
      inStock: 10,
      price: 1900,
      slug: 'motorola-moto-g13-gris',
      title: 'Motorola Moto G13 Gris',
      brand: 'Motorola',
    },
    {
      description:
        'El Motorola Moto G13 es un smartphone de gama media que ofrece un buen equilibrio entre rendimiento y precio. Cuenta con un diseño moderno y un buen conjunto de funciones para satisfacer las necesidades básicas de los usuarios. Disponible para envío inmediato.',
      characteristics:
        'Operador inalámbrico: Desbloqueado para todas las compañías.;Sistema operativo: Android 12.;Capacidad de almacenamiento: 64 GB.;Tamaño de la pantalla: 6.5 pulgadas.;Resolución de la cámara: Sistema de triple cámara de 50 MP.;Capacidad de la batería: 4,500 mAh.;Memoria RAM: 4 GB.;Modelo: Moto g13.;Marca: Motorola.;Color: Rosa',
      images: [
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151991/teslacel-shop/fsm7z9zdwyyqimcrmi3g.jpg',
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151991/teslacel-shop/xyxehmzath0v5ht4fvlj.jpg',
      ],
      inStock: 10,
      price: 1900,
      slug: 'motorola-moto-g13-rosa',
      title: 'Motorola Moto g13 Rosa',
      brand: 'Motorola',
    },
    {
      description:
        'El Motorola Moto G62 es un smartphone de gama media-alta que ofrece un rendimiento sólido y características avanzadas a un precio competitivo. Cuenta con una pantalla de alta calidad y una cámara capaz de tomar fotos y videos de buena calidad.',
      characteristics:
        'Operador inalámbrico: Desbloqueado para todas las compañías.;Sistema operativo: Android 12.;Capacidad de almacenamiento: 128 GB.;Tamaño de la pantalla: 6.5 pulgadas.;Resolución de la cámara: Sistema de triple cámara de 50 MP.;Capacidad de la batería: 5,000 mAh.;Memoria RAM: 6 GB.;Modelo: Moto g62.;Marca: Motorola.;Color: Verde',
      images: [
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151991/teslacel-shop/uhfqpsilfucvnxckxju2.jpg',
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151991/teslacel-shop/nrj1l4xz7n3p14xfz7nl.jpg',
      ],
      inStock: 10,
      price: 3800,
      slug: 'motorola-moto-g62-verde',
      title: 'Motorola Moto g62 Verde',
      brand: 'Motorola',
    },
    {
      description:
        'El Motorola Moto G84 es un smartphone de gama alta que ofrece un rendimiento excepcional y características premium. Cuenta con una pantalla de alta resolución, una cámara avanzada y un diseño elegante y duradero. Disponible para envío inmediato.',
      characteristics:
        'Operador inalámbrico: Desbloqueado para todas las compañías.;Sistema operativo: Android 13.;Capacidad de almacenamiento: 256 GB.;Tamaño de la pantalla: 6.8 pulgadas.;Resolución de la cámara: Cámara cuádruple de 108 MP.;Capacidad de la batería: 5,100 mAh.;Memoria RAM: 8 GB.;Modelo: Moto g84.;Marca: Motorola.;Color: Magenta',
      images: [
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151992/teslacel-shop/gsqi4judxcaethg3fb9s.jpg',
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151992/teslacel-shop/dxawhrmcizhv8en1qfby.jpg',
      ],
      inStock: 10,
      price: 3800,
      slug: 'motorola-moto-g84-magenta',
      title: 'Motorola Moto g84 Magenta',
      brand: 'Motorola',
    },
    {
      description:
        'El Xiaomi Poco C65 es un smartphone Android con una pantalla HD+ de 6.74 pulgadas con tasa de refresco de 90Hz y potenciado por un procesador MediaTek Helio G85 acompañado de 6GB o 8GB de RAM y hasta 256GB de almacenamiento interno. Disponible para envío inmediato.',
      characteristics:
        'Operador inalámbrico: Desbloqueado para todas las compañías.;Sistema operativo: Android 13.;Capacidad de almacenamiento: 256 GB.;Tamaño de la pantalla: Pantalla inmersiva de 6.74 pulgadas.;Resolución de la cámara: Cámara triple de 50 MP con IA.;Capacidad de la batería: 5,000 mAh.;Memoria RAM: 8 GB.;Modelo: Poco C65.;Marca: Xiaomi.;Color: Negro',
      images: [
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151992/teslacel-shop/cf2arb3m3jendubpqrbj.jpg',
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151992/teslacel-shop/ftn0folkxqxnbecfeqvg.jpg',
      ],
      inStock: 10,
      price: 2199,
      slug: 'poco-c65-negro',
      title: 'Poco C65 Negro',
      brand: 'Xiaomi',
    },
    {
      description:
        'El Xiaomi Poco M6 Pro es la variante 4G del smartphone Android, con una pantalla AMOLED de 6.67 pulgadas a resolución Full HD+ y tasa de refresco de 120Hz. El procesador es un Helio G99-Ultra de MediaTek, acompañado de hasta 12GB de RAM y 512GB de almacenamiento. La cámara posterior triple está liderada por un sensor de 64MP con OIS, la cámara selfie es de 16MP y el Poco M6 Pro completa sus características con una batería de 5000 mAh de carga rápida, lector de huellas bajo pantalla, parlantes stereo, resistencia a salipicaduras y MIUI 14 basado en Android 13. Disponible para envío inmediato.',
      characteristics:
        'Operador inalámbrico: Desbloqueado para todas las compañías.;Sistema operativo: Android 13.;Capacidad de almacenamiento: 256 GB.;Tamaño de la pantalla: Pantalla inmersiva de 6.74 pulgadas.;Resolución de la cámara: Cámara triple de 64 MP.;Capacidad de la batería: 5,000 mAh.;Memoria RAM: 8 GB.;Modelo: Poco M6 Pro.;Marca: Xiaomi.;Color: Negro',
      images: [
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718166168/teslacel-shop/dwe2fvaehz4ysvow1sz0.jpg',
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151993/teslacel-shop/snq8ymbrytogto9x10uq.jpg',
      ],
      inStock: 10,
      price: 3399,
      slug: 'poco-m6-pro-negro',
      title: 'Poco M6 Pro Negro',
      brand: 'Xiaomi',
    },
    {
      description:
        'El POCO M5s es un móvil con MediaTek Helio G95, pantalla AMOLED de 6,43 pulgadas, cámara de cuatro lentes con sensor principal de 64 megapíxeles y una gran batería de 5.000 mAh que se combina con carga rápida. Disponible para envío inmediato.',
      characteristics:
        'Operador inalámbrico: Desbloqueado para todas las compañías.;Sistema operativo: Android 12.;Capacidad de almacenamiento: 128 GB.;Tamaño de la pantalla: Pantalla inmersiva de 6.43 pulgadas.;Resolución de la cámara: Cámara triple de 64 MP.;Capacidad de la batería: 5,000 mAh.;Memoria RAM: 6 GB.;Modelo: Poco M5s.;Marca: Xiaomi.;Color: Negro',
      images: [
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151993/teslacel-shop/yr9gijsozv2xa6j8vmdl.jpg',
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151993/teslacel-shop/mn7dmu4h2tvltfx1w1pk.jpg',
      ],
      inStock: 10,
      price: 2199,
      slug: 'poco-m5-s-negro',
      title: 'Poco M5s Negro',
      brand: 'Xiaomi',
    },
    {
      description:
        'El POCO M5s es un móvil con MediaTek Helio G95, pantalla AMOLED de 6,43 pulgadas, cámara de cuatro lentes con sensor principal de 64 megapíxeles y una gran batería de 5.000 mAh que se combina con carga rápida. Disponible para envío inmediato.',
      characteristics:
        'Operador inalámbrico: Desbloqueado para todas las compañías.;Sistema operativo: Android 12.;Capacidad de almacenamiento: 128 GB.;Tamaño de la pantalla: Pantalla inmersiva de 6.43 pulgadas.;Resolución de la cámara: Cámara triple de 64 MP.;Capacidad de la batería: 5,000 mAh.;Memoria RAM: 6 GB.;Modelo: Poco M5s.;Marca: Xiaomi.;Color: Azul',
      images: [
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151993/teslacel-shop/zrmmd6k9s4ix5qzgihwm.jpg',
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151993/teslacel-shop/eglxak3gfiduvxfncmkt.jpg',
      ],
      inStock: 10,
      price: 2199,
      slug: 'poco-m5-s-azul',
      title: 'Poco M5s Azul',
      brand: 'Xiaomi',
    },
    {
      description:
        'El Realme 9 Pro se sitúa en el punto medio, con Snapdragon 695 y el anticipado diseño que cambia de color después de darse un baño al sol, con una gran batería, cámara triple especializada en fotografía nocturna y sin olvidarse del minijack. Disponible para envío inmediato.',
      characteristics:
        'Operador inalámbrico: Desbloqueado para todas las compañías.;Sistema operativo: Android 12.;Capacidad de almacenamiento: 128 GB.;Tamaño de la pantalla: 6.6 pulgadas.;Resolución de la cámara: Cámara triple de 64 MP.;Capacidad de la batería: 5,000 mAh.;Memoria RAM: 6 GB.;Modelo: Realme 9 Pro.;Marca: Realme.;Color: Azul',
      images: [
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151993/teslacel-shop/o4nbpbmeuqot8srfjmbs.jpg',
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151994/teslacel-shop/cuxudio1bwgigs2ieu5y.jpg',
      ],
      inStock: 10,
      price: 4500,
      slug: 'realme-9-pro-azul',
      title: 'Realme 9 Pro Azul',
      brand: 'Realme',
    },
    {
      description:
        'El Realme 10 busca ofrecer un equilibrio de calidad sin que el coste de venta resulte exagerado. En comparación, el hardware da un pasito atrás con respecto al Realme 9 del año pasado. Aunque también es más barato: en un 2023 donde todo sube de precio, que una generación sea más barata que la precedente es ya un valor. Disponible para envío inmediato.',
      characteristics:
        'Operador inalámbrico: Desbloqueado para todas las compañías.;Sistema operativo: Android 12.;Capacidad de almacenamiento: 128 GB.;Tamaño de la pantalla: 6.6 pulgadas.;Resolución de la cámara: Cámara triple de 50 MP.;Capacidad de la batería: 5,000 mAh.;Memoria RAM: 8 GB.;Modelo: Realme 10.;Marca: Realme.;Color: Blanco',
      images: [
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151994/teslacel-shop/d1djj4kbzcuf4dyn69gk.jpg',
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151994/teslacel-shop/trzm0y01wid1ehuofzwl.jpg',
      ],
      inStock: 10,
      price: 4500,
      slug: 'realme-10-blanco',
      title: 'Realme 10 Blanco',
      brand: 'Realme',
    },
    {
      description:
        'El Realme C53 se inspira en el iPhone 14 Pro para su diseño y destaca por ser especialmente delgado, con un cuerpo de 7,49 milímetros. Con mucha batería, carga rápida y pantalla a 90 Hz, no falta tampoco la isla dinámica de Realme, llamada aquí "mini cápsula". Disponible para envío inmediato.',
      characteristics:
        'Operador inalámbrico: Desbloqueado para todas las compañías.;Sistema operativo: Android 13.;Capacidad de almacenamiento: 128 GB.;Tamaño de la pantalla: 6.74 pulgadas.;Resolución de la cámara: Cámara triple de 50 MP.;Capacidad de la batería: 5,000 mAh.;Memoria RAM: 8 GB.;Modelo: Realme C53.;Marca: Realme.;Color: Amarillo',
      images: [
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718165972/teslacel-shop/hrquer6c69oleqpe6fg6.jpg',
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151994/teslacel-shop/s6wochjql15bylmewbeo.jpg',
      ],
      inStock: 10,
      price: 3899,
      slug: 'realme-c53-amarillo',
      title: 'Realme C53 Amarillo',
      brand: 'Realme',
    },
    {
      description:
        'El más potente de los tres móviles presentados por Samsung es el nuevo Samsung Galaxy A25 5G, con un Exynos 1280 a borde y versiones con 6 u 8 GB de RAM y 128 GB de almacenamiento para elegir.;El terminal es visualmente muy parecido a los Galaxy A15, hasta tal punto que conserva muchas de las características como la pantalla AMOLED de 6,5 pulgadas Full HD+, aunque aquí con 120 Hz de refresco y 1000 nits. La cámara frontal, en el notch en forma de gota, es también de 13 megapíxeles.Disponible para envío inmediato.',
      characteristics:
        'Operador inalámbrico: Desbloqueado para todas las compañías.;Sistema operativo: Android 14.;Capacidad de almacenamiento: 128 GB.;Tamaño de la pantalla: 6.5 pulgadas.;Resolución de la cámara: Cámara triple de 50 MP.;Capacidad de la batería: 5,000 mAh.;Memoria RAM: 8 GB.;Modelo: Galaxy A25.;Marca: Samsung.;Color: Negro',
      images: [
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151994/teslacel-shop/ijvsjdfpa1vcmmlvxbd9.jpg',
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151994/teslacel-shop/fjjkb61eagnqbyon7d5h.jpg',
      ],
      inStock: 10,
      price: 4199,
      slug: 'samsung-galaxy-a25-negro',
      title: 'Samsung Galaxy A25 Negro',
      brand: 'Samsung',
    },
    {
      description:
        'El Samsung Galaxy A35 5G apuesta a ser uno de los móviles de gama media más vendidos del año al ser un móvil equilibrado un escalón por debajo de precio de su hermano el Galaxy A55.Disponible para envío inmediato.',
      characteristics:
        'Operador inalámbrico: Desbloqueado para todas las compañías.;Sistema operativo: Android 14.;Capacidad de almacenamiento: 128 GB.;Tamaño de la pantalla: 6.6 pulgadas.;Resolución de la cámara: Cámara triple de 50 MP.;Capacidad de la batería: 5,000 mAh.;Memoria RAM: 6 GB.;Modelo: Galaxy A35.;Marca: Samsung.;Color: Violeta',
      images: [
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151994/teslacel-shop/nvk9mmxakpvxxokexw8c.jpg',
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151995/teslacel-shop/klymumzu18ziemybnv09.jpg',
      ],
      inStock: 10,
      price: 5199,
      slug: 'samsung-galaxy-a35-violeta',
      title: 'Samsung Galaxy A35 Violeta',
      brand: 'Samsung',
    },
    {
      description:
        'Un teléfono móvil con una pantalla de 6,4 pulgadas y que llegó al mercado algo después de sus hermanos como una opción un poco más asequible. Destaca por una gran pantalla de calidad con desplazamiento más suave con la tecnología Super Smooth 120 Hz que optimiza la tasa de refresco. Además, la pantalla está protegida por el cristal más resistente en un teléfono de la brand: Gorilla Glass Victus. Disponible para envío inmediato.',
      characteristics:
        'Operador inalámbrico: Desbloqueado para todas las compañías.;Sistema operativo: Android 12.;Capacidad de almacenamiento: 256 GB.;Tamaño de la pantalla: 6.4 pulgadas.;Resolución de la cámara: Cámara triple de 12 MP.;Capacidad de la batería: 4,500 mAh.;Memoria RAM: 8 GB.;Modelo: Galaxy S21 FE.;Marca: Samsung.;Color: Negro',
      images: [
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718165817/teslacel-shop/keozyl22gmp7yw8caper.jpg',
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151995/teslacel-shop/fqoi6ruzayea4qnbv3fd.jpg',
      ],
      inStock: 10,
      price: 8299,
      slug: 'samsung-galaxy-s21-fe-negro',
      title: 'Samsung Galaxy S21 FE Negro',
      brand: 'Samsung',
    },
    {
      description:
        'El Samsung Galaxy S22 Ultra brand un antes y un después en la estrategia del fabricante. Pero no es lo único destacado en la nueva generación: el Samsung Galaxy S22+ tiene mucho que decir. Lo hemos comprobado, es uno de los mejores móviles del momento. Disponible para envío inmediato.',
      characteristics:
        'Operador inalámbrico: Desbloqueado para todas las compañías.;Sistema operativo: Android 12.;Capacidad de almacenamiento: 256 GB.;Tamaño de la pantalla: 6.6 pulgadas.;Resolución de la cámara: Cámara triple de 50 MP.;Capacidad de la batería: 4,500 mAh.;Memoria RAM: 8 GB.;Modelo: Galaxy S22 Plus.;Marca: Samsung.;Color: Negro',
      images: [
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151995/teslacel-shop/xdzkbw9zia52gtnmnffc.jpg',
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151995/teslacel-shop/e4uxny5u4aevhlqzb7sy.jpg',
      ],
      inStock: 10,
      price: 10199,
      slug: 'samsung-galaxy-s22-plus-negro',
      title: 'Samsung Galaxy S22 Plus Negro',
      brand: 'Samsung',
    },
    {
      description:
        'El Samsung Galaxy S22 Ultra brand un antes y un después en la estrategia del fabricante. Pero no es lo único destacado en la nueva generación: el Samsung Galaxy S22+ tiene mucho que decir. Lo hemos comprobado, es uno de los mejores móviles del momento. Disponible para envío inmediato.',
      characteristics:
        'Operador inalámbrico: Desbloqueado para todas las compañías.;Sistema operativo: Android 12.;Capacidad de almacenamiento: 256 GB.;Tamaño de la pantalla: 6.6 pulgadas.;Resolución de la cámara: Cámara triple de 50 MP.;Capacidad de la batería: 4,500 mAh.;Memoria RAM: 8 GB.;Modelo: Galaxy S22 Plus.;Marca: Samsung.;Color: Rosa',
      images: [
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151995/teslacel-shop/ye9ftltbnbksa3udfq1c.jpg',
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151995/teslacel-shop/d1lzxalvmhputsssc04k.jpg',
      ],
      inStock: 10,
      price: 10199,
      slug: 'samsung-galaxy-s22-plus-rosa',
      title: 'Samsung Galaxy S22 Plus Rosa',
      brand: 'Samsung',
    },
    {
      description:
        'El Samsung Galaxy Z Flip 3 5G es la renovación del smartphone con factor de forma plegable. Con una pantalla interna AMOLED de 6.7 pulgadas a resolución FHD+ y tasa de refresco de 120Hz y una pantalla externa Super AMOLED de 1.9 pulgadas, el Galaxy Z Flip3 está potenciado por un procesador Snapdragon 888 con 8GB de memoria RAM y 128GB o 256GB de almacenamiento interno. En cuanto a cámaras, el Galaxy Z Flip 3 5G cuenta con un dúo de sensores de 12MP en su posterior con OIS, mientras que su cámara frontal es de 10MP. El Galaxy Z Flip3 es alimentado por una batería de 3300 mAh con soporte de carga rápida e inalámbrica y completa sus características con unos parlantes stereo, resistencia al agua, lector de huellas lateral, y corre Android 11. Disponible para envío inmediato.',
      characteristics:
        'Operador inalámbrico: Desbloqueado para todas las compañías.;Sistema operativo: Android 11.;Capacidad de almacenamiento: 256 GB.;Tamaño de la pantalla: 6.7 pulgadas.;Resolución de la cámara: Cámara doble de 12 MP.;Capacidad de la batería: 3,300 mAh.;Memoria RAM: 8 GB.;Modelo: Galaxy Z Flip3.;Marca: Samsung.;Color: Amarillo',
      images: [
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718165446/teslacel-shop/b3kfxgifapgfriuqsf82.jpg',
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151995/teslacel-shop/uidxihejlxvjd6unoyie.jpg',
      ],
      inStock: 10,
      price: 11199,
      slug: 'samsung-galaxy-z-flip3-amarillo',
      title: 'Samsung Galaxy Z Flip3 Amarillo',
      brand: 'Samsung',
    },
    {
      description:
        'El Xiaomi Redmi 12 es un smartphone Android con una pantalla de 6.79 pulgadas a resolución FHD+ y tasa de refresco de 90Hz. Potenciado por un procesador MediaTek Helio G88, el Redmi 12 cuenta con 4GB o 8GB de RAM y 128GB o 256GB de almacenamiento interno expandible vía microSD. Una cámara triple se ubica en su posterior, con un sensor principal de 50MP mientras que la cámara selfie de 8MP. El Redmi 12 completa sus características con una batería de 5000 mAh de carga rápida, lector de huellas lateral, resistencia limitada al agua y corre Android 13. Disponible para envío inmediato.',
      characteristics:
        'Operador inalámbrico: Desbloqueado para todas las compañías.;Sistema operativo: Android 13.;Capacidad de almacenamiento: 256 GB.;Tamaño de la pantalla: 6.67 pulgadas.;Resolución de la cámara: Cámara triple de 50 MP.;Capacidad de la batería: 5,000 mAh.;Memoria RAM: 8 GB.;Modelo: Redmi 12.;Marca: Xiaomi.;Color: Azul',
      images: [
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151996/teslacel-shop/jc9bujsmzuu4a6q4ahns.jpg',
        'https://res.cloudinary.com/dk4t1aqlo/image/upload/v1718151995/teslacel-shop/zri7peg1zy7miipcwtsg.jpg',
      ],
      inStock: 10,
      price: 2399,
      slug: 'xiaomi-redmi-12-azul',
      title: 'Xiaomi Redmi 12',
      brand: 'Xiaomi',
    },
  ],
};
