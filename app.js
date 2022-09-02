const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Afters",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Carpaccio",
      category: "Hot Meals",
      price: 7.99,
      img:
        "data:image/jpeg;base64,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",
      desc: `Vogue mutfağında temizlenmiş bonfilenin yüksek ısıda ve kısa sürede mühürlenmesiyle hazırlanıyor dana carpaccio tarifi. İnce ince dilimleniyor, anında hazırlanan steak tartar ve parmesan cipsi arasına yerleştirilen roka yaprakları eşliğinde servis ediliyor. Başlangıç olarak servis ediliyor. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];
  
  const section = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );
  
  const categoryList = () => {
    const categoryBtns = categories
      .map((category) => {
        return `<button class="btn btn-warning btn-item" data-id=${category}>${category}</button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".btn-item");
  
    //filter menu
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.id;
        console.log(category);
        const menuCategory = menu.filter((menuItem) => {
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "All") {
          menuList(menu);
        } else {
          menuList(menuCategory);
        }
      });
    });
  };
  
  const menuList = (menuItems) => {
    let displayMenu = menuItems.map((item) => {
      return `<div class="menu-items col-lg-4 col-sm-12">
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src=${item.img} alt=${item.title}>
            <div class="card-body">
            <p class="card-text"><strong>${item.title} <br>${item.price}</strong><br>${item.desc}</p>
            </div>
            </div>
            </div>
      `;
    });
    displayMenu = displayMenu.join("");
    section.innerHTML = displayMenu;
  };
  
  menuList(menu);
  categoryList();
  
//   <img
//                 src=${item.img}
//                 alt=${item.title}
//                 class="photo"
//               />
//               <div class="menu-info">
//                 <div class="menu-title">
//                   <h4>${item.title}</h4>
//                   <h4 class="price">${item.price}</h4>
//                 </div>
//                 <div class="menu-text">
//                   ${item.desc}
//                 </div>
//               </div>