var app;(app=angular.module("mainapp",[])).controller("maincontroller",["$scope",function(e){e.items=""}]),(app=angular.module("app",[])).controller("ctrl",function(s){s.cartItems=[],s.totallabel="Your cart is empty!",s.men=!0,s.cartTable=!0,s.women=!0,s.kids=!0,s.electronics=!0,s.isPayDisabled=!0,s.quantity=1,s.numOfCartItems=s.cartItems.length;s.items=[{id:"electronics",url:"images/electronics/mac.jpg",name:"Macbook Air A1466 - 13- i7 8gb 512",mrp:48e3,discount:10},{id:"men",url:"images/men/mencasual.jpg",name:"Park Avenue Men Formal Shirt",mrp:1930,discount:20},{id:"women",url:"images/women/womenShirt.jpg",name:"POISON IVY women casual white shirt",mrp:1699,discount:15},{id:"men",url:"images/men/mentees.jpg",name:"Android Black Tshirt ",mrp:485,discount:5},{id:"kids",url:"images/kids/kidsShirt.jpg",name:"Little Kangaroos Black Full Sleeves Shirt",mrp:2100,discount:10},{id:"electronics",url:"images/electronics/samsung.jpg",name:"Samsung Galaxy A8+ (Black, 6GB RAM + 64GB Memory)",mrp:30990,discount:20},{id:"electronics",url:"images/electronics/Bosch.jpeg",name:"Bosch 12 Place Setting Dishwasher (SMS40E32EU, White)",mrp:26e3,discount:11},{id:"men",url:"images/men/menkurta.jpg",name:"Black Kurta With Rust Koti",mrp:15930,discount:30},{id:"men",url:"images/men/menshoes.jpg",name:"Red Tape Men Derbys Leather Formal Shoes",mrp:1589,discount:2},{id:"women",url:"images/women/womenjumpsuits.jpeg",name:"Harpa Women Black Jumpsuits",mrp:3568,discount:8},{id:"electronics",url:"images/electronics/speaker.jpg",name:"PORTABLE WATERPROOF BLUETOOTH SPEAKER",mrp:375,discount:25},{id:"women",url:"images/women/womensneakers.jpeg",name:"Cool Women White Sneakers",mrp:1299,discount:10},{id:"kids",url:"images/kids/bag.png",name:"Teddy Blue Backpack",mrp:956,discount:5},{id:"kids",url:"images/kids/kurta.jpg",name:"Boy Kurta Payjama",mrp:2589,discount:20},{id:"men",url:"images/men/lee-tapered-jeans.png",name:"LEE MEN MODERN SERIES SLIM-FIT TAPERED-LEG JEAN",mrp:2599,discount:12},{id:"women",url:"images/women/womengucci.jpeg",name:"Gucci Women Handbag",mrp:12569,discount:25},{id:"women",url:"images/women/womenHighLowDress.jpeg",name:"Zara Women High Low Dress",mrp:499,discount:5},{id:"kids",url:"images/kids/romper.png",name:"Suspender Style Blue Romper with Cap",mrp:769,discount:15},{id:"kids",url:"images/kids/ps.jpg",name:"Horizon Zero Dawn (PS4)",mrp:1550,discount:20},{id:"electronics",url:"images/electronics/trimmer.jpg",name:"Philips BT1212/15 Beard Trimmer (Green)",mrp:899,discount:30},{id:"men",url:"images/men/StraightCollarBlackShirt.jpg",name:"Straight Collar Black Shirt",mrp:3599,discount:10}],s.addToCart=function(t,e){if(0<e&&e<5){var i={name:t.name,quantity:e,price:t.mrp/100*(100-t.discount),url:t.url,id:t.id},a=0;angular.forEach(s.cartItems,function(e){if(e.name===t.name)return e.quantity++,a++,!1}),0===a&&s.cartItems.push(i)}var r=0;angular.forEach(s.cartItems,function(e){r+=e.quantity*e.price}),s.total=r,0<s.cartItems.length?(s.totallabel="Total Rs.",s.cartTable=!1):s.cartTable=!0,s.numOfCartItems=s.cartItems.length,0<s.numOfCartItems&&(s.isPayDisabled=!1)},s.removeFromCart=function(t){angular.forEach(s.cartItems,function(e){e.id===t&&s.cartItems.pop(e)}),0<s.cartItems.length?(s.totallabel="Total Rs.",s.cartTable=!1,s.isPayDisabled=!1):(s.cartTable=!0,s.isPayDisabled=!0,s.total="",s.totallabel="Your cart is empty!");var i=0;angular.forEach(s.cartItems,function(e){i+=e.quantity*e.price}),s.total=i,s.numOfCartItems=s.cartItems.length},s.showListView=function(){s.gridDiasabled=!1,s.listDiasabled=!0,$(".eachItem").css({width:"100%",height:"400px"}),$(".eachItemDiscount").css({top:"52%",right:"-18%"}),$(".discountLabel").css({top:"59%",right:"48%"}),$(".eachItemDeal").css({top:"58%",right:"-2.5%"}),$(".dealLabel").css({top:"58%",right:"-2%"}),$("img.eachItemImage").css({width:"36%",left:"31%",height:"60%",top:"0%"}),$(".addToCartButtons").css({top:"78%",width:"72%",left:"3%",height:"10%"}),$(".quantityLabel").css({top:"66%",right:"-30%"}),$(".quantityNumber").css({top:"66%",width:"4%",right:"-31%"}),$(".priceLabel").css({top:"59%",left:"-51%"}),$(".eachItemPrice").css({top:"59%",left:"-50%"})},s.showGridView=function(){s.gridDiasabled=!0,s.listDiasabled=!1,$(".eachItem").css({width:"32%",height:"350px"}),$(".eachItemDiscount").css({top:"41%",right:"25%"}),$(".discountLabel").css({top:"41%",right:"28%"}),$(".eachItemDeal").css({top:"40%",right:"8%"}),$(".dealLabel").css({top:"40%",right:"11%"}),$("img.eachItemImage").css({width:"78%",left:"10%",height:"45%",top:"4%"}),$(".addToCartButtons").css({top:"73%",width:"115%",left:"-7.5%"}),$(".quantityLabel").css({top:"72%",right:"13%"}),$(".quantityNumber").css({top:"72%",width:"10%",right:"10%"}),$(".priceLabel").css({top:"35%",left:"15%"}),$(".eachItemPrice").css({top:"35%",left:"18%"})},s.$watchGroup(["price5","price15","price50","price150","pricemax"],function(){angular.forEach(s.items,function(e){e.price<500?s.price5=e.price:500<e.price&&e.price<1500?s.price15=e.price:1500<e.price&&e.price<5e3?s.price50=e.price:5e3<e.price&&e.price<15e3?s.price150=e.price:s.pricemax=e.price})}),s.check=function(e){return e<=500?(s.cond1=!0,s.cond1):e<=1500?(s.cond2=!0,s.cond2):e<=5e3?(s.cond3=!0,s.cond3):e<=15e3?(s.cond4=!0,s.cond4):(s.cond5=!0,s.cond5)}});