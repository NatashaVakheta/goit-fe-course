const laptops = [
  {
    size: 13,
    color: 'white',
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'gray',
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'black',
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'white',
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'gray',
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'black',
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'white',
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'gray',
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'black',
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
];

const tmpl = Handlebars.compile(document.querySelector('#card').innerHTML.trim());

function filter() {
  const sizes = document.querySelectorAll('input[type="checkbox"][name="size"]:checked');
  const colors = document.querySelectorAll('input[type="checkbox"][name="color"]:checked');
  const release_dates = document.querySelectorAll('input[type="checkbox"][name="release_date"]:checked');
  var laptopsFiltered = [];
  for (let j = 0; j < laptops.length; j++) {
    let add = 0;
    let check = 0;
    if (sizes.length > 0) {check++;}
    if (colors.length > 0) {check++;}
    if (release_dates.length > 0) {check++;}
    for (let i = 0; i < sizes.length; i++) {
      if (sizes[i].value == laptops[j].size) {
        add++;
        break;
      }
    }
    for (let i = 0; i < colors.length; i++) {
      if (colors[i].value == laptops[j].color) {
        add++;
        break;
      }
    }
    for (let i = 0; i < release_dates.length; i++) {
      if (release_dates[i].value == laptops[j].release_date) {
        add++;
        break;
      }
    }
    if (add == check) {
      laptopsFiltered.push(laptops[j])
    }
  }
  if(laptopsFiltered.length == 0) {
    alert("Ноутбуки не найдены");
  }
  document.querySelector('#cards').innerHTML = tmpl({items: laptopsFiltered});
}