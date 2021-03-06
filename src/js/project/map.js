import ymaps from 'ymaps';




let mapInfo = [
  {
    title: "Беговой",
    underground: "Беговая",
    adress: "г. Москва, Хорошёвское шоссе, 48",
    color: "--purple",
    position: [55.776292, 37.535549]
  },
  {
    title: "Проспекте Мира",
    underground: "Проспект Мира",
    adress: "г. Москва, Проспект Мира 53с1",
    color: "--orange",
    position: [55.784804, 37.634170],
  },
  {
    title: "Раменках",
    underground: "Раменки",
    adress: "г. Москва, Столетова, 11",
    color: "--yellow",
    position: [55.703499, 37.499083],
  },
  {
    title: "Академической",
    underground: "Академическая",
    adress: "г. Москва, Винокурова, 2",
    color: "--orange",
    position: [55.689312, 37.581490],
  },
  {
    title: "Савёловской",
    underground: "Савёловская",
    adress: "г. Москва, Складочная, 1 стр 18",
    color: "--grey",
    position: [55.801435, 37.592231],
  }
]
ymaps
  .load('https://api-maps.yandex.ru/2.1/?apikey=c5b15538-f5b4-4065-8803-d2f4e3b1746f&lang=ru_RU')
  .then(maps => {
    let center;
    if (window.innerWidth > 981) {
      center = [55.757704, 37.318759];
    } else {
      center = [55.489311, 37.595243]
    }
    const myMap = new maps.Map('map', {
      center: center,
      zoom: 10
    });


    myMap.behaviors.disable('scrollZoom');

    let marker = './img/marker.svg';
    let markerHover = './img/marker-hover.svg';
    let activeMarker;
    let mapTitle = document.querySelector('.map__title span');
    let mapUndergroundText = document.querySelector('.map__block-title span');
    let mapUndergroundIco = document.querySelector('.under-ico');
    let mapUndergroundTitle = document.querySelector('.map__block-title--address');
    let myPlacemark;

    let updateInfo = (ind) => {
      mapTitle.innerHTML = "";
      mapUndergroundText.innerHTML = "";
      mapUndergroundTitle.innerHTML = "";
      mapUndergroundIco.setAttribute('class', 'under-ico');
      mapTitle.innerHTML = mapInfo[ind].title;
      mapUndergroundText.innerHTML = mapInfo[ind].underground;
      mapUndergroundIco.setAttribute('class', `under-ico ${mapInfo[ind].color}`);
      mapUndergroundTitle.innerHTML = mapInfo[ind].adress;
    }

    let updateMarker = (ind) => {
      myMap.geoObjects.removeAll();

      mapInfo.forEach((elemNew, indexNew) => {
        if (ind == indexNew) {
          activeMarker = markerHover;
        } else {
          activeMarker = marker;
        }
        myPlacemark = new maps.Placemark(elemNew.position, {}, {
          iconLayout: 'default#image',
          iconImageHref: activeMarker,
          iconImageSize: [80, 80],
          iconImageOffset: [-40, -70]
        });
        myMap.geoObjects.add(myPlacemark);
        myPlacemark.events.add('click', function () {
          updateInfo(indexNew);
          updateMarker(indexNew);
        });
      })
    }


    mapInfo.forEach((elem, index) => {
      if (index == 0) {
        activeMarker = markerHover;
        updateInfo(index);
      } else {
        activeMarker = marker;
      }
      myPlacemark = new maps.Placemark(elem.position, {}, {
        iconLayout: 'default#image',
        iconImageHref: activeMarker,
        iconImageSize: [80, 80],
        iconImageOffset: [-40, -70]
      });
      myMap.geoObjects.add(myPlacemark);


      myPlacemark.events.add('click', function () {
        updateInfo(index);
        updateMarker(index);
      });
    })
  })
  .catch(error => console.log('Failed to load Yandex Maps', error));