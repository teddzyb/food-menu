<template>
  <div class="container my-5">
    <div class="row justify-content-center align-items-center gy-5">
      <Card :key="item.id" v-for="item in items" :item="item" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Menu",
  components: {
    Card,
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.items = [
      {
        id: 1,
        name: "Bacon",
        price: 250,
        quantity: 10,
        category: ["Meat"],
        img: "https://healthyrecipesblogs.com/wp-content/uploads/2018/01/oven-bacon-featured.jpg",
      },
      {
        id: 2,
        name: "Fish",
        price: 150,
        quantity: 5,
        category: ["Seafood", "Fresh"],
        img: "https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322522/fresh-fish-on-ice.jpg",
      },
      {
        id: 3,
        name: "Chicken",
        price: 200,
        quantity: 9,
        category: ["Poultry", "Fresh"],
        img: "https://www.seriouseats.com/thmb/t82X6N4ZwGkFZmWPuCjwT-osL3g=/1500x844/smart/filters:no_upscale()/20210714-potato-starch-fried-chicken-vicky-wasik-seriouseats-20-17e193a6bf274bba9091810a0b18ef89.jpg",
      },
      {
        id: 4,
        name: "Beef",
        price: 300,
        quantity: 11,
        category: ["Meat"],
        img: "https://post.healthline.com/wp-content/uploads/2020/08/beef-update-1200x628-facebook-1200x628.jpg",
      },
      {
        id: 5,
        name: "Soy Sauce",
        price: 50,
        quantity: 0,
        category: ["Sauce", "Seasoning"],
        img: "https://www.tasteofhome.com/wp-content/uploads/2020/01/GettyImages-461879075.jpg?fit=700,1024",
      },
      {
        id: 9,
        name: "Egg",
        price: 10,
        quantity: 72,
        category: ["Dairy"],
        img: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg",
      },
      {
        id: 11,
        name: "Pork",
        price: 200,
        quantity: 12,
        category: ["Meat"],
        img: "https://www.seriouseats.com/thmb/yHg0KQZc928Iqbm8G-aOE91gJb0=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__02__20160208-sous-vide-pork-chop-guide-food-lab-37-9bfa2f9b8a464bccad99ea08423b9d8e.jpg",
      },
    ];
  },
};
</script>
