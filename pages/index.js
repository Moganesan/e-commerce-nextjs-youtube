import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/hero";
import Products from "../components/products";

export default function Home() {
  const Tshirts = [
    {
      image: "/fashion-product-1.jpg",
      title: "Plain Black T-Shirt",
      caption: "Black",
      price: 499,
      description:
        "Labore esse fugiat adipisicing cupidatat amet consectetur tempor. Irure sit nisi pariatur Lorem nostrud elit officia consectetur consequat nostrud cillum. Enim reprehenderit aliquip sit pariatur dolor. Nostrud tempor aute nulla nisi aliqua ea proident dolore elit esse commodo sunt anim.",
    },
    {
      image: "/fashion-product-2.jpg",
      title: "Plain T-Shirt",
      caption: "Gray",
      price: 599,
      description:
        "Labore esse fugiat adipisicing cupidatat amet consectetur tempor. Irure sit nisi pariatur Lorem nostrud elit officia consectetur consequat nostrud cillum. Enim reprehenderit aliquip sit pariatur dolor. Nostrud tempor aute nulla nisi aliqua ea proident dolore elit esse commodo sunt anim.",
    },
    {
      image: "/fashion-product-3.jpg",
      title: "Plain T-Shirt",
      caption: "Gray",
      price: 499,
      description:
        "Labore esse fugiat adipisicing cupidatat amet consectetur tempor. Irure sit nisi pariatur Lorem nostrud elit officia consectetur consequat nostrud cillum. Enim reprehenderit aliquip sit pariatur dolor. Nostrud tempor aute nulla nisi aliqua ea proident dolore elit esse commodo sunt anim.",
    },
    {
      image: "/fashion-product-4.jpg",
      title: "Plain T-Shirt",
      caption: "Yellow",
      price: 499,
      description:
        "Labore esse fugiat adipisicing cupidatat amet consectetur tempor. Irure sit nisi pariatur Lorem nostrud elit officia consectetur consequat nostrud cillum. Enim reprehenderit aliquip sit pariatur dolor. Nostrud tempor aute nulla nisi aliqua ea proident dolore elit esse commodo sunt anim.",
    },
  ];

  const Hoodies = [
    {
      image: "/hoodies-product-1.jpg",
      title: "Google Cloud Hoodie",
      caption: "Black",
      price: 899,
      description:
        "Labore esse fugiat adipisicing cupidatat amet consectetur tempor. Irure sit nisi pariatur Lorem nostrud elit officia consectetur consequat nostrud cillum. Enim reprehenderit aliquip sit pariatur dolor. Nostrud tempor aute nulla nisi aliqua ea proident dolore elit esse commodo sunt anim.",
    },
    {
      image: "/hoodies-product-2.jpg",
      title: "Microsoft Hoodie",
      caption: "Black",
      price: 699,
      description:
        "Labore esse fugiat adipisicing cupidatat amet consectetur tempor. Irure sit nisi pariatur Lorem nostrud elit officia consectetur consequat nostrud cillum. Enim reprehenderit aliquip sit pariatur dolor. Nostrud tempor aute nulla nisi aliqua ea proident dolore elit esse commodo sunt anim.",
    },
    {
      image: "/hoodies-product-3.jpg",
      title: "Amazon Hoodie",
      caption: "Black",
      price: 599,
      description:
        "Labore esse fugiat adipisicing cupidatat amet consectetur tempor. Irure sit nisi pariatur Lorem nostrud elit officia consectetur consequat nostrud cillum. Enim reprehenderit aliquip sit pariatur dolor. Nostrud tempor aute nulla nisi aliqua ea proident dolore elit esse commodo sunt anim.",
    },
    {
      image: "/hoodies-product-4.jpg",
      title: "Kali Linux Hoodie",
      caption: "Black",
      price: 799,
      description:
        "Labore esse fugiat adipisicing cupidatat amet consectetur tempor. Irure sit nisi pariatur Lorem nostrud elit officia consectetur consequat nostrud cillum. Enim reprehenderit aliquip sit pariatur dolor. Nostrud tempor aute nulla nisi aliqua ea proident dolore elit esse commodo sunt anim.",
    },
  ];

  const CoffeeMugs = [
    {
      image: "/mugs-product-1.jpg",
      title: "Microsoft Coffee Mug",
      description:
        "Labore esse fugiat adipisicing cupidatat amet consectetur tempor. Irure sit nisi pariatur Lorem nostrud elit officia consectetur consequat nostrud cillum. Enim reprehenderit aliquip sit pariatur dolor. Nostrud tempor aute nulla nisi aliqua ea proident dolore elit esse commodo sunt anim.",
      price: 899,
    },
    {
      image: "/mugs-product-2.jpg",
      title: "Nodejs Coffee Mug",
      description:
        "Labore esse fugiat adipisicing cupidatat amet consectetur tempor. Irure sit nisi pariatur Lorem nostrud elit officia consectetur consequat nostrud cillum. Enim reprehenderit aliquip sit pariatur dolor. Nostrud tempor aute nulla nisi aliqua ea proident dolore elit esse commodo sunt anim.",
      price: 699,
    },
    {
      image: "/mugs-product-3.jpg",
      title: "Angular Coffee Hoodie",
      description:
        "Labore esse fugiat adipisicing cupidatat amet consectetur tempor. Irure sit nisi pariatur Lorem nostrud elit officia consectetur consequat nostrud cillum. Enim reprehenderit aliquip sit pariatur dolor. Nostrud tempor aute nulla nisi aliqua ea proident dolore elit esse commodo sunt anim.",
      price: 599,
    },
    {
      image: "/mugs-product-4.jpg",
      title: "Google Cloud Coffee Hoodie",
      description:
        "Labore esse fugiat adipisicing cupidatat amet consectetur tempor. Irure sit nisi pariatur Lorem nostrud elit officia consectetur consequat nostrud cillum. Enim reprehenderit aliquip sit pariatur dolor. Nostrud tempor aute nulla nisi aliqua ea proident dolore elit esse commodo sunt anim.",
      price: 799,
    },
  ];

  return (
    <div>
      <Hero />
      <Products products={Tshirts} title={"Plain T-Shirts"} />
      <Products products={Hoodies} title={"Hoodies"} />
      <Products products={CoffeeMugs} title={"Coffe Mugs"} />
    </div>
  );
}
