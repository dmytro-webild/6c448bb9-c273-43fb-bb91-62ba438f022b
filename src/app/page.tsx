"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Lightbulb, Star, Utensils } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeMediumTitles"
        background="floatingGradient"
        cardStyle="soft-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Menú",
          id: "product",
        },
        {
          name: "Nosotros",
          id: "about",
        },
        {
          name: "Testimonios",
          id: "testimonials",
        },
        {
          name: "Reservar",
          id: "contact",
        },
      ]}
      brandName="Dante"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      title="Cocina de autor dentro del teatro"
      description="Experiencia gastronómica premium en un ambiente único. Reserva tu mesa en Dante y descubre por qué somos el destino gastronómico más exclusivo de Santa Fe."
      testimonials={[
        {
          name: "Sarah J.",
          handle: "@foodie_sarah",
          testimonial: "Dante superó todas nuestras expectativas. El ambiente es mágico, y cada plato, una obra de arte. ¡Una noche inolvidable!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-afro-american-woman-smiling_23-2148336914.jpg?_wi=1",
          imageAlt: "Sarah Johnson, CEO",
        },
        {
          name: "Michael C.",
          handle: "@eventpro_mike",
          testimonial: "Organizamos una cena corporativa en Dante y el servicio fue impecable. La arquitectura y la propuesta culinaria impresionaron a todos nuestros clientes.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/middle-aged-man-talking-phone_150588-75.jpg?_wi=1",
          imageAlt: "Michael Chen, Event Planner",
        },
        {
          name: "Emily R.",
          handle: "@eleganteats",
          testimonial: "Cada visita a Dante es una experiencia sensorial. La fusión de historia y alta cocina crea un escenario perfecto para momentos especiales. Imprescindible en Santa Fe.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-woman-posing-yellow-jacket_23-2149020781.jpg?_wi=1",
          imageAlt: "Emily Rodriguez, Blogger",
        },
        {
          name: "David K.",
          handle: "@santafedining",
          testimonial: "El mejor restaurante de Santa Fe, sin duda. La atención al detalle, desde la bienvenida hasta el último postre, es excepcional. Un verdadero lujo gastronómico.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-outdoors-successful-business-person_23-2148763862.jpg?_wi=1",
          imageAlt: "David Kim, Food Critic",
        },
      ]}
      testimonialRotationInterval={5000}
      buttons={[
        {
          text: "Reservar ahora",
          href: "#contact",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/elegant-businesswoman-working-office-use-phone_1157-26411.jpg",
          alt: "Avatar 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/pensive-young-businessman-looking-side_329181-747.jpg",
          alt: "Avatar 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/stylish-young-woman-floral-top-sitting-sofa_23-2148130301.jpg",
          alt: "Avatar 3",
        },
        {
          src: "http://img.b2bpic.net/free-vector/modern-office-people-composition-with-flat-design_23-2147907624.jpg",
          alt: "Avatar 4",
        },
      ]}
      avatarText="Más de 1000 cenas exclusivas"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      title="Un Viaje Gastronómico con Historia y Elegancia"
      description="Ubicado en el corazón de un histórico teatro en Santa Fe, Dante fusiona la alta cocina de autor con la majestuosidad arquitectónica. Cada rincón cuenta una historia, cada plato es una sinfonía de sabores locales e internacionales, creando una experiencia inmersiva que deleita todos los sentidos."
      bulletPoints={[
        {
          title: "Arquitectura Impresionante",
          description: "Cenas bajo cúpulas históricas, rodeado de detalles artísticos y un ambiente que evoca épocas de esplendor.",
          icon: Lightbulb,
        },
        {
          title: "Cocina de Autor",
          description: "Menús estacionales elaborados con los ingredientes más frescos, transformados en creaciones innovadoras por nuestro chef estrella.",
          icon: Utensils,
        },
        {
          title: "Bodega Exclusiva",
          description: "Una selección curada de vinos argentinos e internacionales, perfecta para maridar cada plato y elevar su experiencia.",
          icon: Star,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/columns-ancient-church_1204-133.jpg"
      imageAlt="Interior of a historic theater with elegant dining setup"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="product" data-section="product">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Wagyu A la Parilla",
          price: "$65.000 ARS",
          imageSrc: "http://img.b2bpic.net/free-photo/two-pieces-medium-cooked-steak-served-with-tomato-mushroom-zucchini_141793-2460.jpg",
          imageAlt: "Premium Wagyu beef steak with garnish",
        },
        {
          id: "2",
          name: "Merluza Negra Confitada",
          price: "$58.000 ARS",
          imageSrc: "http://img.b2bpic.net/free-photo/shrimp-salad-with-vegetables-table_140725-5462.jpg",
          imageAlt: "Pan-seared Patagonian toothfish (Merluza Negra) with vegetables",
        },
        {
          id: "3",
          name: "Trilogía de Chocolate",
          price: "$32.000 ARS",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-assortment-chocolate-cupcakes_23-2148654051.jpg",
          imageAlt: "Artistic chocolate dessert with three different textures",
        },
      ]}
      title="Nuestra Carta de Creaciones"
      description="Descubra una experiencia culinaria donde la tradición se encuentra con la vanguardia. Cada plato en Dante es una declaración de pasión, utilizando ingredientes de temporada para crear obras maestras de sabor y presentación."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Martina Suárez",
          role: "Directora de Arte",
          testimonial: "Una noche absolutamente mágica. El teatro crea un telón de fondo impresionante, y la comida es simplemente sublime. La mejor experiencia gastronómica en Santa Fe.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-afro-american-woman-smiling_23-2148336914.jpg?_wi=2",
          imageAlt: "Martina Suárez",
        },
        {
          id: "2",
          name: "Juan Pablo Gómez",
          role: "Empresario",
          testimonial: "Dante es el lugar ideal para cenas de negocios. La combinación de privacidad, elegancia y un menú impecable garantiza siempre una impresión duradera. Un lujo.",
          imageSrc: "http://img.b2bpic.net/free-photo/middle-aged-man-talking-phone_150588-75.jpg?_wi=2",
          imageAlt: "Juan Pablo Gómez",
        },
        {
          id: "3",
          name: "Sofía Hernández",
          role: "Influencer de Viajes",
          testimonial: "Cada plato es una obra de arte y el servicio es de primera clase. ¡El ambiente es tan fotogénico! Dante es un 'must' para cualquiera que visite Santa Fe.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-woman-posing-yellow-jacket_23-2149020781.jpg?_wi=2",
          imageAlt: "Sofía Hernández",
        },
        {
          id: "4",
          name: "Ricardo López",
          role: "Critico Gastronómico",
          testimonial: "Dante redefine la experiencia culinaria. La audacia de la cocina de autor en un marco tan histórico es excepcional. Un referente gastronómico en Argentina.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-outdoors-successful-business-person_23-2148763862.jpg?_wi=2",
          imageAlt: "Ricardo López",
        },
        {
          id: "5",
          name: "Ana Belén Ferrari",
          role: "Organizadora de Eventos",
          testimonial: "Organizamos nuestro evento anual en Dante y la flexibilidad y profesionalismo del equipo fueron excelentes. El menú personalizado y el entorno crearon una noche inolvidable para todos.",
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-businesswoman-working-office-use-phone_1157-26411.jpg",
          imageAlt: "Ana Belén Ferrari",
        },
        {
          id: "6",
          name: "Carlos Ruiz",
          role: "Abogado Corporativo",
          testimonial: "La atención es impecable y la calidad de los ingredientes se nota en cada bocado. Dante es, sin duda, el restaurante que elijo para las ocasiones más importantes. Totalmente recomendado.",
          imageSrc: "http://img.b2bpic.net/free-photo/pensive-young-businessman-looking-side_329181-747.jpg",
          imageAlt: "Carlos Ruiz",
        },
      ]}
      title="Lo que dicen nuestros comensales"
      description="Nuestros huéspedes comparten sus experiencias. Descubra por qué Dante es elogiado por su excepcional servicio, ambiente inigualable y cocina que despierta los sentidos."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[]}
      logos={[
        "http://img.b2bpic.net/free-vector/restaurant-retro-logo-collection_23-2148359162.jpg",
        "http://img.b2bpic.net/free-vector/flat-design-travel-labels-badges_23-2149174646.jpg",
        "http://img.b2bpic.net/free-vector/flat-new-year-badges-black-background_23-2147723090.jpg",
        "http://img.b2bpic.net/free-vector/fantastic-collection-flat-badges-martin-luther-king-day_23-2147588029.jpg",
        "http://img.b2bpic.net/free-vector/creative-st-patrick-s-day-label-set_23-2148833484.jpg",
        "http://img.b2bpic.net/free-vector/elegant-wedding-label-collection_23-2147847897.jpg",
        "http://img.b2bpic.net/free-vector/sponsor-label-collection_23-2148720120.jpg",
      ]}
      title="Reconocimientos y Colaboraciones"
      description="Nos enorgullece ser reconocidos por nuestra excelencia culinaria y arquitectónica. Colaboramos con las voces más influyentes del sector para ofrecer una experiencia sin igual."
      speed={30}
      showCard={false}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Reserve su Experiencia en Dante"
      description="Complete el formulario para solicitar una reserva o realizar una consulta sobre eventos privados. Nuestro equipo se pondrá en contacto a la brevedad para asegurar una visita inolvidable."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Nombre completo",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Correo electrónico",
          required: true,
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Teléfono (WhatsApp)",
          required: false,
        },
        {
          name: "date",
          type: "date",
          placeholder: "Fecha Preferida",
          required: true,
        },
        {
          name: "time",
          type: "time",
          placeholder: "Hora Preferida",
          required: true,
        },
        {
          name: "guests",
          type: "number",
          placeholder: "Número de Comensales",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Mensaje o Solicitud Especial (ej. \"Cena de aniversario\", \"Restricciones dietéticas\", \"Consulta para evento privado\")",
        rows: 4,
        required: false,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-castle-architecture_23-2150754910.jpg"
      imageAlt="Elegant restaurant reception area with warm lighting"
      mediaAnimation="slide-up"
      mediaPosition="right"
      buttonText="Confirmar Reserva"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Navegación",
          items: [
            {
              label: "Inicio",
              href: "/",
            },
            {
              label: "Menú",
              href: "#product",
            },
            {
              label: "Nosotros",
              href: "#about",
            },
            {
              label: "Reservas",
              href: "#contact",
            },
          ],
        },
        {
          title: "Contacto",
          items: [
            {
              label: "info@dante.com",
              href: "mailto:info@dante.com",
            },
            {
              label: "+54 9 342 1234567",
              href: "tel:+5493421234567",
            },
            {
              label: "Santa Fe, Argentina",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Política de Privacidad",
              href: "#",
            },
            {
              label: "Términos y Condiciones",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Dante"
      copyrightText="© 2024 Dante. Todos los derechos reservados."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
